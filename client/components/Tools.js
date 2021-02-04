import React from 'react'
import articles from '../../secrets'

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
        <h1>Tools</h1>
        <div className="article-container">
          {articles.map(article => {
            return (
              <Card className="article-card" key={article.id}>
                <a href={article.link} className="articleLink">
                  <CardImg
                    top
                    width="100%"
                    height="50%"
                    src={article.url}
                    alt="Card image cap"
                  />
                  <CardBody className="article-body">
                    <CardTitle tag="h3">{article.title}</CardTitle>

                    <CardText>{article.description}</CardText>
                    {/* <Button >See More</Button> */}
                  </CardBody>
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}
