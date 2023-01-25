import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, Outlet, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import MyOffers from './MyOffers';
import Saved from './Saved';
import PersonalInfo from './PersonalInfo';
import { createUseStyles } from 'react-jss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import PersonalInfoData from './PersonalInfoData';
import Home from '../Home';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';

let useStyle = createUseStyles({
    parentDiv: {
        backgroundColor: '#D0D0D0',
    },
    columnDiv: {
         display: 'flex',
         justifyContent: 'space-around'
    },
    link: {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
})
    
export default function Account(props) {
let routes = useRoutes([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'myoffers',
        element: <MyOffers />
    },
    {
        path: 'saved',
        element: <Saved />
    }
])
let navigate = useNavigate()

let classes = useStyle()
const db = getDatabase()
const auth = getAuth();
const user = auth.currentUser;
const { logout } = props
let email = user?.email

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        const uid = user.uid;
        navigate('/', {replace: true})
      }
    })
  }, [auth])
  
return (
    <div className={classes.parentDiv}>
    <div className={classes.columnDiv}>
      <div>
        <p> {email} </p>
      </div>
      <div>
        <p> Հաշվի տիպը - անձնական</p>
        <span> հայտարարություն 10-ից </span>
      </div>
      <div>
        <p> Հաշվի կապը սոց. հաշիվների հետ</p>
        <Button variant="contained" sx={{m:1}}> <FacebookOutlinedIcon /> Facebook </Button>
        <Button variant="contained" color='success'> <GoogleIcon /> oogle </Button>
      </div>
    </div>
            <nav className={classes.link}>
            <Link to='myOffers'> <h2> Իմ հայտարարությունները </h2></Link>
            <Link to='saved'> <h2> Հիշվածները </h2></Link>
            <Link to='personalinfo'> <h2> Անձնական տվյալներ </h2> </Link>
            </nav>
                {routes}
            <Routes>
                <Route path='personalinfo/*' element={<PersonalInfo />}> </Route>
            </Routes>
      <Outlet />
  </div>
  )
}
