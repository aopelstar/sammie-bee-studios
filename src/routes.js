import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash/Splash';

export default (
    <HashRouter>
        <Route exact path ='/' component = { Splash } />
    </HashRouter>

)