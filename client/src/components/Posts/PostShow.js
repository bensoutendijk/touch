import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    if (!this.props.post) {
      return ''
    }

    const { title, body } = this.props.post;

    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow)