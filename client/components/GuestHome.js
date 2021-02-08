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
            <h2 className="jumbo1-h1">Gender Minorities Unite!</h2>
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
          <h2 className="about-h1">About Bridge the Gap</h2>
          <p className="about-p">
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap. About Bridge the Gap. About Bridge the Gap.
            About Bridge the Gap.
          </p>
          <a className="about-link">Learn More →</a>
        </div>
      </section>
      <section className="home-benefits">
        <div>
          <h2>Who Benefits?</h2>
        </div>
        <div className="benefit-cards">
          <div className="benefit">
            <h4>Entrepeneurs</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
          <div className="benefit">
            <h4>Aspiring Professionals</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
          <div className="benefit">
            <h4>Marketers</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
          <div className="benefit">
            <h4>Business Leaders</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
          <div className="benefit">
            <h4>Creative Thinkers</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
          <div className="benefit">
            <h4>Companies</h4>
            <p className="benefit-p">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
              ipsum dolor sit amet, consectetur adipscing elit.
            </p>
          </div>
        </div>
      </section>
      <section className="home-quotes">
        <h3>________</h3>
        <div className="home-column">
          <h5 className="quote">
            the issue of pay inequality is really important because experts say
            it will take fourty years for that gap to close. We don't have 40
            years to wait...
          </h5>
          <h1 className="quote-marks">"</h1>
          <p>Patricia Arquette</p>
        </div>
        <h3>________</h3>
      </section>
    </>
  )
}

export default GuestHome
