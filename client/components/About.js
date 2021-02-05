import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'
import ReactPlayer from 'react-player'

const About = () => {
  console.log('About is running')
  return (
    <div>
      <Jumbotron fluid className="aboutJumboContainer">
        <Container>
          <div className="aboutJumboText">
            <h1 className="aboutJumboText1"> About Page </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="aboutJumboContainer2">
        <Container>
          <div className="aboutVideo">
            <ReactPlayer
              controls
              url="https://player.vimeo.com/external/348728072.sd.mp4?s=383c48b89915561b7dd476dd07c966e9a68bc587&profile_id=139&oauth2_token_id=57447761"
            />
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="aboutJumboContainer3">
        <Container>
          <div className="aboutJumboText">
            <p className="aboutJumboText2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default About
