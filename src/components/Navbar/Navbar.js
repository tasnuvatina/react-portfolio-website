import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div>
        <div>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <nav className="nav-main">
            <ul className="nav-ul">
              <li className="nav-list">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-list">
                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-list">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-list">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-list">
              <a className="nav-link nav-icon" href="https://github.com/tasnuvatina" target='_blank' rel='norefferer'><FontAwesomeIcon icon={faGithub} /></a>
                <a className="nav-link nav-icon" href="https://www.linkedin.com/in/tasnuva-rahman/" target='_blank' rel='norefferer'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="nav-link nav-icon" href="https://codepen.io/tasnuvarahman" target='_blank' rel='norefferer'><FontAwesomeIcon icon={faCodepen} /></a>
                
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
