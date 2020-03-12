import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NavLink from '@material-ui/core/Link';

const ListItemComponent = props => {
  const user = props.user;

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={
            <NavLink component={Link} to={`/user-details/${user._id}`}>
              {user.name}
            </NavLink>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {user.email}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </React.Fragment>
  );
};

export default ListItemComponent;
