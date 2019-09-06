import React from 'react';
import image from "../src/images/instagram-logo.png";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="navbar">
          <div id="logo">
              <button>
                  <i className="fab fa-instagram"></i>
                  
                  <img id="logoText" src ={image} alt="Instagram logo" height= "45px" width = "100px"/>
              </button>
          </div>

          <div id="search">
              <input type="text" placeholder= "Search"></input>
          </div>

          <div id="S">
              
              <button><i className="fas fa-paper-plane"></i></button>
          </div>
        
      </div>
    );
  }
}

export default App;
