import React, { useState } from "react";
import emailjs from "emailjs-com";
import './SendEmail.css'

const SendEmail = () => {
  let [isSubmitted,setIsSubmitted]=useState(false)
  let handleIsSubmitted=()=>{
    setIsSubmitted(!isSubmitted)
  }
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
          handleIsSubmitted();
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <div className="mail-form">
    <h3 className="poppins-font h3-headers">Contact Form</h3>
    {
      isSubmitted && <div style={{textAlign:'center'}}>
      <h5>Your Massege Has Been Submitted!!!! </h5>
    </div>
    }
      <form onSubmit={sendEmail} className='work-sans-font'>
        <div>
          <input className="form-control w-80 my-3" type="text" name="name" placeholder="name" style={{borderRadius:"0px"}} required/>
        </div>
        <div>
          <input
            className="form-control w-80 my-3"
            type="text"
            name="email"
            placeholder="Email Address"
            style={{borderRadius:"0px"}}
            required
          />
        </div>
        <div>
          <input
            className="form-control w-80 my-3"
            type="text"
            name="subject"
            placeholder="Subject"
            style={{borderRadius:"0px"}}
            required
          />
        </div>
        <div>
          <textarea
            className="form-control w-80 my-3"
            cols="30"
            rows="5"
            name="message"
            placeholder="Message"
            style={{borderRadius:"0px"}}
            required
          ></textarea>
        </div>
        <div>
          {" "}
          <button className='button-style' type="submit" value="Submit">
          Submit
          </button>
          {/* <input type="submit" value="Submit"  /> */}
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
