import React, { useState } from 'react';
import AppBar from '../src/components/AppBar';
import Copyright from '../src/components/Copyright';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import va from '@vercel/analytics';

export default function Home() {
  const [url, setUrl] = useState('');
  const openUrl = () => {
    window.open(url, '_blank')
    va.track('open')
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Universal Links Opener
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Link Opener
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              To open a Universal Links please type it and then click
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Paste your link here ✨"
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUrl(event.target.value);
                }} />
              <Button disabled={!url} variant="contained" onClick={openUrl}>open link</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}