import React, { Component } from 'react';
import Header from './Components/header';
import Menu from './Components/menu';
import Data from './Components/data';
import Footer from './Components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = {
      clicked: false
    };
  }

  toggleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="App">
        <Header clicked={this.state.clicked} toggleClick={this.toggleClick} />
        <Menu clicked={this.state.clicked} />
        <Data />
        <Footer />
      </div>
    );
  }
}

export default App;
