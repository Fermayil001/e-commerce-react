import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert(message , bool) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity={message}>
      {bool ? `Your registration was successfully` : `Something went wrong`}
    </Alert>
  );
}