import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="gmatei.eu.auth0.com"
      clientId="OzQArkLiVElk6NOvIthKWFmQmeyxZZBI"
      redirectUri={window.location.origin}
      audience="https://gmatei.eu.auth0.com/api/v2/"
      scope="read:messages"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
