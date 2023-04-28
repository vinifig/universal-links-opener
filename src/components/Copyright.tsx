import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Made with ❤️ using '}
      <MuiLink color="inherit" href="https://mui.com/">
        Mui
      </MuiLink>{'.'}
    </Typography>
  );
}