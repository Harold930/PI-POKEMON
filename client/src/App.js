import React from 'react';
import {Route} from 'react-router';
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
      <Route path='/pokemons/search' component = {Detail}/>
      <Route exact path = '/' component = {LandingPage}/>
      <Route  path = '/home' component = {Home}/>
      <Route path = '/pokemons/:id' component={Detail}/>
      <Route path = '/pokemons/create' component={Create}/>
    </div>
  );
}

export default App;
