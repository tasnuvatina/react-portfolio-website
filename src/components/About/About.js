import React from "react";
import "./About.css";
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="component-main">
      <div className="about-main">
        <motion.div className="about-info"
        initial={{x:-200}}
        animate={{x:0}}
        transition={{type:'spring',damping:30,stiffness:120}}
        >
          <h2 className='poppins-font h2-headers'> 
          <div style={{display:'inline-block'}} className='mr-3'>
          <motion.div
           whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>A</motion.div><motion.div
           whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>b</motion.div><motion.div
           whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>o</motion.div><motion.div
           whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>u</motion.div><motion.div
           whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>t</motion.div>
          </div>
           <span className='name-span'> 
           <div style={{display:'inline-block'}}>
           <motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}> T</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>a</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>s</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>n</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>u</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>v</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>a</motion.div> 
           </div>
          <div style={{display:'inline-block'}}>
          <motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>R</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>a</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>h</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>m</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>a</motion.div><motion.div
          whileHover={{scale:.7}} transition={{type:'spring',damping:3,stiffness:100}} style={{display:'inline-block'}}>n</motion.div>
          </div></span> </h2>
          <p className='work-sans-font all-p'>
            I am a Fullstack Web Developer based in
            Khulna,Bangladesh who enjoys building
            software. Very positive and highly motivated person with experience in building beautiful websites, web and mobile
            applications with a stronger focus on the frontend technologies.
          </p>
        </motion.div>
        <motion.div className="about-info"
        initial={{x:200}}
        animate={{x:0}}
        transition={{type:'spring',damping:30,stiffness:120}}
        >
          <div className="my-skills my-4">
            <h3 className="work-sans-font h3-headers">My Skills</h3>
            <div className='skill-span-div work-sans-font'>
              <span> <div className='single-skill'><div><img className='skill-icon mr-1' src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" alt=""/></div><div>Javascript</div></div> </span>
              <span><div className='single-skill'><div><img className='skill-icon mr-1' src="https://iconape.com/wp-content/png_logo_vector/es6-2.png" alt=""/> </div><div>ES6</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/files/ec/371378/svg/371378.svg" alt="" className="skill-icon mr-1"/>  </div><div>React</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/free/png-64/node-js-3521610-2945054.png" alt="" className="skill-icon mr-1"/> </div><div>Node.js</div></div></span>
              <span><div className='single-skill'><div> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="" className="skill-icon mr-1"/> </div><div>Express.js</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png" alt="" className="skill-icon mr-1"/> </div><div>MongoDB</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" className="skill-icon mr-1"/> </div><div>HTML5</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" className="skill-icon mr-1"/> </div><div>CSS3</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="" className="skill-icon mr-1"/> </div><div>Bootstrap</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="" className="skill-icon mr-1"/> </div><div>MaterialUI</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg" alt="" className="skill-icon mr-1"/> </div><div>Photoshop</div></div></span>
              <span><div className='single-skill'><div><img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg" alt="" className="skill-icon mr-1"/></div><div>Illustrator</div></div></span>
            </div>
          </div>
          <div className="interested my-4 ">
            <h3 className="work-sans-font h3-headers">Interested to work with</h3>
            <div className='skill-span-div work-sans-font'>
            <span> <div className='single-skill'><div><img className='skill-icon mr-1' src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" alt=""/> </div><div>Javascript</div></div></span>
            <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/files/ec/371378/svg/371378.svg" alt="" className="skill-icon mr-1"/> </div><div>React</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/rest-api-1-570529.png" alt="" className="skill-icon mr-1"/> </div><div>Rest API</div></div></span>
              <span> <div className='single-skill'><div><img src="https://cdn.iconscout.com/icon/free/png-64/node-js-3521610-2945054.png" alt="" className="skill-icon mr-1"/> </div><div>Node.js</div></div></span>
              <span><div className='single-skill'><div> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="" className="skill-icon mr-1"/> </div><div>Express.js</div></div></span>
              <span> <div className='single-skill'><div><img src="https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png" alt="" className="skill-icon mr-1"/> </div><div>MongoDB</div></div></span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
