import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Zone1 from './Zone1';
import Zone2 from './Zone2';
import Zone3 from './Zone3';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
 

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {value === 0 ?(
           <Zone1 />
        ): value === 1 ?(
             <Zone2 />
        ): value === 2 ?(
            <Zone3 />
        ):(
            <Zone1 />
        )}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Zone 1" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Zone 2" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Zone 3" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
