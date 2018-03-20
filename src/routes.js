import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';

export default (
     <Switch>
        <Route exact path ='/' component = { Splash } />
        <Route path = '/home' component = { Home } />
    </Switch>

)