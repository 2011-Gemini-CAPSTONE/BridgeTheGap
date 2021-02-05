import React from 'react'
import {Jumbotron, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/guesthome.css'

const GuestHome = () => {
  return (
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
  )
}

export default GuestHome
