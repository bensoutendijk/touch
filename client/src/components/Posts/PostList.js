import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import styles from '../../styles'
import { fetchPosts } from '../../actions'
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

class PostList extends React.Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderFeatured() {
    const { classes, posts } = this.props;

    if(!this.props.posts.payload) return ''

    return (
      <div>
        {/* Start main featured post */}
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography variant="display2" color="inherit" gutterBottom>
                  {posts.payload[0].title}
                </Typography>
                <Typography variant="headline" color="inherit" paragraph>
                  {posts.payload[0].body}
                </Typography>
                <Typography variant="title" color="inherit" component={Link} to={`/posts/${posts.payload[0]._id}`}>
                  {posts.payload[0].repo_name}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* End main featured post */}
      </div>
    )
  }

  render() {
    const { classes } = this.props
    const posts = Object.keys(this.props.posts).map(key => this.props.posts[key]).slice(3)
    return (
      <div>
        {this.renderFeatured()}
        <Grid container spacing={40} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Typography variant="title" gutterBottom>
              From the Firehose
            </Typography>
            <Divider />
            {posts.map(post => (
              <Markdown className={classes.markdown} key={post._id}>
                {'# ' + post.title + '\n' + post.body}
              </Markdown>
            ))}
          </Grid>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="title" gutterBottom>
                About
              </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
              </Typography>
            </Paper>
            <Typography variant="title" gutterBottom className={classes.sidebarSection}>
              Archives
            </Typography>

            <Typography variant="title" gutterBottom className={classes.sidebarSection}>
              Social
            </Typography>

          </Grid>
          {/* End sidebar */}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default withStyles(styles)(connect(mapStateToProps,{ fetchPosts })(PostList))