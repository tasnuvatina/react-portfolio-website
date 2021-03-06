import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/f3de93b4916d4c4788a7eb8a4a8e75cb (2).png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  let [isNavOpen, setIsNavOpen] = useState(false);
  let handleClick=()=>{
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div>
    <div className="bars">
          <button onClick={handleClick}>
            {
              isNavOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />
            }
          </button>
        </div>
      <div className="navbar-main" style ={{display : isNavOpen? "flex" : "none" }}>
        
        <div>
          <div className='nav-img-div'>
            <NavLink to="/" onClick={handleClick}>
              <img className='nav-img' src={logo} alt="" />
            </NavLink>
          </div>
          <div>
            <nav className="nav-main nav-width">
              <ul className="nav-ul work-sans-font">
                <li className="nav-list">
                  <NavLink className="nav-link" to="/about" onClick={handleClick}>
                    About
                  </NavLink>
                </li>
                <li className="nav-list">
                  <NavLink className="nav-link" to="/portfolio" onClick={handleClick}>
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-list">
                  <NavLink className="nav-link" to="/resume" onClick={handleClick}>
                    Resume
                  </NavLink>
                </li>
                {/* <li className="nav-list">
                  <NavLink className="nav-link" to="/blog" onClick={handleClick}>
                    Blog
                  </NavLink>
                </li> */}
                <li className="nav-list">
                  <NavLink className="nav-link" to="/contact" onClick={handleClick}>
                    Contact
                  </NavLink>
                </li>
                <li className="nav-list nav-icon-list">
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
