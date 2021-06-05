import React, {useEffect} from "react";
import Header from "./components/Header";
import Main from "./pages/main"
import Portfolio from "./pages/portfolio"
import Project from "./components/Project"
import Footer from "./components/Footer";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  },[]);

  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path= "/" component={Main}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/project" component={Project}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
