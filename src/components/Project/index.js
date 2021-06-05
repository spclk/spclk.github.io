import React from "react";

function Project(props) {
  return (
    <>
      <div id="portfolio" class="cx gray">
        <div className="">
          <div className="b e">
            <div className="d hx hf gu gallery-item gallery-expand ce polygon">
              <div className="gallery-curve-wrapper">
                <a className="gallery-cover gray">
                  <img
                    className="responsive-img"
                    src={process.env.PUBLIC_URL + props.project.image}
                    alt="placeholder"
                    crossorigin="anonymous"
                  />
                </a>
                <div className="gallery-header">
                  <span>{props.project.title}</span>
                </div>
                <div className="gallery-body">
                  <div className="title-wrapper">
                    <h3>{props.project.title}</h3>
                  </div>
                  <p className="fi">
                    {props.project.description}
                  </p>
                  <h5>Website</h5>
                  <p className="fi">
                  <a className="carousel-item" href={props.project.website}>{props.project.website}</a>
                  </p>

                  <h5>GitHub Repo</h5>
                  <p className="fi">
                  <a className="carousel-item" href={props.project.github}>{props.project.github}</a>
                  </p>

                  <h5>Screenshots</h5>
                  <img className="responsive-img" src={process.env.PUBLIC_URL + props.project.screenshots[0]} alt=""></img>
                  <img className="responsive-img" src={process.env.PUBLIC_URL + props.project.screenshots[1]} alt=""></img>
                  <img className="responsive-img" src={process.env.PUBLIC_URL + props.project.screenshots[2]} alt=""></img>
                </div>
                <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">import_contacts</i></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;