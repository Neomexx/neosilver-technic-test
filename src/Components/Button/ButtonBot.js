import { React, Component } from 'react';
import { Button } from 'antd';
import '../../App.css';

class BotButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.updateBot(true);
  }

  render() {
    return (
      <Button type='primary' onClick={this.handleClick}>{this.props.label}</Button>
    );
  }
}

export default BotButton;