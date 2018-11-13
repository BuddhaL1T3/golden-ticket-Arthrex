import React, { Component } from 'react';
import '../burger-menu.css';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  toggleClick() {
    this.setState({ className: true });
  }

  render() {
    if (this.state.clicked === true) {
      console.log('unhide/hide drop down menu');
    }
    return (
      <button className="hamburger" id="hamburger" onClick={() => this.toggleClick()}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    );
  }
}
export default BurgerMenu;
