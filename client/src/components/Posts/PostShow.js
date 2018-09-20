import React from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchGitHub } from '../../actions'

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
    this.props.fetchGitHub('bensoutendijk/touch')
  }

  render() {
    if (!this.props.post) {
      return ''
    }
    const { post } = this.props

    if (!this.props.github.github){
      return ''
    }
    const { github } = this.props.github;
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{github.ssh_url}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts, github }, ownProps) {
  return { 
    post: posts[ownProps.match.params.id],
    github: github
  };
}

export default connect(mapStateToProps, { fetchPost, fetchGitHub })(PostShow)