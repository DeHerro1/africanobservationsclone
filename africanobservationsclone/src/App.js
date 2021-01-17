import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FirstContent from './components/FirstContent/FirstContent';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer.js';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SignUp from './components/FirstContent/SignUp/SignUp';
import LogIn from './components/FirstContent/Login/LogIn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route  path="/signup" component={SignUp} />
        <Route exact path="/">
          <FirstContent />
          <MainContent />
          <Footer />
        </Route> 
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
