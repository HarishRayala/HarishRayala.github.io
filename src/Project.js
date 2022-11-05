import React from "react";
import "./Project.css";
import Image from "./img/bluefly.png";

import Img1 from "./img/myfitnesspal.png";
import Img2 from "./img/monsterindia.png";
import Img3 from "./img/bigbasket.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="project-center">
            <div className="center">
              <div className="one">
                <img src={Img3} alt="project" />
                <h2>Bigbasket</h2>
                <p>
                  Bigbasket is an Online Grocery Application with different
                  Categories like Fruits&Vegetables, Beverages, Kitchen, Garden
                  & Pets, etc.,It is a Collaborative Project. We build this
                  Application using
                </p>
                <p>
                  {" "}
                  <b>Used tech-stack</b> : HTML | CSS | Javascript
                </p>
                <a
                  href="https://delicate-flan-410bb9.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live link</button>
                </a>
                <a
                  href="https://github.com/rohaantelangur/Masai_Project_1_BigBasket"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>

              <div className="one">
                <img src={Image} alt="project" />
                <h2>BlueFly</h2>
                <p>
                  Bluefly offers an e-commerce platform that sells designer
                  apparel and accessories, household products and accessories at
                  discounted prices. It is a Collaborative Project We build this
                  Application using
                </p>
                <p>
                  {" "}
                  <b>Used tech-stack</b> : HTML | CSS | Javascript | JSON
                </p>

                <a
                  href="https://peaceful-gecko-56ebd8.netlify.app/index.html "
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live link</button>
                </a>
                <a
                  href="https://github.com/SPinfluencers/BlueFly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>
              <div className="one">
                <img src={Img1} alt="project" />
                <h2>MyFitnessPal</h2>
                <p>
                  MyFitnessPal is one of the best weight loss apps and fitness
                  apps, helping nearly 1 million members reach their nutrition
                  and fitness goals every year. It is an Individual project So I
                  build this project by using
                </p>
                <p>
                  {" "}
                  <b>Used tech-stack</b> : HTML | CSS | Javascript | Reactjs |
                  Chakra-UI
                </p>
                <a
                  href="https://myfitnesspal-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live link</button>
                </a>
                <a
                  href="https://github.com/HarishRayala/MyfitnessPal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>

              <div className="one">
                <img src={Img2} alt="project" />
                <h2>Monster India</h2>
                <p>
                  Monster-jobs is a source for jobs and career opportunities.
                  Search for jobs, read career advice from Monster's job
                  experts, and find hiring and recruiting employees
                </p>
                <p>
                  {" "}
                  <b>Used tech-stack</b> : Html | CSS | Javascript | Nodejs |
                  ReactJs | Redux | React-icons | Heroku
                </p>
                <a
                  href="https://monsterindia.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live link</button>
                </a>
                <a
                  href="https://github.com/HarishRayala/Monster-India"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
