import React from 'react';
import {AppBar, Typography} from '@mui/material';

/**
 * @return {JSX.Element}
 * @description
 * This is the header component of the application.
 */
function Header() {
  return (
    <AppBar
      sx={{height: '40px',
        display: 'flex', alignContent: 'center',
        boxShadow: 'none'}}
    >
      <Typography
        variant="h6"
        sx={{paddingLeft: '10px', paddingTop: '5px'}}
      >
        TODO
      </Typography>
    </AppBar>
  );
};

export default Header;
