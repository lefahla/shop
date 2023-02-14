import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Configure reduxStore
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer, { productsFetch } from './features/productsSlice';
const store = configureStore({
  reducer:{
    product: productsReducer
  },
});
// Dispatch the new updated state
store.dispatch(productsFetch(
   
));

 ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
 );
