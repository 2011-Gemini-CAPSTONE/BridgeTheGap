import React, {useState, useEffect} from 'react'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const StateMap = props => {
  // const [data, setData] = useState([])
  const data = props.data

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({geographies}) =>
            geographies.map(geo => {
              const cur = data.filter(s => s.state === geo.properties.name)
              console.log('This is cur -> ', cur)
              return <Geography key={geo.rsmKey} geography={geo} />
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}

export default StateMap
