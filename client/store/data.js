import axios from 'axios'

export const GET_DATA = 'GET_DATA'

export const _getData = data => ({
  type: type,
  data
})

export const getData = dispatch => {
  return async dispatch => {
    try {
      console.log('inside getData thunk')
      const res = await axios.get('api/data')
      dispatch(_getData(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data
    default:
      return state
  }
}

export default dataReducer
