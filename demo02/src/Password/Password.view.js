import React, { Component } from 'react';

const PasswordView = ({
  changeHandler
}) => (
  <div>
    <input type="text" onChange={changeHandler} />
  </div>
);

export default PasswordView;
