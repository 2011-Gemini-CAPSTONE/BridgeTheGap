import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import handshake from '../../public/images/handshake.svg'
import briefcase from '../../public/images/briefcase.svg'
import creativity from '../../public/images/creativity.svg'
import megaphone from '../../public/images/megaphone.svg'
import team from '../../public/images/team.svg'
import companies from '../../public/images/companies.svg'
import {Link} from 'react-router-dom'
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

const GuestHome = ({isLoggedIn}) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Jumbotron className="jumbo1">
            <div className="jumbo1-img">
              <div className="welcome-box">
                <h2 className="jumbo1-h1">Women & Gender Minorities Unite!</h2>
                <p className="jumbo1-lead">
                  When it comes to effectively combatting bias and closing
                  earning gaps, studies have shown that transparency wins the
                  day.
                </p>
                <p className="jumbo1-btn">
                  <Link to="/addsalary">
                    <Button color="warning" size="md" block>
                      + Add Your Salary
                    </Button>
                  </Link>
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
              <h2 className="about-h1">Bridging the Gap</h2>
              <p className="about-p">
                About Bridge the Gap. About Bridge the Gap. About Bridge the
                Gap. About Bridge the Gap. About Bridge the Gap. About Bridge
                the Gap. About Bridge the Gap. About Bridge the Gap. About
                Bridge the Gap. About Bridge the Gap.
              </p>
              <Link to="/about">
                <a className="about-link">Learn More →</a>
              </Link>
            </div>
          </section>
          <section className="home-benefits">
            <div>
              <h2>Who Should Use Bridge the Gap?</h2>
            </div>
            <div className="benefit-cards">
              <div className="benefit">
                <img className="benefit-image" src={handshake} />
                <h4>Entrepeneurs</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={briefcase} />
                <h4>Aspiring Professionals</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={megaphone} />
                <h4>Activists</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={companies} />
                <h4>Business Leaders</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={creativity} />
                <h4>Creative Thinkers</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={team} />
                <h4>Organizations</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
            </div>
          </section>
          <section className="home-quotes">
            <h3 className="quote-line">______</h3>
            <div className="home-column">
              <h5 className="quote">
                the issue of pay inequality is really important because experts
                say it will take fourty years for that gap to close. We don't
                have fourty years to wait...
              </h5>
              <h1 className="quote-marks">"</h1>
              <p>Patricia Arquette</p>
            </div>
            <h3 className="quote-line">______</h3>
          </section>
        </>
      ) : (
        <>
          <Jumbotron className="jumbo1">
            <div className="jumbo1-img">
              <div className="welcome-box">
                <h2 className="jumbo1-h1">Women & Gender Minorities Unite!</h2>
                <p className="jumbo1-lead">
                  When it comes to effectively combatting bias and closing
                  earning gaps, studies have shown that transparency wins the
                  day.
                </p>
                <p className="jumbo1-btn">
                  <Link to="/signup">
                    <Button color="warning" size="md" block>
                      Sign Up To Contribute
                    </Button>
                  </Link>
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
              <h2 className="about-h1">Bridging the Gap</h2>
              <p className="about-p">
                About Bridge the Gap. About Bridge the Gap. About Bridge the
                Gap. About Bridge the Gap. About Bridge the Gap. About Bridge
                the Gap. About Bridge the Gap. About Bridge the Gap. About
                Bridge the Gap. About Bridge the Gap.
              </p>
              <Link to="/about">
                <a className="about-link">Learn More →</a>
              </Link>
            </div>
          </section>
          <section className="home-benefits">
            <div>
              <h2>Who Should Use Bridge the Gap?</h2>
            </div>
            <div className="benefit-cards">
              <div className="benefit">
                <img className="benefit-image" src={handshake} />
                <h4>Entrepeneurs</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={briefcase} />
                <h4>Aspiring Professionals</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={megaphone} />
                <h4>Activists</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={companies} />
                <h4>Business Leaders</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={creativity} />
                <h4>Creative Thinkers</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
              <div className="benefit">
                <img className="benefit-image" src={team} />
                <h4>Organizations</h4>
                <p className="benefit-p">
                  Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipscing elit.
                </p>
              </div>
            </div>
          </section>
          <section className="home-quotes">
            <h3 className="quote-line">______</h3>
            <div className="home-column">
              <h5 className="quote">
                the issue of pay inequality is really important because experts
                say it will take fourty years for that gap to close. We don't
                have fourty years to wait...
              </h5>
              <h1 className="quote-marks">"</h1>
              <p>Patricia Arquette</p>
            </div>
            <h3 className="quote-line">______</h3>
          </section>
        </>
      )}
    </>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState, null)(GuestHome)

GuestHome.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
