import './App.css';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom'; 
import {NavBar, Cart, Home, NotFound } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>        
          <Route path='/cart' compoenent={<Cart />} /> 
          <Route path='/' exact component={<Home /> } />
          <Redirect to='/not-found' />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
