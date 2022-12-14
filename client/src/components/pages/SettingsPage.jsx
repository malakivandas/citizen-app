import React, { useState, useContext } from 'react';

import AccountContext from '../../context/account/AccountContext';

import {
  Typography,
  Box,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import Page from '../layout/Page';
import PageHeading from '../layout/PageHeading';

const SettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { changePassword, logout } = useContext(AccountContext);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      await changePassword(currentPassword, newPassword);
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Page mt={2}>
      <PageHeading>
        <Typography variant="h1">Settings</Typography>
      </PageHeading>
      <Box sx={{ width: 0.85, mx: 'auto', mt: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          User Details
        </Typography>
        <Typography>Work in Progress...</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" sx={{ mb: 1 }}>
          Account Management
        </Typography>
        <Typography>Change Password</Typography>
        <Box
          component="form"
          sx={{ mb: 3 }}
          onSubmit={handleChangePassword}
        >
          <TextField
            fullWidth
            size="small"
            margin="dense"
            color="secondary"
            required
            id="current-password"
            label="Current Password"
            name="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            margin="dense"
            color="secondary"
            required
            id="new-password"
            label="New Password"
            name="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{
              width: 0.5,
              mt: 1,
              borderWidth: 3,
              '&:hover': {
                borderWidth: 3,
              },
            }}
            type="submit"
          >
            Change Password
          </Button>
        </Box>
        <Typography sx={{ mb: 1 }}>Logout</Typography>
        <Button
          color="error"
          variant="outlined"
          size="small"
          sx={{
            width: 0.5,
            borderWidth: 3,
            '&:hover': {
              borderWidth: 3,
            },
          }}
          type="button"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Page>
  );
};

export default SettingsPage;
