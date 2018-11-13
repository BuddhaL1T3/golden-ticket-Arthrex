import React, { Component } from 'react';

import BurgerMenu from './hamburger-menu';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img className="logo" src={require('../JR-logo.svg')} alt="logo" />
          <p>Jonathan Riggs</p>
        </div>
        <p>Full Stack Developer</p>

        <BurgerMenu />
      </div>
    );
  }
}

export default Header;
