import React, {useState, useEffect} from 'react'
import {Tooltip} from 'material-ui'
import '../../../public/css/map.css'

const USMap = props => {
  const [statesData, setStatesData] = useState(null)
  const [female, setFemaleSalary] = useState(0)
  const [male, setMaleSalary] = useState(0)
  const userData = props.data
  // console.log('outside return' , female)
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
    <>
      <div className="map">
        <div className="dataBox">
          <div className="femaleData">
            <h4 className="femaleText">
              Female:{' '}
              {isNaN(female)
                ? 'No Female Data'
                : female.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
            </h4>
          </div>
          <div className="maleData">
            <h4 className="maleText">
              Male:{' '}
              {isNaN(male)
                ? 'No Male Data'
                : male.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
            </h4>
          </div>
          <div id="disclaimer">
            <p>
              * This data is an average salary of Software Engineers (Average
              may not be entirely accurate due to lack of data)
            </p>
          </div>
        </div>
        <svg viewBox="0 0 1080 650">
          {statesData.map(stateData => (
            <path
              className="someCSSClass"
              style={{cursor: 'pointer', fill: '#87BDDC'}}
              key={stateData.id}
              stroke="#fff"
              strokeWidth="1px"
              d={stateData.shape}
              onMouseOver={event => {
                event.target.style.fill = '#083E80'
                let user = userData.filter(
                  data => data.state === stateData.name
                )
                let femalesFilter = user.filter(f => f.gender === 'Female')
                let females = femalesFilter.filter(
                  f => f.jobTitle === 'Software Engineer'
                )
                let femaleTotal = females
                  .map(f => f.salary)
                  .reduce((accu, val) => accu + +val, 0)
                let femaleAve = femaleTotal / females.length
                setFemaleSalary(femaleAve)

                let malesFilter = user.filter(m => m.gender === 'Male')
                let males = malesFilter.filter(
                  m => m.jobTitle === 'Software Engineer'
                )
                let maleTotal = males
                  .map(m => m.salary)
                  .reduce((accu, val) => accu + +val, 0)
                let maleAve = maleTotal / males.length
                setMaleSalary(maleAve)

                console.log('This is female -> ', females)
                console.log('This is male -> ', males)
              }}
              onMouseOut={event => {
                event.target.style.fill = '#87BDDC'
              }}
            />
          ))}
        </svg>
      </div>
      <div>
        <p id="disclaimerData">
          {' '}
          * Data is based off of 2020 Female Salaries in Tech and Reddit Tech
          Salary Sheet 2020
        </p>
      </div>
    </>
  )
}

export default USMap
