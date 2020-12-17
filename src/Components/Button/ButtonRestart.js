import {React, Component} from 'react';
import { Button } from 'antd';
import '../../App.css';

class RestartButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.updateScore(0, 0);
    this.props.updateWinState(0, 0);
  }

  render() {
    return (
      <Button type='primary' onClick={this.handleClick}>{this.props.label}</Button>
    );
  }
}

export default RestartButton;