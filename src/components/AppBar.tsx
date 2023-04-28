import * as React from 'react';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


export default styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<MuiAppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));