import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Nav from './components/Nav'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
