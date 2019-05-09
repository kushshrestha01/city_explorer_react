import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

class MainComponent extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<MainComponent />, rootElement);