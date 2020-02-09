import React from "react";
import './Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './Home/App';
import Generator from './Generator/Generator';
import Footer from './Footer'

export default function Main() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ReactJS/seatgenerator/">Home</Link>
            </li>
            <li>
              <Link to="/ReactJS/seatgenerator/generator">Generator</Link>
            </li>
            <li className="floatMe">
              <a className="active" href="https://lasikuula.net">Creater</a>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ReactJS/seatgenerator/generator">
            <GeneratorSite />
          </Route>
          <Route path="/ReactJS/seatgenerator/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

function Home() {
  return <App />;
}

function GeneratorSite() {
  return <Generator />
}