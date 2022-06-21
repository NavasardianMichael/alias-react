import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initialViewState, initState } from './store/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const state = initState()

root.render(
  <React.StrictMode>
    <state.ViewContext.Provider value={initialViewState}>
      <App />
    </state.ViewContext.Provider>
  </React.StrictMode>
);