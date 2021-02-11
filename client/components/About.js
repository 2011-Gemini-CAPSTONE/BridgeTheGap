import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'
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
      <section className="about-second" />
    </>
  )
}

export default About
