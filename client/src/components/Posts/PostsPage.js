import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


class PostsPage extends React.Component {
  render() {

    const postsList = this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <Typography variant="display2" color="inherit" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="headline" color="inherit" paragraph>
            {post.body}
          </Typography>
          <Typography variant="title" color="inherit">
            <Link to={`/posts/${post.id}`} >Continue reading...</Link>
          </Typography>
        </div>
      )
    })

    return ( 
      <Paper>
        <Grid container>
          <Grid item md={8}>
            {postsList}
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsPage)