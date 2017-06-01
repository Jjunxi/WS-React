import React, { Component } from 'react';

function Match(props) {
  return (
    (props.isMatched) ? (
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

export default Match;
