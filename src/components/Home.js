import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom';
import Account from './account/Account';
import MyOffers from './account/MyOffers';
import PersonalInfo from './account/PersonalInfo';
import PersonalInfoData from './account/PersonalInfoData';
import PersonalInfoPassword from './account/PersonalInfoPassword';
import Saved from './account/Saved';
import CardsAndSearch from './Cards and Search/CardsAndSearch';
import CarTypes from './CarTypes';

export default function Home() {
  let routes = useRoutes([
    {
      path: '/*',
      children: [
        {
          path: '',
          element:  <CarTypes />
        },
      ]
    },

    {
      path: 'myoffers',
      element: <MyOffers />
  },
  {
      path: 'saved',
      element: <Saved />
  },
 /*  {
    path: 'personalinfo/*',
    element: <Account> <PersonalInfo /> </Account> 
  } */
  {
    path: 'personalinfo/*',
    element: <Account> <PersonalInfo /> </Account>,
    children: [
     { 
      path: 'personalinfodata',
      element: <PersonalInfoData />
     },
     {
       path: 'changepassword',
       element: <PersonalInfoPassword />
     }
    ]
  }
  ])
  return (
    <div> 
    {/*   <CarTypes /> */}
     {/*  <CardsAndSearch /> */}
    {/*  <Account /> */}
    {routes}
   {/*  <Routes>
        <Route path='personalinfodata' element={<PersonalInfoData />}> personalinfodata </Route>
        <Route path='changepassword' element={<PersonalInfoPassword />}> personalinfodata </Route>
    </Routes> */}
    </div>
  )
}
 