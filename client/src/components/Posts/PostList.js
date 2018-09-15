import map from 'lodash/map';
import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../actions'

class PostsPage extends React.Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts() {
    return map(this.props.posts, (post) => {
      return (
        <Grid item md={6} xs={12} key={post.id}>
          <Typography component={Link} to={`/posts/${post.id}`} color='primary'>
            {post.title}
          </Typography>
          <Typography>
            {post.body}
          </Typography>
        </Grid>
      )
    })
  }
  render() {
    return ( 
      <Grid container spacing={40}>
        {this.renderPosts()}
      </Grid>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps,{ fetchPosts })(PostsPage)