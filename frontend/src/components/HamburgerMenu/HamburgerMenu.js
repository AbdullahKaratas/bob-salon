import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Hamburger from 'hamburger-react';
import { Box } from '@mui/material';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Hamburger />
      </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            sx={{minHeight: "100vh"}}
        >
            <MenuItem onClick={handleClose}>über bob-salon</MenuItem>
            <MenuItem onClick={handleClose}>preise</MenuItem>
            <MenuItem onClick={handleClose}>reservierung</MenuItem>
            <MenuItem onClick={handleClose}>kontakt aufnahme</MenuItem>
        </Menu>
    </div>
  );
}