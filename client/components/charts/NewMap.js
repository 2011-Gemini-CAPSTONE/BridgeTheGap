import React, {useState, useEffect} from 'react'

const USMap = props => {
  const [statesData, setStatesData] = useState(null)
  const userData = props.data

  // This should only run once due to the [] arg for the dependencies.
  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        'https://willhaley.com/assets/united-states-map-react/states.json'
      )
      const data = await res.json()
      // Set the statesData with the data received from fetch().
      setStatesData(data)
    })()
  }, [])

  // If there is no statesData yet, show a loading indicator.
  if (!statesData) {
    return <div>Loading...</div>
  }

  return (
    <svg viewBox="0 0 960 600">
      {statesData.map(stateData => (
        <path
          className="someCSSClass"
          style={{cursor: 'pointer', fill: 'black'}}
          key={stateData.id}
          stroke="#fff"
          strokeWidth="1px"
          d={stateData.shape}
          onMouseOver={event => {
            event.target.style.fill = 'red'
            let user = userData.filter(data => data.state === stateData.name)
            console.log('This is user -> ', user)
          }}
          onMouseOut={event => {
            event.target.style.fill = 'black'
          }}
        />
      ))}
    </svg>
  )
}

export default USMap
