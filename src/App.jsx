import React from 'react';
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Home from "./pages/home/Home"

const App = () => {
  return (
      <Router>
          <Nav/>
          <div className="container">
              <Sidebar/>
              <Switch>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>
    
    
  );
};

export default App;
