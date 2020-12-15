import BlueButton from "./Components/Button/BlueButton"
import React, { Component } from 'react';
import RedButton from "./Components/Button/RedButton"
import GridGame from "./Components/Grid/Grid"
import { Button, Icon,  Grid, GridColumn } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

 
class App extends Component {
  render() { 
    return (
      
        <Layout>
          <Header>
            <h1 style={{
              color: 'white',
              marginLeft: '4O%',
            }}>Rock Paper Scissors</h1>
          </Header>
          <Content>
            <div style={{
              minHeight: 500,
              padding: 24,
              background: 'white',
            }}>
              <GridGame style={{

              }}/>
            </div>
          </Content>
        <Footer>
          <div>
            <BlueButton label="start"/>
            <RedButton label="stop"/>
          </div>
        </Footer>
        </Layout>
      
    );
  }
}
 
export default App;
