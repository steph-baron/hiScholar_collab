import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Main} from  "react-materialize";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <main>
            <div class="col s8">
                 <div class="col s3">
                 <img id="profileImg" src="/img/profile.jpg" alt="img"/>
                 </div>
            </div>
            <h1>Howdy</h1>
            <h2>Hello world</h2>
            <br/><br/><br/><br/>
         </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
