import React from 'react';
import { createRoot } from 'react-dom/client';
import ButtonDefaultExample from './button-default-example';

const App = () => {
  return (
    <React.Fragment>
      <ButtonDefaultExample />
    </React.Fragment>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);