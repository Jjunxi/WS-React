import React, { Component } from 'react';

import './Demo.css';
import Password from '../Password/Password';
import Match from '../Match/Match';

const DemoView = ({
  passwordHandler1,
  passwordHandler2,
  isMatched
}) => (
  <div>
    <Password changeHandler={passwordHandler1}/>
    <Password changeHandler={passwordHandler2}/>
    <Match isMatched={isMatched} />
  </div>
);

export default DemoView;
