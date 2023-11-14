// import coschedule from "../images/coschedule.png";
const Projects = [
  // {
  //   name: "PromptWiz: Your Creative Prompt Hub",
  //   about:
  //     "PromptWiz is a full-stack open-source prompt tool for the modern world. This project allows users to discover, create, share, copy, edit and delete creative prompts.",
  //   img: "./images/promptwiz.png",
  //   gitrepo: "https://github.com/Divya-Konala/PromptWiz",
  //   tech_stack: "Next.js | MongoDB | Tailwind CSS",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/fluency-systems-regular/48/nextjs.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/mongodb.png"/>`,
  //     `<img src="https://img.icons8.com/color/48/tailwindcss.png"/>`,
  //   ],
  //   project_link: "https://prompt-wiz-pi.vercel.app",
  //   project_type: "Individual Project",
  // },
  {
    name: "Tron HealthCare",
    about: "Tron healthcare which is basically booking an Appointments to the Particular Clinics near your area and having the Plans that provide a well rounded health cover. Bringing The Most Affordable Quality Healthcare to an OPD Clinic",
    img: "./images/tronhealthcare.png",
    tech_stack: "HTML | CSS | JS | ReactJs | Mui | SASS | SQL",
    gitrepo: "",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/html-5"/>`,
      `<img src="https://img.icons8.com/color/48/000000/css3"/>`,
      `<img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/office/48/react.png"/>`,
      `<img src="https://img.icons8.com/color/48/material-ui.png"/>`,
      `<img src="https://img.icons8.com/color/48/sass.png"/>`,
      `<img src="https://img.icons8.com/office/48/sql.png"/>`,
    ],
    project_link: "https://tron.health/",
    project_type: "Team Project",
  },
  {
    name: "Weather App",
    about:
      "Weather App is used to check your weather and climate conditions by search your city name",
    img: "./images/Weatherapp.png",
    gitrepo: "https://github.com/HarishRayala/WeatherApp",
    tech_stack: "HTML | CSS | JS ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/html-5"/>`,
      `<img src="https://img.icons8.com/color/48/000000/css3"/>`,
      `<img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://snazzy-pony-597863.netlify.app/",
    project_type: "Individual Project",
  },
  {
    name: "Book Search Application",
    about:
      "A responsive book search application to search all the books using google API. It also saves the list of all previous searches.",
    img: "./images/bookworm.png",
    gitrepo: "https://github.com/HarishRayala/Book_Search_App_JS",
    tech_stack: "HTML | CSS | JS | Bootstrap | API",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/html-5"/>`,
      `<img src="https://img.icons8.com/color/48/000000/css3"/>`,
      `<img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/bootstrap"/>`,
      `<img src="https://img.icons8.com/color/48/000000/api-settings.png"/>`,
    ],
    project_link: "https://booksearch-app-harishrayala.netlify.app/",
    project_type: "Individual Project",
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo 
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ""}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
