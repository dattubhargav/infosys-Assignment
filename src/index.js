import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider } from "react-intl"
import translationPicker from "./intl/translationPicker"

import { Provider } from "react-redux"
import store from "./store"

// Picking the language from an API or a browser navigator
const language = navigator.language

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={translationPicker(language)}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker();
