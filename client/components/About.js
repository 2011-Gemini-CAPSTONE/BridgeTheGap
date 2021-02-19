import React from 'react'
import {Jumbotron} from 'reactstrap'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/about.css'

const About = () => {
  console.log('About is running')
  return (
    <>
      <section className="about-hero">
        <h2 className="about-hero-h2">About</h2>
        <p className="about-hero-p">
          Bridge the Gap is about more than just collecting data. We empower
          people. The gender pay gap exists in our world today, but there are
          ways we can help bridge this divide. On average, women and gender
          minorities armed with pertinent wage information and resources see a
          compensation increase of 8% to 30% in their total compensation.
        </p>
        <div className="about-hero-vid">
          <ReactPlayer
            className="about-video"
            controls
            url="https://vimeo.com/512761769"
          />
        </div>
      </section>
      <Jumbotron className="movement">
        <div className="movement-img">
          <div className="movement-box">
            <h2 className="movement-h1">The Movement</h2>
            <p className="movement-lead">
              Widespread adoption of proactive pay equity laws, which require
              employers to regularly examine compensation practices, assess
              gender pay gaps, and take action to eliminate them, has been
              historically impeded by lack of data points. <hr />
              Your contribution of wage, gender and geographic information will
              see to it that the next generation of women and gender minorities
              will achieve equal wages.
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron className="care">
        <div className="care-img">
          <div className="care-box">
            <h2 className="care-h1">Why We Care</h2>
            <p className="care-lead">
              Where money is tight, shorted pay can prevent women and gender
              minorities from putting food on the table, securing safe housing,
              and accessing critical medical care and education. This injustice
              has impacts that can perpetuate cycles of poverty across
              generations.
            </p>
          </div>
        </div>
      </Jumbotron>
    </>
  )
}

export default About
