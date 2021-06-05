import React from "react";
import "./style.css";

function Header() {
  return (
    <nav >
      <div className="nav-wrapper white z-depth-2">
      <a href="/" className="brand-logo blue-grey-text text-darken-4">
        Konstantin
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/portfolio" className="blue-grey-text text-darken-4">
            Portfolio
          </a>
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
            href="https://www.linkedin.com/in/konstantin-alekseev-000b98206/"
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