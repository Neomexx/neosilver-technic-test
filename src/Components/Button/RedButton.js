import {React, Component} from 'react';
import { Button } from 'antd';
import '../../App.css';

class RedButton extends Component {
  render() {
    return (
      <Button type='danger'>{this.props.label}</Button>
    );
  }
}

export default RedButton;