import {React, Component} from 'react';
import { Button, Icon,  Grid, GridColumn } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'antd';

/*class GridGame extends Component {
    render() {
      return (
        <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={1}>
                <Button icon>
                  Stone 
                  <Icon name='hand rock outline' />
                </Button>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button icon>
                <Icon name='hand scissors outline' />
                  scissors
                </Button>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button icon>
                  <Icon name='hand paper outline' />
                   paper
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1}>
                <Button icon>
                  Stone 
                  <Icon name='hand rock outline' />
                </Button>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button icon>
                <Icon name='hand scissors outline' />
                  scissors
                </Button>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button icon>
                  <Icon name='hand paper outline' />
                   paper
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      );
    }
  }*/

const style = { background: '#DCDCDC', padding: 50, marginRight: 10   };

class GridGame extends Component {
    render() {
        return (
        <Row>
            <Col className="gutter-row" span={11} style={style}>col
            </Col>
            <Col span={11} style={style}>col</Col>
        </Row>
        );
    }
}

  export default GridGame;