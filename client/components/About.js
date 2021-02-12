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
          About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
          About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
          About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
          About Bridge the Gap.
        </p>
        <div className="about-hero-vid">
          <ReactPlayer
            className="about-video"
            controls
            url="https://player.vimeo.com/external/348728072.sd.mp4?s=383c48b89915561b7dd476dd07c966e9a68bc587&profile_id=139&oauth2_token_id=57447761"
          />
        </div>
      </section>
      <Jumbotron className="movement">
        <div className="movement-img">
          <div className="movement-box">
            <h2 className="movement-h1">The Movement</h2>
            <p className="movement-lead">
              The movement goes here. The movement goes here. The movement goes
              here. The movement goes here. The movement goes here. The movement
              goes here. The movement goes here. The movement goes here.
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron className="care">
        <div className="care-img">
          <div className="care-box">
            <h2 className="care-h1">Why We Care</h2>
            <p className="care-lead">
              Why we care. Why we care. Why we care. Why we care. Why we care.
              Why we care. Why we care. Why we care. Why we care. Why we care.
              Why we care. Why we care. Why we care. Why we care. Why we care.
              Why we care.
            </p>
          </div>
        </div>
      </Jumbotron>
    </>
  )
}

export default About
