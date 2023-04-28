import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Made with ❤️ using '}
      <MuiLink color="inherit" href="https://mui.com/" target="_blank">
        Mui
      </MuiLink>
      {'. by '}
      <MuiLink color="inherit" href="https://github.com/vinifig" target="_blank">
        @vinifig
      </MuiLink>
    </Typography>
  );
}