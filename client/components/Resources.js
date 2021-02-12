import React, {useState, useEffect} from 'react'
import articles from '../../articles'
import ArticleCard from './ArticleCard'
import Pagination from './Pagination'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Resources = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    ;(() => {
      setLoading(true)
      setPosts(articles)
      setLoading(false)
    })()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <ArticleCard posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Resources
