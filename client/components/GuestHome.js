import React from 'react'
import {
  Jumbotron,
  Button,
  Container,
  Card,
  CardTitle,
  CardText
} from 'reactstrap'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/guesthome.css'

const GuestHome = () => {
  return (
    <>
      <Jumbotron className="jumbo1">
        <div className="jumbo1-img">
          <div className="welcome-box">
            <h1 className="jumbo1-h1">Contribute!</h1>
            <p className="jumbo1-lead">
              When it comes to effectively combatting bias and closing earning
              gaps, studies have shown that transparency wins the day.
            </p>
            <p className="jumbo1-btn">
              <Button color="warning" size="md" block>
                + Add Your Salary
              </Button>
            </p>
          </div>
        </div>
      </Jumbotron>
      <section className="home-about">
        <ReactPlayer
          className="guest-home-video"
          controls
          url="https://player.vimeo.com/external/348728072.sd.mp4?s=383c48b89915561b7dd476dd07c966e9a68bc587&profile_id=139&oauth2_token_id=57447761"
        />
        <div className="about-text">
          <h1 className="about-h1">About Bridge the Gap</h1>
          <p className="about-p">
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap.
          </p>
          <a className="about-link">Learn More →</a>
        </div>
      </section>
    </>
  )
}

export default GuestHome
