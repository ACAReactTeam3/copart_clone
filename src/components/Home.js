import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HouseIcon from '@mui/icons-material/House';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import CardsAndSearch from './Cards and Search/CardsAndSearch';

export default function Home() {
  let navigate = useNavigate()
  let menuList = [
    {
      name: 'Home',
      icon:  <HouseIcon />
    },
    {
      name: 'Profile',
      icon:  <AccountCircleIcon />
    },
    {
      name: 'CreatePost',
      icon:  <AddCircleIcon />
    }, 
    {
      name: 'About',
      icon:  <InfoIcon />
    },
  ]
  const [state, setState] = useState({left: false});
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((item) => (
          <ListItem key={uuid()} disablePadding>
            <ListItemButton onClick={() => {return navigate(`user/${item.name}`)}}>
              <ListItemIcon>
                {item.icon} 
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div> 
          <Button onClick={toggleDrawer('left', true)} > 
            <MenuRoundedIcon fontSize='large' color='action' /> 
          </Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          <CardsAndSearch />
    </div>
  )
}
 