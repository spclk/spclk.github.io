import React, {useEffect} from "react";
import Project from "../components/Project";
import ProjectData from "../project-data.json"
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Portfolio() {
  
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <main className="grey lighten-3">
      <div className="section grey lighten-3"></div>
      <div className="row container">
        <h4 className="header grey-text text-darken-2">Portfolio</h4>
        <p className="grey-text text-darken-2">
          This is only a sample of the projects I've completed at UC Davis
          Coding Bootcamp. See more on my <a href="https://github.com/spclk" className="blue-grey-text text-darken-4">GitHub page</a>.
        </p>
      </div>
      <div className="container">
        <div className="row">

          {ProjectData.map(project => (
            <Project project={project}/>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Portfolio;