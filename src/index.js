import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { configureStore } from './store';
import { NotificationContainer } from 'react-notifications';
import './index.scss';
import App from './App';

const mountPoint = document.getElementById('root');
const locale = 'en';
const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store} key="provider">
    <IntlProvider locale={locale}>
      <App />
      <NotificationContainer/>
    </IntlProvider>
  </Provider>,
  mountPoint
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
