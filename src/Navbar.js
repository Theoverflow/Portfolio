import React, { Component } from 'react';
import './Navbar.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faLightbulb, faProjectDiagram, faDragon, faSun, faAtom, faMoon} from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
import Portfolio from './Portfolio';
import Projects from './Project';
import Contact from './Contact';
import Game from './Game';
import {BrowserRouter as Router, Switch,
  Route, Link} from 'react-router-dom';


export default class Navbar extends Component {
  state = {
    currentTheme: "light",
    click : false,
  }

  changeThemeClick = (event) => {
    const {click} = this.state
    this.setState({click : true})
    return
  }

  changeTheme = (event) => {
    const {currentTheme, click} = this.state
    if(!click){
      if(currentTheme === "light"){
        this.setState({currentTheme : "dark"})
      } else {
        this.setState({currentTheme : "light"})
      }
    }
    this.setState({click : false})
    return
  }

  render(){
    const {currentTheme} = this.state
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home theme={currentTheme}/>
          </Route>
          <Route path="/portfolio">
            <Portfolio theme={currentTheme}/>
          </Route>
          <Route path="/projects">
            <Projects theme={currentTheme}/>
          </Route>
          <Route path="/contact">
            <Contact theme={currentTheme}/>
          </Route>
          <Route path="/game">
            <Game theme={currentTheme}/>
          </Route>
        </Switch>

        <nav className={`navbar ${currentTheme}`}>
          <ul className="navbar-nav">
            <li className="logo">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon  className="svgNav" icon={faAtom} fixedWidth size="lg"/>
                <span className="link-text logo-text">
                  THEO MARINI
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                <FontAwesomeIcon  className="svgNav" icon={faAddressBook} fixedWidth size="lg"/>
                <span className="link-text">
                  Portfolio
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                <FontAwesomeIcon className="svgNav" icon={faLightbulb} fixedWidth size="lg"/>
                <span className="link-text">
                  Projects
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <FontAwesomeIcon className="svgNav" icon={faProjectDiagram} fixedWidth size="lg"/>
                <span className="link-text">
                  Contact
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/game" className="nav-link">
                <FontAwesomeIcon className="svgNav" icon={faDragon} fixedWidth size="lg"/>
                <span className="link-text">
                  Game
                </span>
              </Link>
            </li>

            <li className="nav-item" onClick={this.changeThemeClick} onMouseOver={this.changeTheme} onMouseOut={this.changeTheme}>
              <div className="nav-link" >
                {currentTheme === "light" ?
                  <FontAwesomeIcon className="theme-icon" id="lightM" icon={faSun} fixedWidth size="lg"/> :
                  <FontAwesomeIcon className="theme-icon" id="darkM" icon={faMoon} fixedWidth size="lg"/>
                }
                {currentTheme === "light" ?
                  <span className="link-text">Light Mode</span>:
                  <span className="link-text">Dark Mode</span>
                }
              </div>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}
