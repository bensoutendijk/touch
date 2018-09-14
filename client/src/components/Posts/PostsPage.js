import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { styles } from '../../styles'


class PostsPage extends React.Component {
  render() {
    const { classes } = this.props
    const postsList = this.props.posts.map((post) => {
      return (
        <div key={post.id} className={classes.mainFeaturedPostContent}>
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

    return ( 
      <Paper className={classes.mainFeaturedPost}>
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

export default withStyles(styles)(connect(mapStateToProps)(PostsPage))