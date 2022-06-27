import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import viewReducer from './store/view/reducer';
import teamsReducer from './store/teams/reducer';
import App from './App';
import membersReducer from './store/members/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(combineReducers({
  view: viewReducer,
  teams: teamsReducer,
  members: membersReducer
}))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch