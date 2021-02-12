import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import '../../public/css/navbar.css'
import {BsPerson} from 'react-icons/bs'

const Navbar = ({handleClick, isLoggedIn, email}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <div className="navbar-guest">
          {/* The navbar will show these links after you log in */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="https://i.ibb.co/j6kQMrJ/BTG-Logo-resized.png" />
            </Link>
          </div>
          <div className="navbar-links">
            <p>Welcome, {email}</p>
            <Link to="/data">See The Data</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
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
            <Link to="/data"> See The Data </Link>
            <Link to="/resources">Resources</Link>
            <Link className="links-about" to="/about">
              {' '}
              About{' '}
            </Link>
            <Link to="/signup"> Sign Up </Link>
            <Link to="/login"> Log in </Link>
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
