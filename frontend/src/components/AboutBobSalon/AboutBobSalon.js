import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import ImageAbout from '../../assets/images/imgAbout.png';

const cardMedia = (
    <React.Fragment>
        <CardMedia
        component="img"
        height="100%"
        image={ImageAbout}
        alt="Paella dish"
        />
    </React.Fragment>
)

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Francisco J. Guerrero-Lopera
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          bob-salon
        </Typography>
        <Typography variant="body2">
         Friseur Meister seit 1990
          <br />
          Kreativität als Zentrum
          <br />
          Die Individualität im Mittelpunkt
          <br />
          Wundervolles Handwerk
          <br />
          5 Sterne Bewertung
        </Typography>
      </CardContent>
    </React.Fragment>
  );

export default function AboutBobSalon() {
  return (
    <Box sx={{ flexGrow: 1, background: "#f7f5dc", minHeight: "50vh" }}>
      <Grid container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '50vh' }}>
        <Grid item xs={4} alignItems="center" justify="center">
            <Card 
                variant="outlined" 
                sx={{ background: "#f7f5dc", borderRadius: "12px", width: "100%"}}
                styles={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent:'center'}}
                >
                {cardMedia}
            </Card> 
        </Grid>
        <Grid item xs={8} alignItems="center" justify="center">
            <Card 
                variant="outlined" 
                sx={{ background: "#f7f5dc", borderRadius: "12px", width: "90%" }}
                >
                {card}
            </Card>    
        </Grid>
      </Grid>
    </Box>
  );
}
