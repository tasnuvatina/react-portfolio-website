import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="component-main">
      <div className="about-main">
        <div className="about-info">
          <h2>About Tasnuva Rahman </h2>
          <p>
            I am a 25 years old passionate Fullstack Web Developer based in
            Stockholm, Sweden (originally from Serbia) who enjoys building
            software. Very positive and highly motivated person with over 7
            years of experience in building beautiful websites, web and mobile
            applications with a stronger focus on the frontend technologies.
          </p>
        </div>
        <div className="about-info">
          <div className="my-skills">
            <h3>My Skills</h3>
            <div className='skill-span-div'>
              <span> <div className='single-skill'><div><img className='skill-icon' src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" alt=""/></div><div>Javascript</div></div> </span>
              <span><div className='single-skill'><div><img className='skill-icon' src="https://iconape.com/wp-content/png_logo_vector/es6-2.png" alt=""/> </div><div>ES6</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/files/ec/371378/svg/371378.svg" alt="" className="skill-icon"/>  </div><div>React</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/free/png-64/node-js-3521610-2945054.png" alt="" className="skill-icon"/> </div><div>Node.js</div></div></span>
              <span><div className='single-skill'><div> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="" className="skill-icon"/> </div><div>Express.js</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png" alt="" className="skill-icon"/> </div><div>MongoDB</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" className="skill-icon"/> </div><div>HTML5</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" className="skill-icon"/> </div><div>CSS3</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="" className="skill-icon"/> </div><div>Bootstrap</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="" className="skill-icon"/> </div><div>MaterialUI</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg" alt="" className="skill-icon"/> </div><div>Photoshop</div></div></span>
              <span><div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg" alt="" className="skill-icon"/></div><div>Illustrator</div></div></span>
            </div>
          </div>
          <div className="interested">
            <h3>Interested to work with</h3>
            <div className='skill-span-div'>
            <span> <div className='single-skill'><div><img className='skill-icon' src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" alt=""/> </div><div>Javascript</div></div></span>
            <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/files/ec/371378/svg/371378.svg" alt="" className="skill-icon"/> </div><div>React</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/rest-api-1-570529.png" alt="" className="skill-icon"/> </div><div>Rest API</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/free/png-64/node-js-3521610-2945054.png" alt="" className="skill-icon"/> </div><div>Node.js</div></div></span>
              <span><div className='single-skill'><div> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="" className="skill-icon"/> </div><div>Express.js</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png" alt="" className="skill-icon"/> </div><div>MongoDB</div></div></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
