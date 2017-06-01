import React, { Component } from 'react';

class Match extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      (this.props.isMatched) ? (
        <div>
          <h2>Matched</h2>
        </div>
      ) : (
        <div>
          <h2>Not Matched</h2>
        </div>
      )
    );
  }
}

export default Match;
