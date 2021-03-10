// import React from 'react';

// import './css/style.css';

// // import {Container, Row, Col} from 'react-bootstrap'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import NavigationBar from './components/NavigationBar'
// import Welcome from './components/Welcome.jsx'
// import Skill from './components/Skill.jsx'
// import Cart from './components/Cart.jsx'
// import ListBoard from './components/ListBoard.jsx'
// import NotFound from './components/NotFound.jsx'
// import Details from './components/Details.jsx'
// import AddBoard from './components/AddBoard.jsx'



// function App() {

//   return (
//     <Router>
//     <NavigationBar/>        
//       <Switch>
//           <Route path="/" exact component={Welcome}/>
//           <Route path="/skill" exact component={Skill}/>
//           <Route path="/skill/:id" exact component={Details}/>
//           <Route path="/cart" exact component={Cart}/>
//           <Route path="/board" exact component={ListBoard}/>
//           <Route path="/edit/:id" exact component={AddBoard}/>
//           <Route path="/board/haribo" exact component={AddBoard}/>
//           <Route component={NotFound}/>
//       </Switch>    
          
//     </Router>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './Css/core.css';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routers/Router';
import Store from './Store/store';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        logged: false,
        onLogin: this.onLogin,
        onLogout: this.onLogout
    }
  }

  // Login Func
  onLogin = () => {
    this.setState({
        logged: true
    });
  }

  // Logout Func
  onLogout = () => {
    this.setState({
        logged: false
    });

    const provider = window.sessionStorage.getItem('provider');    
    //Google AccessToken Remove
    if(provider === 'google') {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log('Goolge Logout.');
      });
    }
    // Kakao AccessToken Remove
    else if(provider === 'kakao'){
      window.Kakao.Auth.logout(function() {
        console.log("Kakao logout");
      });
    }
    //SessionStorage Clear
    window.sessionStorage.clear();
  }

  componentDidMount() {
    const id = window.sessionStorage.getItem('id');
    if(id) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } = this.state;

    return (
      <Store.Provider value={this.state}>
        <Layout>
          <Header logged={logged} onLogout={onLogout}/>
          <Navigation />
          <Content>
            <Router />
          </Content>
        </Layout>
      </Store.Provider>
    );
  }
}

const Layout = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-flow: row wrap;
`
const Content = styled.div`
  margin: 0 auto;
`

export default App;