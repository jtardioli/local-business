import React, { useState } from "react";
import Footer from "./Footer";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <div className="container2">
        <div className="bg-image3">
          <h1 className="about-heading">Contact Us</h1>
        </div>
        <div className="info-ctn-ctn">
          <div className="info-ctn">
            <div className="about-summary-ctn">
              <p>
                Want to learn more about how Lucia Tardioli can help you? Please
                call, email or use the contact form below.
              </p>
            </div>
            <div className="contact-info-ctn">
              <div className="email-form-ctn">
                <form
                  action="https://formsubmit.co/lutardioli@yahoo.ca"
                  method="POST"
                >
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <div className="name-ctn">
                      <input
                        placeholder="First Name"
                        type="text"
                        htmlFor="firstname"
                        name="First Name"
                        className="name"
                        required
                      ></input>
                      <input
                        placeholder="Last Name"
                        className="name"
                        type="text"
                        id="lastname"
                        name="Last Name"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      placeholder="JohnDoe@gmail.com"
                      type="email"
                      id="email"
                      name="email"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="Message"
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                    <input
                      type="hidden"
                      name="_subject"
                      value="NEW Commissioner Of Oaths"
                    ></input>
                    <input
                      type="hidden"
                      name="_next"
                      value="http://localhost:3000/thankyou"
                    ></input>
                  </div>
                  <div className="form-group"></div>

                  <button className="btn-email submit-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="contact-info">
                <label className="contact-header" htmlFor="phone">
                  Phone
                </label>
                <a className="contact-sub" href="tel:6138585035">
                  (613) 858-5035
                </a>
                <label className="contact-header" htmlFor="email-click">
                  Email
                </label>
                <a className="contact-sub" href="mailto:lutardioli@yahoo.ca">
                  lutardioli@yahoo.ca
                </a>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23019.997276329508!2d-75.63607886385887!3d45.375909741926655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f26f7ab623f%3A0xe2d7ef98ca577f75!2sDempster%20John!5e0!3m2!1sen!2sca!4v1630902421821!5m2!1sen!2sca"
                  width="350"
                  height="300"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
