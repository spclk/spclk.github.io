import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-materialize";

function Main() {
  return (
    <main>
      <div className="section white">
        <div className="row container">
          <h6 className="grey-text text-darken-3 lighten-3">
            I'm Konstantin Alekseev, a Full-Stack Web Developer in Folsom, CA.
            Out of all the things I love about coding, there are two things I
            love the most. I love how coding takes me on a thrilling ride of
            solving complex challenges. And I most certainly love how coding
            rewards me with the joy of creating things into existence. I’m
            excited about helping individuals and companies to display the best
            presence in the digital world of today. As a curious person, I love
            to learn new things. I'm super passioante about developing tools
            that make this world a better place for others. I'd be happy to hear
            from you.
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
            <h3 className="header">Portfolio</h3>
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
