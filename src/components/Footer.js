import React from 'react'
// import linkedin from "images/logos/LinkedIn_logo_initials.png";
// import facebook from "images/logos/f_logo_RGB-Blue_72.png";
// import logo from "images/logos/favicon-256x256.png";
import { Link } from 'react-router-dom'

import './Footer.sass'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    {/* <div className="container taCenter">
      <span>© 2017 All rights reserved.</span>
    </div> */}

    <div className="footer-container">
      <a
        className="image-5"
        href="https://www.linkedin.com/company/c-stop/"
      >
        <img
          src="images/logos/LinkedIn_logo_initials.png"
          loading="lazy"
          alt="Link to CStop Linked in"
        />
      </a>

      <a
        className="image-4"
        href="https://www.facebook.com/C-Stop-Health-Safety-Services-105283481304458/"
      >
        <img
          src="images/logos/f_logo_RGB-Blue_72.png"
          loading="lazy"
          alt="Link to CStop Facebook"
        />
      </a>

      <Link to="/" className="webflow-link">
        <img
          src="images/logos/favicon-256x256.png"
          width="100"
          alt=""
          className="webflow-logo-tiny"
        />
        <div className="paragraph-tiny">Copyright C-Stop 2020</div>
      </Link>
    </div>
  </footer>
)
