import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UsefulToolbar } from './components/Toolbar';
import { logoutUser } from '../../../../store/actions/login';

export const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFiles = () => {
    history.push('/');
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <UsefulToolbar>
      <Button color="inherit" onClick={handleFiles}>
        <Typography variant="h6">
          Files
        </Typography>
      </Button>
      <Button color="inherit" onClick={handleLogout}>
        <Typography variant="h6">
          Logout
        </Typography>
      </Button>
    </UsefulToolbar>
  );
};
