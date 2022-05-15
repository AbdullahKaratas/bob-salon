import AppBar from '@mui/material/AppBar';
import Toolbar from '../Toolbar/Toolbar';


function AppBarCustom() {
    return (
      <AppBar position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `0px solid ${theme.palette.divider}`, background: "#f7f5dc" }}>
        <Toolbar />
      </AppBar>
    );
}
  
export default AppBarCustom;
