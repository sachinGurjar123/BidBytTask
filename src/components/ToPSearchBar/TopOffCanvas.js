import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import TopIconButton from './TopOffCanvasButton';
import { Div } from './style';

const TopComponent = () => {
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Divider />
      <List>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita adipisci
          similique repudiandae delectus modi blanditiis placeat sequi. Qui reiciendis placeat
          saepe, minus totam numquam sequi quae consectetur possimus vero. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Voluptatem expedita adipisci similique repudiandae
          delectus modi blanditiis placeat sequi. Qui reiciendis placeat saepe, minus totam numquam
          sequi quae consectetur possimus vero. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatem expedita adipisci similique repudiandae delectus modi blanditiis placeat
          sequi. Qui reiciendis placeat saepe, minus totam numquam sequi quae consectetur possimus
          vero.
        </p>
      </List>
    </Box>
  );

  return (
    <>
      <Div>
        <Button sx={{ padding: '0px' }} onClick={toggleDrawer('bottom', true)}>
          {<TopIconButton />}
        </Button>
        <SwipeableDrawer
          PaperProps={
            {
              // sx: { width: "60%" },
            }
          }
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}>
          {list('bottom')}
        </SwipeableDrawer>
      </Div>
    </>
  );
};

export default TopComponent;
