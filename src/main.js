import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

const template = (
  <div>
    <Alert type={'danger'} text={'Indicates a dangerous or potentially negative action.'} />
    <Alert type={'success'} text={'Indicates a successful or positive action.'} />
    <Alert type={'info'} text={'Indicates a neutral informative change or action.'} />
    <Alert type={'warning'} text={'Indicates a warning that might need attention.'} />
  </div>
);

ReactDOM.render(template, document.getElementById('app'));
