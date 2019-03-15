import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HardcoreApp from './HardcoreApp';
import {register} from './serviceWorker';

// Reference app container for hot loader
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
    ReactDOM.render(
      // Wrap App inside AppContainer
      <AppContainer>
        <HardcoreApp/>
      </AppContainer>,
      document.getElementById('hardcore-app')
    );
  };

// Do this once
register();

// Render once
render(HardcoreApp);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./HardcoreApp', () => {
      render(HardcoreApp);
    });
}