import React from 'react';
import ReactDOM from 'react-dom';
import HardcoreApp from './HardcoreApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HardcoreApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
