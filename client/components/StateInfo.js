import React, {useEffect} from 'react'
import {drawGraph} from './charts/BarChart'

const StateInfo = props => {
  const {setStateInfo, stateUsers} = props

  useEffect(() => {
    drawGraph(stateUsers)
  }, [])

  return (
    <div>
      <button type="button" onClick={() => setStateInfo(false)}>
        {' '}
        Back to Map
      </button>
      <div id="stateGraph" />
      {/* {stateUsers.map((stateUser) => (
        <div key={stateUser.id}>
        </div>
      ))} */}
    </div>
  )
}

export default StateInfo
