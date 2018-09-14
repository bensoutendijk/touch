import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
class ShowPost extends React.Component {
  render(){

    const post = this.props.post

    return (
      <div>
        {post.title}
        <Button>Delete Post</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === parseInt(props.match.params.post_id))
  }
}

export default connect(mapStateToProps, this.props)(ShowPost)