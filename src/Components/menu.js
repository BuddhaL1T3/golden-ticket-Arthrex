import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="menu-container">
        <ul className="menu">
          <li className="menu-title">
            <span className="menu-a">Job Seeker</span>
          </li>
          <li className="menu-li">
            <a className="menu-a" target="_blank" rel="noopener noreferrer" href="https://github.com/BuddhaL1T3">
              <span>GitHub</span>
            </a>
          </li>
          <li className="menu-li">
            <a
              className="menu-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jonathan-riggs-34898476/"
            >
              <span>LinkedIn</span>
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" target="_blank" rel="noopener noreferrer" href="https://www.JonathanRiggs.me">
              <span>Portfolio</span>
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="mailto:jmriggs75@gmail.com">
              <span>Email</span>
            </a>
          </li>
          <li className="menu-li">
            <a
              className="menu-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1v47vkAcnYCNe2MI39fx6ueRPm5iBO920/view?usp=sharing"
            >
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
