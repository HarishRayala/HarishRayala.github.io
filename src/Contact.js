import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Contact Me</h1>
        <div className="center-div">
          <div className="phone">
            <i className="fa fa-phone"> </i>
            <a href="tel:+91 9948558343" target="-blank" rel="noreferrer">
              +91 9948558343
            </a>
          </div>
          <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: harishrayala2379@gmail.com">
              harishrayala2379@gmail.com
            </a>
          </div>
        </div>
        <a
          href="https://github.com/HarishRayala"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/harish-rayala/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/i_m_rayalaharish/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/i_amHarish"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
