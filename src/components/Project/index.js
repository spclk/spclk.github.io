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
            <br/>
            <br/>
            {props.project.tech}
            <br/>
            <br/>
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
            </p>}
            
            revealIcon={<Icon>more_vert</Icon>}
            title={props.project.title}
          >
            <p>
              <a href={props.project.github}>
                GitHub
              </a>
              
              {""} | {""}
              <a href={props.project.website}>
                Website
              </a>
            </p>
          </Card>
        </Col>
      </Row>
  );
}

export default Project;
