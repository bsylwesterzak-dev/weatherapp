import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import { createStore} from 'redux';

import rootReducer from './reducers/index';
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root'));