import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'
import '../../public/css/tools.css'

export class Tools extends React.Component {
  render() {
    return (
      <div>
        <h1>Tools Page</h1>
        <div className="article-container">
          <Card className="article-card">
            <CardImg
              top
              width="100px"
              height="100px"
              src="https://svgshare.com/i/Thp.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h3">Card title</CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="article-container">
          <Card className="article-card">
            <CardImg
              top
              width="100px"
              height="100px"
              src="https://svgshare.com/i/Thp.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h3">Card title</CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="article-container">
          <Card className="article-card">
            <CardImg
              top
              width="100px"
              height="100px"
              src="https://svgshare.com/i/Thp.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h3">Card title</CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}
