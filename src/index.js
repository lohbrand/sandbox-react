import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Pca from "./containers/pca.container";
import * as serviceWorker from "./service-worker";

/* global/window object for callbacks  */
//ToDo: Check integrate cchipPrint cchip.printPages and cchip.onPrintReady

/* First load data setup */
// window.pca = {
//   setData: Pca.insertData,
//   nextPage: PageTransitionEvent.nextPage
// };

//import { Data as IncomeData } from "./data";
//const { Provider, Consumer } = React.createContext(IncomeData);

/* Second load style setup */

// import {Theme as DefaultTheme} from "./theme"

/* Third render data */

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Pca />
  </StrictMode>,
  rootElement
);

serviceWorker.register();

/* demonstrate external calls */
// pca.insertData();
