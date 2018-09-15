import map from 'lodash/map';
import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../actions'

class PostsPage extends React.Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts() {
    return map(this.props.posts, (post) => {
      return (
        <div key={post.id}>
          <Typography variant="display2" color="inherit" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="headline" color="inherit" paragraph>
            {post.body}
          </Typography>
          <Button component={Link} to={`/posts/${post.id}`} color='inherit'>
            Continue reading...
          </Button>
        </div>
      )
    })
  }
  render() {
    const { classes } = this.props
    return ( 
      <Paper>
        <Grid container>
          <Grid item md={8}>
            {this.renderPosts()}
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps,{ fetchPosts })(PostsPage)