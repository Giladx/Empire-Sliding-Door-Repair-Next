import React from 'react'

import PropTypes from 'prop-types'

const Navbar4 = (props) => {
  return (
    <>
      <header className="navbar4-container">
        <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar4-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
            <nav className="navbar4-links">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
            <div className="navbar4-buttons">
              <button className="navbar4-action1 thq-button-animated thq-button-filled">
                <span className="thq-body-small">Action 1</span>
              </button>
              <button className="navbar4-action2 thq-button-animated thq-button-outline">
                <span className="thq-body-small">Action 2</span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
            <div className="navbar4-nav">
              <div className="navbar4-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar4-logo"
                />
                <div data-thq="thq-close-menu" className="navbar4-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar4-links1">
                <span className="thq-body-small thq-link">{props.link1}</span>
                <span className="thq-body-small thq-link">{props.link2}</span>
                <span className="thq-body-small thq-link">{props.link3}</span>
                <span className="thq-body-small thq-link">{props.link4}</span>
                <span className="thq-body-small thq-link">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar4-buttons1">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar4-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar4-image1 {
            height: 3rem;
          }
          .navbar4-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar4-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar4-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar4-action1 {
            display: flex;
            flex-direction: row;
          }
          .navbar4-action2 {
            display: flex;
            flex-direction: row;
          }
          .navbar4-burger-menu {
            display: none;
          }
          .navbar4-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar4-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar4-logo {
            height: 3rem;
          }
          .navbar4-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar4-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar4-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }
          @media (max-width: 1200px) {
            .navbar4-links {
              display: none;
            }
            .navbar4-action1 {
              display: none;
            }
            .navbar4-action2 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .navbar4-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar4-desktop-menu {
              display: none;
            }
            .navbar4-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar4-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar4-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar4.defaultProps = {
  link2: 'Services',
  link5: 'Link5',
  action1: 'Login',
  link3: 'About Us',
  logoAlt: 'Sliding Door Repair Professionals',
  link1: 'Home',
  link4: 'Contact',
  logoSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  action2: 'Sign Up',
}

Navbar4.propTypes = {
  link2: PropTypes.string,
  link5: PropTypes.string,
  action1: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar4
