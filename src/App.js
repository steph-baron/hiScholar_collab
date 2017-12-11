import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from  "./components/Main";


class App extends Component {
  render() {
    return (
      <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header />
             </div>
            <div className="main">
              <Main/>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
