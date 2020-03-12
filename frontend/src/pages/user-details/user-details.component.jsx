import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import AppBar from '../../components/app-bar/app-bar.component';
import BottomNavigation from '../../components/bottom-navigation/bottom-navigation.component';

import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  button: {
    margin: '24px 0'
  }
});

class UserDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    Axios.get(
      '/customer/users/' + this.props.match.params.id
    )
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log('Error on table.component');
      });
  }

  handleDelete(id) {
    Axios.delete('/customer/users/' + id)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('Error on table.component (delete)');
      });
  }

  render() {
    const { classes } = this.props;
    const user = this.state.user;

    return (
      <React.Fragment>
        <AppBar />
        <Container>
          <Button
            component={Link}
            to="/"
            className={classes.button}
            variant="contained"
            color="default"
            startIcon={<GroupIcon />}
          >
            Show Users
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>{user.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Username:</TableCell>
                  <TableCell>{user.username}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date Registered:</TableCell>
                  <TableCell>{user.date_registered}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container justify="space-between">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              component={Link}
              to={`/update-user/${user._id}`}
            >
              Update
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={this.handleDelete.bind(this, user._id)}
            >
              Delete
            </Button>
          </Grid>
        </Container>
        <BottomNavigation />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(UserDetailsPage);
