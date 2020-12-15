import {React, Component} from 'react';
import { Button } from 'antd';
import '../../App.css';

class BlueButton extends Component {
  render() {
    return (
      <Button type='primary'>{this.props.label}</Button>
    );
  }
}

export default BlueButton;