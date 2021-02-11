import axios from 'axios'

/**
 * ACTION TYPES
 */

export const GET_DATA = 'GET_DATA'
export const CREATE_DATA = 'CREATE_DATA'
export const DELETE_DATA = 'DELETE_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'

/**
 * ACTION CREATORS
 */
export const _getData = data => ({
  type: GET_DATA,
  data
})

export const _createData = data => ({
  type: CREATE_DATA,
  data
})

export const _deleteData = data => ({
  type: DELETE_DATA,
  data
})

export const _updateData = data => ({
  type: UPDATE_DATA,
  data
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

export const createData = data => {
  return async disptach => {
    try {
      const res = await axios.post('api/data', data)
      dispatch(_createData(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteData = data => {
  return async disptach => {
    try {
      await axios.delete(`/api/data/${data.id}`)
      dispatch(_deleteData(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateData = (data, dataId) => {
  return async dispatch => {
    const res = await axios.put(`/api/data/${dataId}`, data)
    dispatch(_updateData(red.data))
  }
}
/**
 * REDUCER
 */
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data
    case CREATE_DATA:
      return [...state, action.data]
    case DELETE_DATA:
      return state.filter(data => data.id !== action.data.id)
    case UPDATE_DATA:
      return state.map(
        data => (data.id === action.data.id ? action.data : data)
      )
    default:
      return state
  }
}

export default dataReducer
