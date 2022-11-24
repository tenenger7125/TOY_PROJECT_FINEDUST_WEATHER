import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import configureStore from "redux/store/store";
import GlobalStyle from "./global.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={configureStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
