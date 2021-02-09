import React, {useState, useEffect} from 'react'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps'
import {scaleQuantize, schemeBlues} from 'd3-scale'
import d3 from 'd3'

const colorScale = scaleQuantize()
  .domain([1, 75])
  .range([
    '#ECF4FB',
    '#BDD8EC',
    '#ADD0E7',
    '#87BDDC',
    '#4391C6',
    '#3988C1',
    '#1A67AD',
    '#135EA5',
    '#0B4E95',
    '#083E80',
    '#08306B'
  ])

const USMap = props => {
  const [statesData, setStatesData] = useState(null)
  const userData = props.data

  // This should only run once due to the [] arg for the dependencies.
  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        // 'https://willhaley.com/assets/united-states-map-react/states.json'
        'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'
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
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
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
                let user = userData.filter(
                  data => data.state === stateData.name
                )
                console.log('This is user -> ', user)
              }}
              onMouseOut={event => {
                event.target.style.fill = 'black'
              }}
            />
          ))}
        </svg>
      </Geographies>
    </ComposableMap>
  )
}

export default USMap
