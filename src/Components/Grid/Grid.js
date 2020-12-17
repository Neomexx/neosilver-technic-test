import {React, Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Row, Col, Steps } from 'antd';

const styleLeft = { background: '#F5F5F5', padding: 50, 
                    marginRight: '5%', marginLeft:'20%',
                    };
const styleRight = { background: '#F5F5F5', padding: 50};
const styleButton = {padding: 25};

const { Step } = Steps;

class GridGame extends Component {
    constructor(props) {
      super(props);
      this.state = {
        botMove: 0,
        bot: 0,
      }
    }

    changeBotState = (bool) => {
      this.setState({
        bot: bool
      })
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    HandleGamePoints(scorePlayer1, scorePlayer2) {
      if (scorePlayer1 === 3) {
        this.props.updateWinState(1, 0);
      }
      else if (scorePlayer2 === 3) {
        this.props.updateWinState(0, 1);
      }
    }

    gameChoice(choice) {
      if (choice === 1)
        choice = "rock"
      if (choice === 2)
        choice = "paper"
      if (choice === 3)
        choice = "scissors"
      this.botMove = this.getRandomInt(3);

      //console.log("props score 1 " + this.props.scorePlayer1)
      //console.log("props score 2 " + this.props.scorePlayer2)
      
      if ((this.botMove === 0 && choice === "paper") ||
          (this.botMove === 1 && choice === "scissors") ||
          (this.botMove === 2 && choice === "rock")) {
            this.props.updateScore(this.props.scorePlayer1 + 1, this.props.scorePlayer2)
      }
      else if ((this.botMove === 0 && choice === "scissors") || 
              (this.botMove === 1 && choice === "rock") ||
              (this.botMove === 2 && choice === "paper")) {
                this.props.updateScore(this.props.scorePlayer1, this.props.scorePlayer2 + 1)               
      }
      this.HandleGamePoints(this.props.scorePlayer1, this.props.scorePlayer2);
    }

    BotChoices() {
      
    }

    render() {
        return (
          <div>
        <Row>
          <Col style={{position: 'absolute', left: '1%'}}>
          <Steps direction="vertical" current={this.props.scorePlayer1}>
            <Step title="point" />
            <Step title="points" />
            <Step title="points" />
          </Steps>
          </Col>
          <Col className="gutter-row" span={6} style={styleLeft}>
            <Button icon style={styleButton} onClick={() => this.gameChoice("rock")}>
              Stone 
              <Icon name='hand rock outline' />
            </Button>
            <Button icon style={styleButton} onClick={() => this.gameChoice("paper")}>
              <Icon name='hand paper outline' />
              paper
            </Button>
            <Button icon style={styleButton} onClick={() => this.gameChoice("scissors")} >
              <Icon name='hand scissors outline' />
                scissors
            </Button>
            </Col>
            <Col span={6} style={styleRight}>
            <Button icon style={styleButton}>
              Stone 
              <Icon name='hand rock outline' />
            </Button>
            <Button icon style={styleButton}>
              <Icon name='hand paper outline' />
              paper
            </Button>
            <Button icon style={styleButton}>
              <Icon name='hand scissors outline' />
                scissors
            </Button>
          </Col>
          <Col style={{position: 'absolute', right: '1%'}}>
          <Steps direction="vertical" current={this.props.scorePlayer2}>
            <Step title="point" />
            <Step title="points" />
            <Step title="points" />
          </Steps>
          </Col>
        </Row>
        <Button onClick={() => this.gameChoice(this.getRandomInt(3))}>
                play as a bot
        </Button>
        </div>
        );
    }
}

  export default GridGame;