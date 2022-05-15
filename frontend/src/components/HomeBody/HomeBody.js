import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'über bob-salon',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'preise',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'reservierung',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: 'kontakt aufnahme',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function HomeBodyContent() {
  return (
    <React.Fragment>
      {/* home text */}
      <Container maxWidth={false} sx={{ background: "#f7f5dc", height: "100vh" }}>
        <Container disableGutters component="main" sx={{ pt: 25, pb: 6}}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            fontWeight= "bold"
            color="text.primary"
            gutterBottom
            >
            bob-salon
            </Typography>
        </Container>
        {/* End home text */}
        <Container maxWidth="lg" component="main">
            <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                item
                key={tier.title}
                xs={12}
                sm={6}
                md={3}
                >
                <Button sx={{ textTransform: 'lowercase'}}>
                    <Card sx={{ background: "#f7f5dc", boxShadow: 'none', border: 'solid', borderRadius: '12px' }}>
                        <CardHeader
                        title={tier.title}
                        titleTypographyProps={{ align: 'center' }}
                        action={null}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{
                            backgroundColor: "#f7f5dc",
                            minWidth: '230px',
                        }}
                        />
                    </Card>
                </Button>
                </Grid>
            ))}
            </Grid>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default function HomeBody() {
  return <HomeBodyContent />;
}