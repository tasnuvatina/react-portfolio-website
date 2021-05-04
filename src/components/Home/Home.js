import React from "react";
import "./Home.css";
import home from "../../images/home.svg";
import resume from "../../Data/resume.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="component-main">
      <div className="home-main">
        <motion.div
          className="welcome"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 120 }}
        >
          <h5 className="poppins-font">Hey there,</h5>
          <h1 className="poppins-font">
            <div style={{ display: "inline-block" }} className="mr-3">
              <motion.div
                whileHover={{ scale: 0.7 }}
                transition={{ type: "spring", damping: 3, stiffness: 100 }}
                style={{ display: "inline-block" }}
              >
                I
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.7 }}
                transition={{ type: "spring", damping: 3, stiffness: 100 }}
                style={{ display: "inline-block" }}
              >
                '
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.7 }}
                transition={{ type: "spring", damping: 3, stiffness: 100 }}
                style={{ display: "inline-block" }}
              >
                m
              </motion.div>
            </div>
            <span className="name-span">
              <p>
                <div style={{ display: "inline-block" }}>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    T
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    a
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    s
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    n
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    u
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    v
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    a
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 0.7 }}
                    transition={{ type: "spring", damping: 3, stiffness: 100 }}
                    style={{ display: "inline-block" }}
                  >
                    ,
                  </motion.div>
                </div>
              </p>
            </span>{" "}
          </h1>
          <h2 className="work-sans-font">Web Developer & Programmer</h2>
          <p className="work-sans-font all-p">
            A self-driven and passionate web developer with a passion for
            JavaScript.Want to work in the Software industry with modern web
            technologies and enhance my knowledge and skill with increasing
            responsibilities.
          </p>
          <div>
            <a href={resume} download>
              <button className="work-sans-font button-style mr-4">
                Resume
              </button>
            </a>
            <Link to="/contact">
              <button className="work-sans-font button-style">
                Contact me
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="contact-info"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 120 }}
        >
          <div>
            <div className="home-image">
              <img src={home} alt="" />
             
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
