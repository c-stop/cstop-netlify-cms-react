import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import Logo from './Logo'
import logo from '../img/logos/cStopFullColor.png'

import NavLink from './NavLink'
import './Nav.sass'

export default function Nav({ handlePopupOpen }) {
  const [state, setState] = useState({ active: false, navBarActiveClass: '' })
  return (
    <nav className="navigation w-nav">
      {/* <div className="Nav--Container container">
        <Link to="/">
          <Logo />
        </Link>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about/" exact>
          About
        </NavLink>
        <NavLink to="/blog/" exact>
          Blog
        </NavLink>
        <NavLink to="/contact/" exact>
          Contact
        </NavLink>
      </div> */}

      <div className={`navigation-wrap `}>
        <Link
          to="/"
          aria-current="page"
          className="logo-link w-nav-brand w--current"
        >
        <Logo />
        </Link>
        <div id="navMenu" className={`navbar-menu ${state.navBarActiveClass}`}>
          <nav
            role="navigation"
            className={`navigation-items w-nav-menu ${state.navBarActiveClass}`}
          >
            <Link
              to="/"
              aria-current="page"
              className="navigation-item w-nav-link"
            >
              Home
            </Link>
            <Link to="/services" className="navigation-item w-nav-link">
              Services
            </Link>
            <Link to="/about" className="navigation-item w-nav-link">
              About
            </Link>
            <Link to="/contact" className="navigation-item w-nav-link">
              Contact
            </Link>
          </nav>
        </div>

        <Link
          id="navQuoteButton"
          to="/quote"
          className="button cc-contact-us w-inline-block"
        >
          <div className="text-block">Talk to a Specialist</div>
        </Link>
      </div>

      <Menu
        right
        className="navigation-mobile"
        customBurgerIcon={
          <img src="img/menu-icon_1menu-icon.png" alt="Menu Icon" />
        }
      >
        <Link
          id="navQuoteButton"
          to="/quote"
          className="button cc-contact-us w-inline-block"
        >
          <div className="text-block">Talk to a Specialist</div>
        </Link>
        <Link to="/" aria-current="page" className="navigation-item w-nav-link">
          Home
        </Link>
        <Link to="/services" className="navigation-item w-nav-link">
          Services
        </Link>
        <Link to="/about" className="navigation-item w-nav-link">
          About
        </Link>
        <Link to="/contact" className="navigation-item w-nav-link">
          Contact
        </Link>
      </Menu>
    </nav>
  )
}
