import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './../Navbar';
import Contacts from './../Contacts';
import Form from './../Form';
import About from './../About';


const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/add" component={Form}/>
        <Route exact path="/edit/:id" component={Form}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;