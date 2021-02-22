import React from 'react';
import './css/core.css';
import './css/style.css';

// import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Welcome from './components/Welcome.jsx'
import Skill from './components/Skill.jsx'
import Cart from './components/Cart.jsx'
import ListBoard from './components/ListBoard.jsx'
import NotFound from './components/NotFound.jsx'
import Details from './components/Details.jsx'
import AddBoard from './components/AddBoard.jsx'



function App() {

  return (
    <Router>
    <NavigationBar/>        
      <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/skill" exact component={Skill}/>
          <Route path="/skill/:id" exact component={Details}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/board" exact component={ListBoard}/>
          <Route path="/edit/:id" exact component={AddBoard}/>
          <Route path="/board/haribo" exact component={AddBoard}/>
          <Route component={NotFound}/>
      </Switch>    
          
    </Router>
  );
}

export default App;
