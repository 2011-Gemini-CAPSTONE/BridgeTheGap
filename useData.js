import {useState, useEffect} from 'react'
import {json} from 'd3'
import {feature} from 'topojson'

const jsonUrl = 'https://unpkg.com/us-atlas@3.0.0/states-albers-10m.json'

export const useData = () => {
  const [data, setData] = useState(null)
  console.log(feature)
  useEffect(() => {
    json(jsonUrl).then(topojsonData => {
      const {states} = topojsonData.objects
      setData(feature(topojsonData, states))
    })
  }, [])

  return data
}
