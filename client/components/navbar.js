import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import '../../public/css/navbar.css'
import {BsPerson} from 'react-icons/bs'

const Navbar = ({handleClick, isLoggedIn, email}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <div className="navbar-user">
          {/* The navbar will show these links after you log in */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="https://i.ibb.co/j6kQMrJ/BTG-Logo-resized.png" />
            </Link>
          </div>
          <div className="navbar-user-links">
            <p>Welcome, {email}</p>
            <NavLink exact to="/data" activeClassName="selected">
              See The Data
            </NavLink>
            <NavLink exact to="/resources" activeClassName="selected">
              Resources
            </NavLink>
            <NavLink
              className="links-user-about"
              exact
              to="/about"
              activeClassName="selected"
            >
              About
            </NavLink>
            <a href="/" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div className="navbar-guest">
          {/* The navbar will show these links before you log in */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="https://i.ibb.co/j6kQMrJ/BTG-Logo-resized.png" />
            </Link>
          </div>

          <div className="navbar-links">
            <NavLink exact to="/data" activeClassName="selected">
              See The Data
            </NavLink>
            <NavLink exact to="/resources" activeClassName="selected">
              Resources
            </NavLink>
            <NavLink
              className="links-about"
              to="/about"
              activeClassName="selected"
            >
              {' '}
              About{' '}
            </NavLink>
            <NavLink exact to="/signup" activeClassName="selected">
              {' '}
              Sign Up{' '}
            </NavLink>
            <NavLink exact to="/login" activeClassName="selected">
              {' '}
              Log in{' '}
            </NavLink>
            <BsPerson />
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string
}
