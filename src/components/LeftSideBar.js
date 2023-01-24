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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import MessageIcon from '@mui/icons-material/Message';

const useStyles = createUseStyles({
    ListItem : {
        '& :hover': {
            backgroundColor: 'red'
        }
    },
    language: {
      padding: 10,
    }
})

export default function LeftSideBar() {
    const classes = useStyles()
    let navigate = useNavigate()
  let menuList = [
    {
      link: '',
      name: 'Մուտք',
      icon:  <AccountCircleIcon />,
    },
    {
      link: '',
      name: 'Հաղորդագրություններ',
      icon:  <MessageIcon />
    },
    {
      link: '',
      name: 'Դիլերներ',
    }, 
    {
      link: '',
      name: 'Դառնալ ավտոդիլեր',
    },
    {
      link: '',
      name: 'Գովազդ կայքում',
    },
    {
      link: '',
      name: 'Օգտագործման կանոնները',
    },
    {
      link: '',
      name: 'Օգնություն',
    }, 
    {
      link: '',
      name: 'Կապ',
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
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((item) => (
          <ListItem key={uuid()} disablePadding className={classes.ListItem}>
            <ListItemButton onClick={() => {return navigate(`user/${item?.link}`)}}>
              <ListItemIcon>
                {item.icon} 
              </ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {['հայերեն','Русский', 'English'].map((item) => {
          return <a key={uuid()} className={classes.language}> 
            <span> {item} </span>
           </a>
      })}
    </Box>
  );
  return (
    <>
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
    </>
  )
}
