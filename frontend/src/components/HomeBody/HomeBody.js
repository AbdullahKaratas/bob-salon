import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import TypeAnimation from 'react-type-animation';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const tiers = [
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List 
        sx={{ maxHeight: '90vh' }}
      >
        {[
          ["Haarschnitt inkl. Styling", "65€"],
          ["Haarschnitt", "38€"],
          ["Ansatz", "45€"],
          ["Styling", "35€"],
          ["Kind (12-16)", "25€"],
          ["Global", "70€"],
          ["Hochstecken", "50€"],
          ["Painting", "65€-120€"],
          ["Strähnen", "55€-20€"],
          ["Augenbrauen zupfen", "8€"],
          ["Augenbrauen zupfen und färben", "10€"],
        ].map((text, index) => (
          <dev>
            <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text[0]} sx={{ flexGrow: 1, ml: "5px", minWidth: "97vw" }} />
              <ListItemText primary={text[1]} style={{display:'flex', justifyContent:'flex-end'}}/>
            </ListItemButton>
            </ListItem>
          </dev>
          
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {/* home text */}
      <Container
        maxWidth={false}
        sx={{ background: "#f7f5dc", height: "100vh" }}
      >
        <Container disableGutters component="main" sx={{ pt: 12, pb: 6 }}>
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
              sequence={['bob-salon', 5000]}
            /> */}
            {/* Es gibt einen Bug, nach dem Fix erst aktivieren. */}
            bob-salon
          </Typography>
        </Container>
        {/* End home text */}
        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
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
                <Drawer
                  anchor={"bottom"}
                  open={state[tier.id]}
                  onClose={toggleDrawer(tier.id, false)}
                >
                  {list(tier.id)}
                </Drawer>
                {/* <React.Fragment key={tier.id}>
                    <Drawer
                      anchor={"bottom"}
                      open={state[tier.id]}
                      onClose={toggleDrawer(tier.id, false)}
                    >
                      {list(tier.id)}
                    </Drawer>
                  </React.Fragment> */}
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
