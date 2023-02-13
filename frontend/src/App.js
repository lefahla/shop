import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavBar, Cart, Home, NotFound } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" /> 

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
