import React, { Component } from 'react';

class Password extends Component {
  constructor (props) {
      super(props);
      this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.props.changeHandler(e);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeHandler}/>
      </div>
    );
  }
}

export default Password;
