import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Nav.sass'

export default function Nav({ handlePopupOpen }) {
  const [state] = useState({ active: false, navBarActiveClass: '' })

  // const MenuContext = React.createContext()

  const [menuOpen, setMenuOpen] = useState(false)

  // const menuProvider = (props) => {
  //   return (
  //     <MenuContext.Provider
  //       value={{
  //         isMenuOpen: menuOpen,
  //         toggleMenu: setMenuOpen(!menuOpen),
  //         stateChangeHandler: (newState) => setMenuOpen(newState.isOpen),
  //       }}
  //     >
  //       {props.children}
  //     </MenuContext.Provider>
  //   )
  // }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
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
        width={'70%'}
        isOpen={menuOpen}
        pageWrapId={'page-wrap'}
        // onClick={toggleMenu}
      >
        <Link
          to="/"
          aria-current="page"
          className="navigation-item"
          onClick={toggleMenu}
        >
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
