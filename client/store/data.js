import axios from 'axios'
import {dispatch} from 'd3'
import {ActionSchedule} from 'material-ui/svg-icons'

/**
 * ACTION TYPES
 */

export const GET_DATA = 'GET_DATA'
export const CREATE_USER = 'CREATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'

/**
 * ACTION CREATORS
 */
export const _getData = data => ({
  type: GET_DATA,
  data
})

export const _createUser = user => ({
  type: CREATE_USER,
  user
})

export const _deleteUser = user => ({
  type: DELETE_USER,
  user
})

export const _updateUser = user => ({
  type: UPDATE_USER,
  user
})

/**
 * THUNK CREATORS
 */
export const getData = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/data')
      dispatch(_getData(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const createUser = user => {
  return async disptach => {
    try {
      const res = await axios.post('api/data', user)
      dispatch(_createUser(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteUser = user => {
  return async disptach => {
    try {
      await axios.delete(`/api/data/${user.id}`)
      dispatch(_deleteUser(user))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateUser = (user, userId) => {
  return async dispatch => {
    const res = await axios.put(`/api/data/${userId}`, user)
    dispatch(_updateUser(red.data))
  }
}
/**
 * REDUCER
 */
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data
    case CREATE_USER:
      return [...state, action.user]
    case DELETE_USER:
      return state.filter(user => user.id !== action.user.id)
    case UPDATE_USER:
      return state.map(
        user => (user.id === action.user.id ? action.user : user)
      )
    default:
      return state
  }
}

export default dataReducer
