import React, {useState, useEffect} from 'react'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const StateMap = () => {
  const [data, setData] = useState([])

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({geographies}) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id)
              return <Geography key={geo.rsmKey} geography={geo} />
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}

export default StateMap
