import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/articlecard.css'

export const ArticleCard = ({posts, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <div className="article-container">
        {posts.map(article => {
          return (
            <Card className="article-card" key={article.id}>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
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
        })}
      </div>
    </div>
  )
}

export default ArticleCard

// export default class ArticleCard extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="article-container">
//           {articles.map(article => {
//             return (
//               <Card className="article-card" key={article.id}>
//                 <a
//                   href={article.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="articleLink"
//                 >
//                   <CardImg
//                     top
//                     width="360px"
//                     height="160px"
//                     src={article.url}
//                     alt="Card image cap"
//                   />
//                   <CardBody className="article-body">
//                     <CardTitle tag="h4">{article.title}</CardTitle>

//                     <CardText className="ToolsText">
//                       {article.description}
//                     </CardText>
//                   </CardBody>
//                 </a>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }
