import React, {Component} from "react";


const Projects = () => (
  <div>
    
<div className="containerproject1">
            <a className='projects' href='https://adeelshaukat1.github.io/our-night/'>
              <h1>Ournight</h1>
            </a>
            <div>
            <img id="ournight" src={require("../pages/projectone.png")}></img>
            <a className="" href="https://github.com/Adeelshaukat1/our-night">
              <p>Github</p>
            </a>
            </div>
          </div>

          <div className="container project2">
            <a className="projects" href="https://github.com/Adeelshaukat1/workout-app">
              <h1>Workout Planner</h1>
            </a>
            <a className href="https://github.com/Adeelshaukat1/workout-app">
              <p>Github</p>
            </a>
           <img id="workout" src={require("../pages/workoutplanner.png")}  /> 

          </div>

          <div className="container project3">
            <a className="projects" href="https://github.com/Adeelshaukat1/safeweight.com">
              <h1>Safe Weight</h1>
            </a>
            <a className href="https://github.com/Adeelshaukat1/safeweight.com">
              <p>Github</p>
            </a>
            <img id="ournight" src={require("../pages/safeweight.png")}></img>
          </div>


  </div>
);

export default Projects;
