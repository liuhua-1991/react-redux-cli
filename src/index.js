import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { routerReducer } from "react-router-redux";
import * as reducers from "./reducers";
import routes from "./routers";

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <div>{routes}</div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
