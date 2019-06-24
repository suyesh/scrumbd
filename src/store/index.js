import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducers";
import thunk from "redux-thunk";

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancers];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(Reducer, preloadedState, composedEnhancer);

  return store;
};

export default configureStore;
