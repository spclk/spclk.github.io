import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-materialize";

function Main() {
  return (
    <main>
      <div className="section white">
        <div className="row container">
          <h5 className="grey-text text-darken-3 lighten-3 center-align">
            Hi, I'm Konstantin Alekseev, a Web Developer in Sacramento, CA
          </h5>
          <h6 className="grey-text text-darken-3">
          I've earned a Full-Stack Developer certificate from the UC Davis Coding Bootcamp, where I've gained skills in JavaScript, React, back-end databases, and all things MERN stack.
          I am a curious life-long student, with a never-ceasing drive to learn, grow, and mature. 
          However, my aim in acquiring of knowledge and skills is not an end onto itself, but a means of using my privileged access to education and resources to be a blessing to others.
          Hence, I’m super passionate about developing tools that alleviate the challenges of life and help everyday people thrive. I’m ready and open to contribute to your software.
          </h6>
        </div>
      </div>

      <div>
        <Parallax
          image={
            <img
              src={process.env.PUBLIC_URL + "/images/digital-world.jpg"}
              alt="globe with cities connected digitally"
            />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
        <div className="section white">
          <div className="row container">
            <h4 className="grey-text text-darken-3 lighten-3">
            Portfolio
            </h4>
            <h6 className="grey-text text-darken-3">
              Check out some of the the projects I've done at the UC Davis
              Coding Bootcamp. <br />
              <br />
              <Link to="/portfolio" className="blue-grey-text text-darken-1">
                VIEW PORTFOLIO
              </Link>
            </h6>
          </div>
        </div>
        <Parallax
          image={
            <img
              src={
                process.env.PUBLIC_URL + "/images/keyboard-binery-numbers.jpg"
              }
              alt="Laptop keyboard with binary nubmers falling"
            />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>
    </main>
  );
}

export default Main;
