import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import * as actions from '../actions/index'
import styles from '../styles'

class HomePage extends React.Component {
  async componentDidMount() {
    await this.props.fetchUser()
    this.props.fetchUserGithubRepos(this.props.user)
  }

  renderRepos() {
    
    const { github } = this.props

    if(!github.length) {
      return ''
    }
    return github.map((repo) => {
      return (
        <div>{repo.name}</div>
      )
    })
  }

  render() {
    const { classes } = this.props
    console.log(this.props)
    return (
      <div>
        {this.renderRepos()}
      </div>
    )
  }
}

function mapStatetoProps ({ github, auth }) {
  return {
    user: auth,
    github
  }
}

export default withStyles(styles)(connect(mapStatetoProps, actions)(HomePage))