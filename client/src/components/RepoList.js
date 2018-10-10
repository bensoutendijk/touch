import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import * as actions from '../actions'
import colors from '../colors'

const styles = {
  languageDot:{
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block'
  }
}

class RepoList extends React.Component {

  renderRepos() {
    const { classes, github } = this.props
    if(github.fetched) {
      return github.repos.map((repo) => {
        return (
          <div key={repo.id}>
            <h4>{repo.name}</h4>
            <ul>
              <li>{repo.language} <span style={colors[repo.language]} className={classes.languageDot}></span></li>
              <li>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</li>
            </ul>
          </div>
        )
      })
    }
    return ''
  }

  render() {
    return (
      <div>
        {this.renderRepos()}
      </div>
    )
  }
}

function mapStatetoProps ({ github, auth }) {
  return {
    auth,
    github
  }
}

export default withStyles(styles)(connect(mapStatetoProps, actions)(RepoList))