import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="navbar-user">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">BridgeTheGap</Link>
          <Link to="/data">See The Data</Link>
          <Link to="/home">Tools</Link>
          <Link to="/home">About</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar-guest">
          {/* The navbar will show these links before you log in */}
          <Link to="/home">BridgeTheGap</Link>
          <Link to="/data">See The Data</Link>
          <Link to="/home">Tools</Link>
          <Link to="/home">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
  isLoggedIn: PropTypes.bool.isRequired
}
