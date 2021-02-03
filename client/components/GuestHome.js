import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'

const GuestHome = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbo1">
        <Container fluid>
          <div
            style={{
              marginTop: 5,
              marginBottom: 80
            }}
          />
          <div className="overlay">
            <h1 style={{marginBottom: 20, letterSpacing: '8px'}}>
              Bridge the Gap
            </h1>
            <p
              style={{marginLeft: 50, marginRight: 50, fontFamily: 'helvetica'}}
            >
              Bridge the Gap
            </p>

            {/* <p><Button color="primary">Learn More</Button></p> */}
            <div id="jumbo1-image">
              <img src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwdGVjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default GuestHome
