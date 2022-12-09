import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountContext from '../../context/user/AccountContext';

import {
  TextField,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { UserAgent } from 'amazon-cognito-identity-js';

const VerifyUser = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const { verifyUser } = useContext(AccountContext);

  const handleChange = (event) => {
    const regex = /^[0-9\b]+$/;
    if (
      event.target.value == '' ||
      regex.test(event.target.value)
    ) {
      setVerificationCode(event.target.value);
    }
  };

  const navigate = useNavigate();

  const handleVerify = async (event) => {
    event.preventDefault();
    try {
      await verifyUser(verificationCode);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h6" sx={{ mt: 3 }}>
        Verify Account
      </Typography>
      <Box
        component="form"
        onSubmit={handleVerify}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          label="Verification Code"
          id="verification-code"
          name="verification-code"
          autoFocus
          value={verificationCode}
          onChange={(event) => handleChange(event)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Verify
        </Button>
      </Box>
    </Container>
  );
};

export default VerifyUser;
