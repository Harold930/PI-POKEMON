import React from 'react';
import {Route ,Switch} from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detail/Detail';
import Create from './Components/Create/Create';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {LandingPage}/>
      <div className='App'>
        <Route  path = '/home' component = {Nav}/>
        <Route exact path = '/home' component = {Home}/>
        <Switch>
            <Route path = '/home/pokemons/create' component={Create}/>
            <Route path='/home/pokemons/search?name' component = {Detail}/>
            <Route path = '/home/pokemons/:id' component={Detail}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
