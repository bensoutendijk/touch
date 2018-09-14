import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { deletePost } from '../../actions/index'

class ShowPost extends React.Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/posts')
  }
  render(){
    if (this.props.post) {
      return (
        <div>
          {this.props.post.title}
          <Button onClick={this.handleClick}>Delete Post</Button>
        </div>
      )
    } else {
      return (
        <div> Post not found </div>
      )
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === parseInt(props.match.params.post_id, 10))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)