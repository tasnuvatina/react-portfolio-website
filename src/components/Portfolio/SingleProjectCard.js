import React from "react";
import './SingleProjectCard.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import destinigo from '../../images/destinigo.png'

const SingleProjectCard = (props) => {
    let project=props.project
  return (
    <div className="single-portfolio-card">
      <div>
        <img className="portfolio-pic" src={project.pic} alt="" />
      </div>
      <div className="project-info">
        <h4>{project.name}</h4>
        <p>
          {project.description}
        </p>
        <p className="portfolio-links-para">
          <span className="portfolio-link-span">
            <a href={project.clientGithubLink} className="portfolio-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
          </span>
          <span className="portfolio-link-span">
            <a href={project.liveLInk} className="portfolio-link">
              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
            </a>
          </span>
          {
              project.serverGithubLink  && <span className="portfolio-link-span">
            <a href={project.serverGithubLink} className="portfolio-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
          </span>
          }
        </p>
      </div>
    </div>
  );
};

export default SingleProjectCard;
