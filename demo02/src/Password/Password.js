import React, { Component } from 'react';
import PasswordView from './Password.view';

class Password extends Component {
  constructor (props) {
      super(props);
      this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler (e)
  {
      this.props.changeHandler(e);
  }

  render() {
    return (
      <PasswordView changeHandler={this.changeHandler}/>
    );
  }
}

export default PasswordView;
