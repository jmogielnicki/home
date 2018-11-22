import React, { Component } from 'react';
import PortfolioProject from './PortfolioProject'
import './App.css';

const introText = "I'm a software engineer currently living in Seattle.  I love exploring the use of code to build apps, games, simulated natural systems, and art. Please take a look around and feel free to get in touch."

class Portfolio extends Component {
  render() {
    const projects = this.props.projects;
    return (
      <div className="Portfolio">
        {projects.map((project, index) => 
          <div key={index}>
          <PortfolioProject 
            title={project.title}
            description={project.description}
            date={project.date}
            link={project.link}
            gif={project.gif}
          />
          <hr />
          </div> )}
      </div>
    );
  }
}

export default Portfolio;
