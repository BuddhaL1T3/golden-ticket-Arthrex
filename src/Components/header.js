import React, { Component } from 'react';

class Header extends Component {
  render() {
    let logoNameClass, professionClass, noteClass;
    if (this.props.clicked === true) {
      logoNameClass = 'hidden';
      professionClass = 'profession';
      noteClass = 'note';
    } else {
      logoNameClass = 'logo-name';
      professionClass = 'hidden';
      noteClass = 'hidden';
    }
    return (
      <div className="header">
        <div className={logoNameClass}>
          <img className="logo" src={require('../JR-logo.svg')} alt="logo" />
          <p className="name">Jonathan Riggs</p>
        </div>
        <p className={professionClass}>Full Stack Developer</p>
        <p className={noteClass}>CHECK ME OUT!!!</p>
        <button className="hamburger" id="hamburger" onClick={() => this.props.toggleClick()}>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </div>
    );
  }
}

export default Header;
