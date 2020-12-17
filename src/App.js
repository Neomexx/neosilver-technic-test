import RestartButton from "./Components/Button/ButtonRestart"
import BotButton from "./Components/Button/ButtonRestart"
import React, { Component } from 'react';
import GridGame from "./Components/Grid/Grid"
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score1: 0,
      score2: 0,
      win: 0,
      lose: 0,
      bot: false,
    }
  }

  changeCurrentPlayerState = (scorePlayer1, scorePlayer2) => {
    this.setState({
      score1: scorePlayer1,
      score2: scorePlayer2,
    })
  }

  changeWinState = (winPlayer, losePlayer) => {
    this.setState({
      win: winPlayer,
      lose: losePlayer,
    })
  }

  changeBotState = (bool) => {
    this.setState({
      bot: bool
    })
  }

  render() { 
    return (
        <Layout>
          <Header>
            <h1 style={{
              color: 'white',
              marginLeft: '40%',
            }}>Rock Paper Scissors</h1>
          </Header>
          <Content>
            <div style={{
              padding: 24,
              background: 'white',
            }}>
              <GridGame scorePlayer1={this.state.score1} scorePlayer2={this.state.score2} 
                        win={this.state.win} lose={this.state.lose} bot={this.state.bot} updateScore={this.changeCurrentPlayerState} updateWinState={this.changeWinState}/>
            </div>
          </Content>
        <Footer style={{background: '#F5F5F5', marginLeft:'42%', top: '30%'}}>
          <div>
            {this.state.win === 1 && <label>You win</label>}
            <BotButton label="bot" updateBot={this.changeBotState}/>
            <RestartButton label="restart"  updateScore={this.changeCurrentPlayerState} updateWinState={this.changeWinState}/>
            {this.state.lose === 1 && <label>You lose</label>}
          </div>
        </Footer>
        </Layout>
    );
  }
}
 
export default App;
