import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { MetamaskStateProvider } from 'use-metamask';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <MetamaskStateProvider>
      <App />
    </MetamaskStateProvider>
  </StrictMode>,
  document.querySelector('#root')
);
