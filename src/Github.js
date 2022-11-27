import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./about.css"

function Github() {
  return (
    <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }}>
        Days I Code
      </h1>
      <p align="center" >
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=harishrayala&theme=vision-friendly-dark"
          alt="githubstats"
          width="50%"
          id="githubstats"
        />
        <br />
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=harishrayala&show_icons=true&locale=en&theme=vision-friendly-dark"
          alt="githubstats"
          width="50%"
          id="githubstats"
        />
        <br/>
        <br/>
        <div style={{color:"black"}}  >
        <GitHubCalendar 
        className="github"
        username="HarishRayala"
        blockSize={15}
        blockMargin={5}
        color="#6f57dc"
        fontSize={16}
        />
        </div>
      </p>
      <br/>
    </div>
  );
}

export default Github;
