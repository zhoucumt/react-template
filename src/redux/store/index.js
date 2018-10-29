import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { connectRouter, routerMiddleware } from "connected-react-router";

import reducers from "../reducers";

export const history = createBrowserHistory();
const initialState = {};

// applyMiddleware(thunk, middleware)

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;
