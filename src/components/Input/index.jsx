import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24203b',
    },
  },
});

function Input({ label, helperText, error, register, name, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextField
          color='primary'
          variant='outlined'
          label={label}
          helperText={helperText}
          error={error}
          {...rest}
          size='small'
          {...register(name)}
        />
      </div>
    </ThemeProvider>
  );
}

export default Input;
