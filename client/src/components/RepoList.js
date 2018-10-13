import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import * as actions from '../actions'
import colors from '../colors'

const styles = {
  languageDot:{
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  card: {
    maxWidth: 345
  }
}

class RepoList extends React.Component {

  renderRepos() {
    const { classes, github } = this.props
    if(github.fetched) {
      return github.repos.map((repo) => {
        return (
          <Grid item>
            <Card key={repo.id} className={classes.card}>
             <CardActionArea>
                <CardContent>
                  <Typography variant='subheading'>{repo.name}</Typography>
                  <ul>
                    <li>{repo.language} <span style={colors[repo.language]} className={classes.languageDot}></span></li>
                    <li>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</li>
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })
    }
    return ''
  }

  render() {
    return (
      <Grid container spacing={24}>
        {this.renderRepos()}
      </Grid>
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