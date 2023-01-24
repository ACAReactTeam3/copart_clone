import React, { useState } from 'react'
import LeftSideBar from '../LeftSideBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createUseStyles } from 'react-jss';
import Dealers from './Dealers';
import Messages from './Messages';

let useStyles = createUseStyles({
    parentDiv: {
        width: '80%',
        height: 70,
        display: 'flex',
        justifyContent: 'space-around',
        margin: [0, 'auto']
    },
    img: {
        width: 70
    },
    button: {
        height: 30,
        margin: ['auto', 0]
    },
    buttonMyPage: {
        position: 'relative'
    },
    ul: {
        position: 'absolute',
        top: 70,
        left: 0,
        backgroundColor: 'white',
        border: [1, 'black', 'solid'],
        textAlign: 'center',
        display: 'none',

        '& :hover': {
            backgroundColor: 'red'
        },
    }

})

export default function Nav() {
    const classes = useStyles()
    let [show, setShow] = useState(false)
    const isShow = () => {
        setShow(!show)
    }
  return (
      <>
    <div className={classes.parentDiv} >
        <LeftSideBar />
        <img src='https://auto.am/assets/ico/200x200.png' className={classes.img} />
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
        >
         <TextField id="outlined-basic" label={'Մակնիշ, մոդել, տարեթիվ'} variant="outlined" />
        </Box>
         <Dealers />
         <Messages />
        <Button className={classes.buttonMyPage} onClick={isShow}>
            <AccountCircleIcon fontSize='large' color='action' />
            <span> Իմ էջը </span>
            <ul className={classes.ul}>
                <li> Մուտք </li>
                <li> Գրանցվել </li>
            </ul>
        </Button>
        <Button variant="contained" className={classes.button}> Վաճառել </Button>
    </div>
    </>
  )
}
