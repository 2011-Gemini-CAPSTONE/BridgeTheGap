import React, {useEffect} from 'react'
import {drawGraph} from './charts/BarChart'
import UserTable from './userTable'
import '../../public/css/stateInfo.css'

const StateInfo = props => {
  const {setStateInfo, stateUsers} = props

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
        {/* {stateUsers.map((stateUser) => (
          <div key={stateUser.id}>
            <p>
              {stateUser.city}, {stateUser.state}
            </p>
            <p>
              {Number(stateUser.salary).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p>{stateUser.gender}</p>
            <p>{stateUser.team}</p>
            <p>{stateUser.jobTitle}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default StateInfo
