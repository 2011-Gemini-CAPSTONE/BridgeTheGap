import React from 'react'
import articles from '../../secrets'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'
import '../../public/css/tools.css'

export class Tools extends React.Component {
  render() {

    const shuffle = o => {
      for (
        var j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o
    }
    let count = 0
    return (
      <div>
        <h1>Tools</h1>
        <div className="article-container">
          {shuffle(articles).map(article => {
            while (count < 6) {
              count++
              return (
                <Card className="article-card" key={article.id}>
                  <a
                    href={article.link}
                    target="_blank"
                    className="articleLink"
                  >
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
                    </CardBody>
                  </a>
                </Card>
              )
            }
          })}
  </div>
      </div>
    )
  }
}
