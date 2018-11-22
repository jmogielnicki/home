import React, { Component } from 'react';
import './App.css';

const introText = "I'm a software engineer currently living in Seattle.  I love exploring the use of code to build apps, games, simulated natural systems, and art. Please take a look around and feel free to get in touch."

class PortfolioProject extends Component {
  render() {
    return (
      <div className="PortfolioProject">
        <a href={this.props.link}>
          <h2>{this.props.title}</h2>
        </a>
        <h5>{this.props.date}</h5>
        <p className='Small-Text'>{this.props.description}</p> 
        <br></br>
        <a href={this.props.link}>
          <img className='Project-Image' src={this.props.gif}></img>
        </a>
      </div>
    );
  }
}

export default PortfolioProject;
