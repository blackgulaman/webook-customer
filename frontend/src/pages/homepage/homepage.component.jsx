import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '../../components/app-bar/app-bar.component';
import BottomNavigation from '../../components/bottom-navigation/bottom-navigation.component';
import List from '../../components/list/list.component';

import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '24px 0'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar />
      <Container>
        <Button
          component={Link}
          to="/signup"
          className={classes.button}
          variant="contained"
          color="default"
          startIcon={<PersonAddIcon />}
        >
          Add User
        </Button>
        <List />
      </Container>
      <BottomNavigation />
    </React.Fragment>
  );
};

export default HomePage;
