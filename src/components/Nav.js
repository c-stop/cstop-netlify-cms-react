import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Nav.sass'

export default function Nav({ handlePopupOpen }) {
  const [state] = useState({ active: false, navBarActiveClass: '' })

  return (
    <nav className="navigation">
      <div className={`navigation-wrap`}>
        <Link to="/" aria-current="page">
          <Logo />
        </Link>

        <div id="navMenu" className={`navbar-menu ${state.navBarActiveClass}`}>
          <nav
            role="navigation"
            className={`navigation-items ${state.navBarActiveClass}`}
          >
            <Link to="/" aria-current="page" className="navigation-item">
              Home
            </Link>
            <Link to="/services" className="navigation-item">
              Services
            </Link>
            <Link to="/about" className="navigation-item">
              About
            </Link>
            <Link to="/contact" className="navigation-item">
              Contact
            </Link>
          </nav>
        </div>

        <Link id="navQuoteButton" to="/quote" className="Button">
          <div className="text-block">Request an Estimate</div>
        </Link>
      </div>


      {/* Mobile Nav */}
      <Menu
        right
        className="navigation-mobile"
        width={"70%"}
        customBurgerIcon={
          <img src="images/menu-icon_1menu-icon.png" alt="Menu Icon" />
        }
      >

        <Link to="/" aria-current="page" className="navigation-item">
          Home
        </Link>
        <Link to="/services" className="navigation-item">
          Services
        </Link>
        <Link to="/about" className="navigation-item">
          About
        </Link>
        <Link to="/contact" className="navigation-item">
          Contact
        </Link>
        <Link id="navQuoteButton" to="/quote" className="navigation-item">
          Talk to a Specialist
        </Link>
      </Menu>
    </nav>
  )
}
