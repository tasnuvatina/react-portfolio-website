import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  let [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
    <div className="bars">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      <div className="navbar-main" style={{display:"none"}}>
        
        <div>
          <div>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div>
            <nav className="nav-main nav-width">
              <ul className="nav-ul work-sans-font">
                <li className="nav-list">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-list">
                  <NavLink className="nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-list">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-list">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-list">
                  <a
                    className="nav-link nav-icon"
                    href="https://github.com/tasnuvatina"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    className="nav-link nav-icon"
                    href="https://www.linkedin.com/in/tasnuva-rahman/"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    className="nav-link nav-icon"
                    href="https://codepen.io/tasnuvarahman"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faCodepen} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
