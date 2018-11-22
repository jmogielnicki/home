import React, { Component } from 'react';
import Image from './media/profile_image.jpg'
import Portfolio from './Portfolio'
import {portfolioProjects} from './PortfolioData'
import './App.css';

const introText = "I'm a software engineer currently living in Seattle.  I'm into building apps, games, simulated natural systems, and art. Please take a look around and feel free to get in touch."

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Outer-container">
          <div className="Inner-container">
            <img src={Image} className="Profile-image" alt="logo" />
            <h1>
              Hi!  I'm John.
            </h1>
            <p>
              {introText}
            </p>
            <br></br>
            <hr></hr>
            <h1>
              Some Projects
            </h1> 
            <hr></hr>
            <Portfolio
              projects={portfolioProjects}
            />
          </div>
        </header>      
      </div>
    );
  }
}

export default App;
