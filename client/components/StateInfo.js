import React, {useEffect} from 'react'
import {drawGraph} from './charts/BarChart'
import UserTable from './userTable'
import '../../public/css/stateInfo.css'

const StateInfo = props => {
  const {setStateInfo, stateUsers, state} = props
  console.log('state users', state)
  useEffect(() => {
    drawGraph(stateUsers)
  }, [])

  return (
    <div className="stateInfo-container">
      <button
        className="back-button"
        type="button"
        onClick={() => setStateInfo(false)}
      >
        {' '}
        Back to Map
      </button>
      <div className="stateInfo">
        <div className="barGraph">
          <div id="stateGraph" />
        </div>
        <div className="userTable">
          <UserTable data={stateUsers} />
        </div>
      </div>
    </div>
  )
}

export default StateInfo
