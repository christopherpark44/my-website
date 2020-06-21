import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'; 
import HomePage from './pages/homepage'
import ProjectsPage from './pages/projectspage';
import ResumePage from './pages/resumepage';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';
import OtherPage from './pages/otherpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>        
          <Route path="/projects" component={ProjectsPage}></Route>
          <Route path="/resume" component={ResumePage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/other" component={OtherPage}></Route>
          <Route path="/" component={HomePage}></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
