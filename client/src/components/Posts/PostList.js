import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles'
import styles from '../../styles'
import { fetchFeaturedPosts } from '../../actions'
import { fetchPosts } from '../../actions'

class PostsPage extends React.Component {
  componentDidMount () {
    this.props.fetchFeaturedPosts()
  }

  renderFeatured() {
    const { classes } = this.props;
    if (!this.props.featuredPosts) return ''
    
    const mainFeaturedPost = this.props.featuredPosts[Object.keys(this.props.featuredPosts)[0]]
    const secondFeaturedPost = this.props.featuredPosts[Object.keys(this.props.featuredPosts)[1]]
    const thirdFeaturedPost = this.props.featuredPosts[Object.keys(this.props.featuredPosts)[2]]

    const subFeaturedPosts = [secondFeaturedPost, thirdFeaturedPost]
    return (
      <div>
        {/* Start main featured post */}
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography variant="display2" color="inherit" gutterBottom>
                  {mainFeaturedPost.title}
                </Typography>
                <Typography variant="headline" color="inherit" paragraph>
                  {mainFeaturedPost.body}
                </Typography>
                <Typography variant="title" color="inherit" component={Link} to={`/posts/${mainFeaturedPost.id}`}>
                  Continue reading...
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* End main featured post */}
        {/* Start sub featured posts */}
        <Grid container spacing={40} className={classes.cardGrid}>
            {subFeaturedPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography variant="headline">{post.title}</Typography>
                      <Typography variant="subheading" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subheading" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subheading" color="primary" component={Link} to={`/posts/${post.id}`}>
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
        </Grid>
        {/* // End sub featured posts */}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderFeatured()}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { featuredPosts: posts.featured };
}

export default withStyles(styles)(connect(mapStateToProps,{ fetchFeaturedPosts, fetchPosts })(PostsPage))