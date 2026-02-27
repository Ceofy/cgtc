import React from 'react';

import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const TextField = props => {
  const { label, required, ...rest } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{ marginBottom: 0.5 }} htmlFor={`${label}-input`}>
        {label} {required ? '*' : ''}
      </Typography>
      <MuiTextField
        name={label.toLowerCase()}
        fullWidth
        required={required}
        {...rest}
        id={`${label}-input`}
      />
    </Box>
  );
};

export default TextField;
