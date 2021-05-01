import React from "react";
import emailjs from "emailjs-com";

const SendEmail = () => {
  let sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_t0ia44i",
        e.target,
        "user_hAeI6d1uea7qdZZq0vyve"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <div className="">
    <h3 className="poppins-font h3-headers">Contact Form</h3>
      <form onSubmit={sendEmail} className='work-sans-font'>
        <div>
          <input className="form-control w-80 my-3" type="text" name="name" placeholder="name" />
        </div>
        <div>
          <input
            className="form-control w-80 my-3"
            type="text"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            className="form-control w-80 my-3"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            className="form-control w-80 my-3"
            cols="30"
            rows="5"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          {" "}
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
