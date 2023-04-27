import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Client from 'shopify-buy';
import { Provider } from 'react-redux';
import store from './store'

const client = Client.buildClient({ storefrontAccessToken: 'your-access-token', domain: 'your-shopify-url.myshopify.com' });
store.dispatch({type: 'CLIENT_CREATED', payload: client});

const root = ReactDOM.createRoot(document.getElementById('root'));

// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then((res) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
 });
 client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
 });
 client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
 });

ReactDOM.render(
  <Provider store={store}>
     <IntlProvider locale={locale} messages={flattenMessages(messages[locale.substring(0, 2)])}>
       <App locale={locale}/>
     </IntlProvider>
  </Provider>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
