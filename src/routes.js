import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Bio from './components/Bio/Bio';
import Admin from './components/Admin/Admin';
import Blog from './components/Blog/Blog';
import Promotions from './components/Promotions/Promotions';
import Shop from './components/Shop/Shop';



export default (
     <Switch>
         
        <Route exact path ='/' component = { Splash } />
        <Route path ='/admin' component = { Admin } />
        <Route path ='/bio' component = { Bio } />
        <Route path ='/blog' component = { Blog } />
        <Route path ='/gallery' component = { Gallery } />
        <Route path = '/home' component = { Home } />
        <Route path = '/promotions' component = { Promotions } />
        <Route path = '/shop' component = { Shop } />
        
    </Switch>

)