import React from "react";
import {Link} from 'react-router-dom'
import "./style.css";

function Header() {
  return (
    <nav >
      <div className="nav-wrapper white z-depth-2">
      <Link to="/" className="brand-logo blue-grey-text text-darken-4">
        Konstantin
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
        <Link to="/portfolio" className="blue-grey-text text-darken-4">
            Portfolio
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/spclk"
            className="blue-grey-text text-darken-4"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/-konstantin/"
            className="blue-grey-text text-darken-4"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Header;