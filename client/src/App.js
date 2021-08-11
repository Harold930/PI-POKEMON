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
    <div className="App">
   <header>
      <Route  path = '/' component = {Nav}/>
   </header>
      <Route exact path = '/' component = {LandingPage}/>
      <Route path = '/home' component = {Home}/>
      <Switch>
          <Route path = '/pokemons/create' component={Create}/>
          <Route path='/pokemons/search?name' component = {Detail}/>
          <Route path = '/pokemons/:id' component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
