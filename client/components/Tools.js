import React from 'react'
import ArticleCard from './ArticleCard'
import Pagination from './Pagination'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/tools.css'

export class Tools extends React.Component {
  render() {
    return (
      <div>
        <ArticleCard />
        <Pagination />
      </div>
    )
  }
}
