import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './hello_world.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hello />
      </React.Fragment>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

if (import.meta.hot) {
  import.meta.hot.accept(); // Enable HMR for this module
}