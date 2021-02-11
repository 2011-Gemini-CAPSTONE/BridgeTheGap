import React from 'react'
import articles from '../../articles'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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
        <h1 className="articleHeader">Articles:</h1>
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
                      width="360px"
                      height="160px"
                      src={article.url}
                      alt="Card image cap"
                    />
                    <CardBody className="article-body">
                      <CardTitle tag="h4">{article.title}</CardTitle>

                      <CardText className="ToolsText">
                        {article.description}
                      </CardText>
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
