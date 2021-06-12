import React, { useEffect } from "react";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";
import M from "materialize-css/dist/js/materialize.min.js";

function Project(props) {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    
      <Row>
        <Col
          m={12}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={process.env.PUBLIC_URL + props.project.image} reveal waves="light"/>}
            reveal={<p>{props.project.description}
            <img
                    className="responsive-img"
                    src={process.env.PUBLIC_URL + props.project.screenshots[0]}
                    alt=""
                  ></img>
                  <img
                    className="responsive-img"
                    src={process.env.PUBLIC_URL + props.project.screenshots[1]}
                    alt=""
                  ></img>
                  <img
                    className="responsive-img"
                    src={process.env.PUBLIC_URL + props.project.screenshots[2]}
                    alt=""
                  ></img>
                  <h5>Website</h5>
                  <p className="fi">
                    <a className="carousel-item" href={props.project.website}>
                      {props.project.website}
                    </a>
                  </p>

                  <h5>GitHub Repo</h5>
                  <p className="fi">
                    <a className="carousel-item" href={props.project.github}>
                      {props.project.github}
                    </a>
                  </p>
            </p>}
            
            revealIcon={<Icon>more_vert</Icon>}
            title={props.project.title}
          >
            <p>
              <a href="#">
                This is a link
              </a>
            </p>
          </Card>
        </Col>
      </Row>
  );
}

export default Project;
