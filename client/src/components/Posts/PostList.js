import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import { fetchFeaturedPosts } from '../../actions'
import { fetchPosts } from '../../actions'

class PostsPage extends React.Component {
  componentDidMount () {
    this.props.fetchFeaturedPosts()
  }

  renderFeatured() {
    if (this.props.posts[0]) {
      return (
        <div>
          <Paper>
            <Grid item md={12}>
              <Typography variant='display2'>
                {this.props.posts[0].title}
              </Typography>
            </Grid>
          </Paper>
        </div>
      )
    }
  }

  render() {
    return ( 
      <Grid container>
        {this.renderFeatured()}
      </Grid>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps,{ fetchFeaturedPosts, fetchPosts })(PostsPage)