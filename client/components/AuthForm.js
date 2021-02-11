import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import '../../public/css/auth.css'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="auth-div">
      <div className="auth-container">
        <h1>{displayName}</h1>
        <div className="auth-btn">
          <div className="google-btn">
            <a href="/auth/google">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
              <span>{displayName} with Google</span>
            </a>
          </div>
          <div className="linkedin-btn">
            <a href="/auth/linkedin">
              <img
                className="linkedin-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              />
              <span>{displayName} with LinkedIn</span>
            </a>
          </div>
          <div className="github-btn">
            <a href="/auth/github">
              <img
                className="github-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              />
              <span>{displayName} with Github</span>
            </a>
          </div>
        </div>

        <div className="line">
          <span>OR</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} name={name}>
          <div className="authform-email">
            <label htmlFor="email">
              <small>Email address or username</small>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Email address or username"
            />
          </div>
          <div className="authform-password">
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="authform-submit">
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
