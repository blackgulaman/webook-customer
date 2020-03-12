import React from 'react';
import Axios from 'axios';
import ListItemComponent from '../list-item/list-item.component';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    Axios
      .get('/customer/users/')
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log('Error on list.component');
      });
  }

  render() {
    const { classes } = this.props;
    const users = this.state.users;
    let userList;

    if (!users) {
      userList = 'No users';
    } else {
      userList = users.map((user, key) => (
        <ListItemComponent user={user} key={key} />
      ));
    }

    return <List className={classes.root}>{userList}</List>;
  }
}

export default withStyles(useStyles)(ListComponent);
