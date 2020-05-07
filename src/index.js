import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { startSetProfile } from "./actions/profileAction";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(startSetProfile());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
