import React, { Component } from 'react';
import Header from './Components/header';
import Menu from './Components/menu';
import Data from './Components/data';
import Footer from './Components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Data />
        <Footer />
      </div>
    );
  }
}

export default App;
