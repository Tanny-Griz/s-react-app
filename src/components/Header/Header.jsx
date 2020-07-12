import React from 'react';
import './style.scss';
import '../Button/Button'
import {Button} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const Header = () => {
    return (
        // <Router>
          <header>
            <nav className="nav">
                <ul>
                  <li>
                  <Link to="/">Input simple</Link>
                  </li>
                  <li>
                  <Link to="/dnd">dnd</Link>
                  </li>
                </ul>
            </nav>
        </header>  
        // </Router>
        
    )
}

export default Header