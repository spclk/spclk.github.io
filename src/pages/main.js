import React from "react";

function Main() {
  return (
    <main>
      <div className="section white">
        <div className="row container">
          <h6 className="grey-text text-darken-3 lighten-3">
            I'm Konstantin Alekseev, a Full-Stack Web Developer in Folsom, CA. I
            love coding because it allows me to solve complex challenges and
            rewards me with a thrill of creating things into existence. I’m
            excited about helping individuals and companies to display the best
            presence in the digital world of today. I'm super passioante about
            making contributions to developing tools that make this world a
            better place to live in. As a curious person, I love to learn new
            things. Feel free to reach out to me.
          </h6>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={process.env.PUBLIC_URL + "/images/digital-world.jpg"} alt="globe with cities connected digitally" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h3 className="header">Portfolio</h3>
          <h6 className="grey-text text-darken-3">
            Check out some of the the projects I've done at the UC Davis Coding Bootcamp.{" "}
            <br/>
            <br/>
            <a href="/portfolio" className="blue-grey-text text-darken-1">VIEW PORTFOLIO</a>
          </h6>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={process.env.PUBLIC_URL +"/images/keyboard-binery-numbers.jpg"} alt="Laptop keyboard with binary nubmers falling" />
        </div>
      </div>
    </main>
  );
}

export default Main;