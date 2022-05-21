import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '../components/AppBar/AppBar';
import HomeBody from '../components/HomeBody/HomeBody';

function LandingPage() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, background: '#8f681a' }} />
      <CssBaseline />
      {/* <AppBar>
      </AppBar> */}
      <HomeBody>
      </HomeBody>
    </React.Fragment>
  );
}

export default function Landing() {
  return <LandingPage />;
}