import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    const { github, ...projectWithoutGithub } = projects[0]; // Extracting github and the rest of the project
    return (
      <div className={`project-sub-container-1`}>
        <h3>{projectWithoutGithub.title}</h3>
        <img src={projectWithoutGithub.image} alt={projectWithoutGithub.title}></img>
        <div>{projectWithoutGithub.description}</div>
        <div className="link-container">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["CORPORATE PROJECT", "PERSONAL PROJECT"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
