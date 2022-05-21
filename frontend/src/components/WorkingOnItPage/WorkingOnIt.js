import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import './WorkingOnIt.css';


const cardMedia = (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Grid item xs={12}>
        <img src={logo} className="App-logo" alt="logo" />
        </Grid>   
    </Grid> 
)

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" color="#FFFFFF" sx={{ ml: 1.5 }}>
          In Arbeit
        </Typography>
      </CardContent>
    </React.Fragment>
  );

export default function WorkingOnIt() {
  return (
    <Box sx={{ flex: 1, background: "#282c34", minHeight: "50vh" }}>
        {card}
        {cardMedia}
    </Box>
  );
}
