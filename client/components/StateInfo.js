import React from 'react'

const StateInfo = props => {
  console.log('STATE INFO PROPS', props.stateInfo)
  const {setStateInfo, stateUsers} = props
  return (
    <div>
      {stateUsers.map(stateUser => (
        <div key={stateUser.id}>
          <h1>Job Title: {stateUser.jobTitle}</h1>
          <p>Salary:{stateUser.salary}</p>
          <p>Gender: {stateUser.gender}</p>
        </div>
      ))}
      <button type="button" onClick={() => setStateInfo(false)}>
        {' '}
        Back to Map
      </button>
    </div>
  )
}

export default StateInfo
