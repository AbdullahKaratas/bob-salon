import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TypeAnimation from 'react-type-animation';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import PriceTable from "../PriceTable/PriceTable";
import AboutBobSalon from "../AboutBobSalon/AboutBobSalon";
import WorkingOnIt from "../WorkingOnItPage/WorkingOnIt";


const navigationCard = [
  {
    id: "about",
    title: "über bob-salon",
  },
  {
    id: "price",
    title: "preise",
  },
  {
    id: "reservation",
    title: "reservierung",
  },
  {
    id: "contact",
    title: "kontakt aufnahme",
  },
];

function HomeBodyContent() {
  const [state, setState] = React.useState({
    about: false,
    price: false,
    reservation: false,
    contact: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "100vw" : "100vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <PriceTable />
    </Box>
  );

  const reservationCard = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "100vw" : "100vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <WorkingOnIt />
    </Box>
  );

  const infoAboutBob = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "100vw" : "100vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <AboutBobSalon />
    </Box>
  );

  const HomeBodyTitle = <Container disableGutters component="main" sx={{ pt: 30, pb: 6 }}>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      fontWeight="bold"
      color="text.primary"
      gutterBottom
    >
      {/* <TypeAnimation
      cursor={false}
      sequence={['bob-salon', 1]}
    /> */}
      {/* Es gibt einen Bug, nach dem Fix erst aktivieren. */}
      bob-salon
    </Typography>
  </Container>;


  return (
    <React.Fragment>
      {/* home text */}
      <Container
        maxWidth={false}
      >
        {HomeBodyTitle}
        {/* End home text */}
        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {navigationCard.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={6} md={3}>
                <Button
                  sx={{ textTransform: "lowercase" }}
                  onClick={toggleDrawer(tier.id, true)}
                >
                  <Card
                    sx={{
                      background: "#f7f5dc",
                      boxShadow: "none",
                      border: "solid",
                      borderRadius: "12px",
                    }}
                  >
                    <CardHeader
                      title={tier.title}
                      titleTypographyProps={{ align: "center" }}
                      action={null}
                      subheaderTypographyProps={{
                        align: "center",
                      }}
                      sx={{
                        backgroundColor: "#f7f5dc",
                        minWidth: "230px",
                      }}
                    />
                  </Card>
                </Button>
                { tier.id === 'price' ? (
                  <Drawer
                    anchor={"bottom"}
                    open={state[tier.id]}
                    onClose={toggleDrawer(tier.id, false)}
                  >
                    {list(tier.id)}
                  </Drawer>
                ) : tier.id === 'about' ? (
                  <Drawer
                  anchor={"bottom"}
                  open={state[tier.id]}
                  onClose={toggleDrawer(tier.id, false)}
                >
                  {infoAboutBob(tier.id)}
                </Drawer>
                ) : (
                 <Drawer
                  anchor={"bottom"}
                  open={state[tier.id]}
                  onClose={toggleDrawer(tier.id, false)}
                >
                  {reservationCard(tier.id)}
                </Drawer>
                )}
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
