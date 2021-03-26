import React from "react";
import {Route, Switch} from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import Form from "./Form"
import Order from "./Order";


const App = () => {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza">
          <Form/>
        </Route>
        <Route path="/confirmation">
        <Order/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
