import React from 'react';
import ReactDOM from 'react-dom';

const elementoComJSX = (
  <div className="dudu" >
    <h1>Opa JSX</h1>
  </div>
)

ReactDOM.render(
  elementoComJSX,
  document.getElementById('root')
)