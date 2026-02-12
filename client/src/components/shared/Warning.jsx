import { Alert } from '@mui/material';
import React from 'react';

const Warning = ({ message }) => {
  return (
    <>
      <Alert sx={{ maxWidth: '700px', marginBottom: '40px' }} severity="error">
        {message}
      </Alert>
    </>
  );
};

export default Warning;
