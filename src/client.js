import React from 'react';
import ReactDOM from 'react-dom';
import ClickMe from './components/ClickMe';

ReactDOM.hydrate(<ClickMe />, document.getElementById('content'));
