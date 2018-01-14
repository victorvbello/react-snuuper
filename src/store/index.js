import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import IndexReducer from '../reducers';

export default function configureStore() {
  return createStore(
    IndexReducer,
    applyMiddleware(thunk)
  );
}