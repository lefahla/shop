import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Configure reduxStore
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsSlice from './features/productsSlice';
const store = configureStore({
  reducer:{
    product: productsSlice
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
 </React.StrictMode>
);
