import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import PositionedMenu from '../HamburgerMenu/HamburgerMenu';

function ToolbarCustom() {
    return (
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: "50px" }}>
        </Typography>
        <PositionedMenu>
        </PositionedMenu>
      </Toolbar>
    );
}
  
export default ToolbarCustom;
