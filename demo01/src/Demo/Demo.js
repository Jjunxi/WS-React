import React, { Component } from 'react';
import Password from "../Password/Password";
import Match from "../Match/Match";


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
      <div>
        <Password changeHandler={this.passwordHandler1}/>
        <Password changeHandler={this.passwordHandler2}/>
        <Match isMatched={this.match()} />
      </div>
    );
  }
}

export default Demo;
