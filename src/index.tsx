import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import 'normalize.css';
import "react-widgets/dist/css/react-widgets.css";
// import "./index.scss";
import './base.scss';

import configureStore from "./Store/configureStore";
import AppRouter from "./Router/AppRouter";

// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./Material-UI/theme";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <AppRouter />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById("root")
);
