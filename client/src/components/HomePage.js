import React from 'react'
import PostList from './Posts/PostList'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <PostList />
        <div>
          <Link to="/posts/new">
            New Post
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage