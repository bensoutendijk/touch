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
        <div key={repo.id}>
          <h4>{repo.name}</h4>
          <ul>
            <li>Languange: {repo.language}</li>
            <li>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
    const { classes } = this.props
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