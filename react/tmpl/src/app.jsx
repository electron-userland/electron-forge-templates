import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (<h2>Welcome to React!</h2>);
  }
}

const render = () => {
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
};

render();
if (module.hot) {
  module.hot.accept(render);
}
