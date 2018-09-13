import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';


class PostsPage extends React.Component {
  render() {
    return ( 
      <Paper>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  posts: state.posts
}

export default connect(mapStateToProps)(PostsPage)