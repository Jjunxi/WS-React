import React, { Component } from 'react';
import DemoView from './Demo.view';

class Demo extends Component {
  constructor () {
      super();
      this.state = {
        first: '',
        second: '',
      };
      this.passwordHandler1 = this.passwordHandler1.bind(this);
  }

  passwordHandler1(e) {
    this.setState({
      first: e.target.value
    });
    console.log('first changed');
  }

  passwordHandler2 = (e) => {
    this.setState({
      second: e.target.value
    });
    console.log('second changed');
  }

  match() {
      return (this.state.first == this.state.second);
  }

  render() {
    return (
      <DemoView
        passwordHandler1={this.passwordHandler1}
        passwordHandler2={this.passwordHandler2}
        isMatched={this.match()}
      />
    );
  }
}

export default Demo;
