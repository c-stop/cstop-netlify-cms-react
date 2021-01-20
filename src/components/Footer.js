import React from 'react'
// import linkedin from "images/logos/LinkedIn_logo_initials.png";
// import facebook from "images/logos/f_logo_RGB-Blue_72.png";
// import logo from "images/logos/favicon-256x256.png";
import { Link } from 'react-router-dom'

import './Footer.sass'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">

    <div className="footer-container">
      <a
        className="footer-social-icon"
        href="https://www.linkedin.com/company/c-stop/"
      >
        <img
          src="images/logos/LinkedIn_logo_initials.png"
          loading="lazy"
          alt="Link to CStop Linked in"
        />
      </a>
      {/* image-4  */}
      <a
        className="footer-social-icon"
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
          src="images/logos/android-chrome-512x512.png"
          width="100"
          alt=""
          className="webflow-logo-tiny"
        />
        <div className="paragraph-tiny">Copyright C-Stop 2020</div>
      </Link>
    </div>
  </footer>
)
