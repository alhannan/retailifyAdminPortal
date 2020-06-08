import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "normalize.css";
import "react-widgets/dist/css/react-widgets.css";
import "./base.scss";
import Loader from "react-loaders";

import configureStore from "./Store/configureStore";
import AppRouter from "./Router/AppRouter";

import { auth } from "./firebase/index";
import { adminDetail } from "./Actions";

const store = configureStore();

ReactDOM.render(
  <Loader type="ball-clip-rotate-multiple" active={true} />,
  document.getElementById("root")
);

auth.onAuthStateChanged(async (user) => {
  (await user) && await store.dispatch<any>(adminDetail(user));
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
});