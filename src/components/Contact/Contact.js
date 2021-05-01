import React from "react";
import "./Contact.css";
import SendEmail from "./SendEmail";

const Contact = () => {
  return (
    <div className="component-main">
      <div className="contact-main">
        <div className="contact-info">
          <h2 className="poppins-font h2-headers">Contact</h2>
          <h3  className="poppins-font">Where to find me</h3>
          <p className="work-sans-font all-p">
            Do you have an interesting project I can help with? Feel free to
            reach out to me by using one of the following:
          </p>

          <ul className="work-sans-font">
            <li>
              Email:{" "}
              <a href="mailto:tasnuvarahman1996@gmail.com" rel="norefferer">
                tasnuvarahman1996@gmail.com
              </a>{" "}
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tasnuva-rahman/"
                target="_blank"
                rel="norefferer"
              >
                tasnuva-rahman
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/tasnuvatina"
                target="_blank"
                rel="norefferer"
              >
                tasnuvatina
              </a>
            </li>
          </ul>
          <p className="work-sans-font all-p">You can also use the contact form on this page.</p>
        </div>
        <div className="contact-info">
      <SendEmail></SendEmail>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
