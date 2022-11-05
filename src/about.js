import React from "react";
import AboutImage from "./img/about-me.png";

import "./about.css";
import Github from "./Github";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="img">
            <img src={AboutImage} alt="about-me" />
          </div>
          <div className="para">
            <p>
              I am fluent in classics like CSS, HTML, Javascript and React.js.
              <br />
              I am from Visakhapatnam,Andhra Pradesh, India. I have done B.Tech
              in Electrical Engineering from Vignan's Institute of Information
              Technology, Visakhapatnam in 2018 and now pursuing MERN
              development course in Masai school
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
              <li>I am an Artist(Sketching) </li>
              <li>Writing Stories</li>
              <li>Travelling</li>
              <i className="fa fa-phone"> </i>
              <a style={{color:"black"}} href="tel:+91 9948558343" target="-blank" rel="noreferrer">
                 +91 9948558343
              </a>
              <br/>
              <i className="fa fa-envelope-o"></i>
              <a style={{color:"black"}} href="mailto: harishrayala2379@gmail.com">
                 harishrayala2379@gmail.com
              </a>
            </p>
          </div>
        </div>
        <Github />
        <div className="clear"></div>
      </div>
    </div>
  );
}
