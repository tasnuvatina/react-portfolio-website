import React from "react";
import "./Resume.css";
import logo from "../../images/f3de93b4916d4c4788a7eb8a4a8e75cb (2).png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCertificate,
  faCode,
  faExternalLinkSquareAlt,
  faGraduationCap,
  faProjectDiagram,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";




const Resume = () => {
  return (
    <div>
      <div className="component-main">
        <div className="resume-main">
          <div>
            <div className="portfolio-header">
              <div className="container">
                <motion.h2
                  className="h2-headers poppins-font"
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 120,
                    delay: 0.5,
                  }}
                >
                  Tasnuva Rahman
                </motion.h2>
                <motion.h5
                  className=" poppins-font"
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 120,
                    delay: 0.9,
                  }}
                >
                  tasnuvarahman1996@gmail.com
                </motion.h5>
                <motion.h5
                  className="poppins-font mt-3"
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 120,
                    delay: 1.3,
                  }}
                >
                  <a
                    className="resume-link resume-icon"
                    href="https://github.com/tasnuvatina"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    className="resume-link resume-icon"
                    href="https://www.linkedin.com/in/tasnuva-rahman/"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    className="resume-link resume-icon"
                    href="https://codepen.io/tasnuvarahman"
                    target="_blank"
                    rel="norefferer"
                  >
                    <FontAwesomeIcon icon={faCodepen} />
                  </a>
                </motion.h5>
                {/* summery section */}
                <p className="work-sans-font text-left mt-4">
                  Web Developer with skills to build and maintain Front-end
                  systems. Proficient in{" "}
                  <strong>
                    HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs and
                    MongoDB
                  </strong>
                  . Passionate about new technologies and problem solving
                </p>

                {/* technical skills section */}
                <div>
                  <h4 className="work-sans-font text-left mt-4">
                    <FontAwesomeIcon icon={faCode} className="name-span mr-2" />
                    TECHNICAL SKILLS
                  </h4>
                  <div className="tech-skill-section">
                    <div className="work-sans-font text-left mt-3 mr-5">
                      <p>
                        <u>Front-End</u> : Javascript,ES6,React
                        JS,Bootstrap,MaterialUI,React Router.
                      </p>
                      <p>
                        <u>Database</u> : MongoDB,MS SQL.
                      </p>
                      <p>
                        <u>Back-End</u>: Nodejs,Expressjs
                      </p>
                    </div>
                    <div className="work-sans-font text-left mt-3">
                      <p>
                        <u>Hosting</u>: Firebase,Heroku,Netlify.
                      </p>
                      <p>
                        <u>Tools</u>: Visual Studio Code, Git, Github , Chrome
                        Dev Tools, Adobe Photoshop, Adobe Illustrator.
                      </p>
                    </div>
                  </div>
                </div>
                {/* project section */}
                <div>
                  <h4 className="work-sans-font text-left mt-4">
                    <FontAwesomeIcon
                      icon={faProjectDiagram}
                      className="name-span mr-2"
                    />
                    PERSONAL PROJECTS
                  </h4>
                  <div className="personal-projects-section">
                    <div className="work-sans-font text-left mt-4">
                      <h5>
                        {" "}
                        <strong>
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="name-span mr-1"
                          />{" "}
                          StyleDora Ecommerce Website (April 18,2021)
                        </strong>
                      </h5>
                      <div>
                         
                      </div>
                      <p>
                        Technologies: HTML, CSS, Bootstrap, Reactjs, React
                        Router,Firebase,Nodejs,MongoDB.
                      </p>
                      <p>
                        Features: A full stack ecommerce website with user
                        login/sign up option by email , Google or Facebook
                        implemented with firebase authentication,where customers
                        can buy, cancel or review their orders and admin can
                        add, delete or update products. These features are
                        executed using CRUD operation by Node, Express, and
                        Mongo DB.
                      </p>
                      <div className="projet-link-buttons mt-4">
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://full-stack-client.web.app/"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Live Site{" "}
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/styleDora-ecommerce-website-client"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Client Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/styleDora-ecommerce-website-server"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Server Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="work-sans-font text-left mt-4">
                      <h5>
                        <strong>
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="name-span mr-1"
                          />
                          SoulNest Photography Website (April 2,2021)
                        </strong>
                      </h5>
                      <p>
                        Technologies : HTML, CSS,Bootstrap,React Bootstrap,
                        Reactjs, React Router, stripe, Nodejs, Firebase,
                        MongoDB.
                      </p>
                      <p>
                        Features: Soulnest is full stack (MERN) website with
                        Google Sign in, where an photography company can
                        showcase their works. Admin and user have different
                        dashboards. User/customer can visit the website and book
                        events with credit card payment which is implemented
                        with stripe .Admins have restricted access and they can
                        see, update and manage customer's bookings and change
                        their status accordingly.
                      </p>
                      <p>
                      <div className="projet-link-buttons mt-4">
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://soulnest-wedding-photography.web.app/"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Live Site{" "}
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/soulNest-photography-website-client"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Client Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/soulNest-photography-website-server"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Server Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                      </div>
                      </p>
                    </div>
                    <div className="work-sans-font text-left mt-4">
                      <h5>
                        <strong>
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="name-span mr-1"
                          />
                          DestiniGo Transportation Website (March 21,2021)
                        </strong>
                      </h5>
                      <p>
                        Technologies: HTML, CSS, Reactjs, React Router, React
                        Bootstrap, Firebase Authentication.
                      </p>
                      <p>
                        Features: React website using react router, firebase
                        authentication and Google map API. On this website, user
                        can select their preferred vehicles and compare cost of
                        those vehicles for their preferred routes. They can also
                        track their journey on Google map
                      </p>
                      <p>
                      <div className="projet-link-buttons mt-4">
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://react-auth-6f7ad.web.app/"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Live Site{" "}
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/destiniGo-tranportation-website"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                               Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                       
                      </div>
                      </p>
                    </div>
                    <div className="work-sans-font text-left mt-4">
                      <h5>
                        {" "}
                        <strong>
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="name-span mr-1"
                          />
                          Grand Leagues Website (March 13,2021){" "}
                        </strong>
                      </h5>

                      <p>
                      <div className="projet-link-buttons mt-4">
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://react-router-tasnuvatina.netlify.app/"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Live Site{" "}
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/grand-leagues-website-react"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                               Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                        
                      </div>
                      </p>
                    </div>
                    <div className="work-sans-font text-left mt-4">
                      <h5>
                        <strong>
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="name-span mr-1"
                          />{" "}
                          San Antonio Football Club Web (March 2,2021){" "}
                        </strong>
                      </h5>

                      <p>
                      <div className="projet-link-buttons mt-4">
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://simple-react-tasnuvatina.netlify.app/"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                              Live Site{" "}
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </button>
                          </a>
                        </div>
                        <div>
                          <a
                            className="projet-link-a"
                            href="https://github.com/tasnuvatina/san-antonio-football-club"
                            target="_blank"
                            rel="norefferer"
                          >
                            <button className="button-style mx-2">
                               Code <FontAwesomeIcon icon={faGithub} />
                            </button>
                          </a>
                        </div>
                        
                      </div>
                      </p>
                    </div>

                    {/* education section */}
                    <div>
                      <h4 className="work-sans-font text-left mt-4">
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="name-span mr-2"
                        />
                        EDUCATION
                      </h4>
                      <div className="work-sans-font text-left mt-4">
                        <h5>B.Sc. in Computer Science and Engineering</h5>
                        <p>Graduated with CGPA 3.65</p>
                      </div>
                    </div>
                    {/* certification section */}
                    <div className="">
                      <h4 className="work-sans-font text-left mt-4">
                        <FontAwesomeIcon
                          icon={faCertificate}
                          className="name-span mr-2"
                        />
                        CERTIFICATION
                      </h4>
                      <div className="work-sans-font text-left mt-4">
                        <h5>
                          Complete Web Development Course with Jhankar Mahbub
                        </h5>
                        <h5>Responsive Web Design by freeCodeCamp</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='portfolio-all container '>
                            {
                                projects.map(project=><SingleProjectCard project={project}></SingleProjectCard>)
                            }
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
