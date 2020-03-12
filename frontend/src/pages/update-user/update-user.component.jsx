import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import NavLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../../assets/bg-logo.png';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class UpdateUserPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      date_registered: '',
      date_updated: ''
    };
  }

  componentDidMount() {
    Axios.get(
      '/customer/users/' + this.props.match.params.id
    )
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          username: res.data.username,
          password: res.data.password,
          date_registered: res.data.published_date,
          date_updated: res.data.date_updated
        });
      })
      .catch(err => {
        console.log('Error on update-user.component');
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      date_registered: this.state.published_date,
      date_updated: this.state.date_updated
    };

    Axios.put(
      '/customer/users/' + this.props.match.params.id,
      data
    )
      .then(res => {
        this.props.history.push('/user-details/' + this.props.match.params.id);
      })
      .catch(err => {
        console.log('Error on update-user.component');
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <NavLink component={Link} to="/">
            <Avatar
              variant="square"
              className={classes.large}
              alt="webook"
              src={Logo}
            />
          </NavLink>
          <Typography component="h1" variant="h5">
            Update User
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.handleSubmit}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={this.state.name}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.username}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.email}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.password}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink component={Link} to="/" variant="body2">
                  Back to homepage
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(UpdateUserPage);
