import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer white">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
                <h5 className="grey-text text-darken-3">All the Details</h5>
                <h6 className="grey-text text-darken-3">For more detailed info about me, navigate to the links.</h6>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="blue-grey-text text-darken-4">Links</h5>
                <ul>
                <li><a className="blue-grey-text text-darken-4" href="https://github.com/spclk/spclk.github.io/blob/main/resume.pdf">Resume</a></li>
                <li><a className="blue-grey-text text-darken-4" href="https://www.linkedin.com/in/-konstantin/">LinkedIn</a></li>
                <li><a className="blue-grey-text text-darken-4" href="https://github.com/spclk">GitHub</a></li>
                <li><a className="blue-grey-text text-darken-4" href="mailto:konstantin1020@gmail.com">Email</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container blue-grey-text text-darken-4">
            Made by Konstantin. Developed with <a href="https://reactjs.org/" className="blue-grey-text text-darken-1">React</a> and <a href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome" className="blue-grey-text text-darken-1">Materialize</a> | 2021
            </div>
        </div>
   </footer>
  );
}

export default Footer;