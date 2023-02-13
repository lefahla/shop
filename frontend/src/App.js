import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavBar, Cart, Home, NotFound } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route  path="/cart" component={Cart}/>
          <Route  path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" /> 

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
