import { combineReducers, createStore } from 'redux';
import { ticketBoxReducer } from './reducers/ticketBoxReducer';

const rootReducer = combineReducers({
  ticketBoxReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
