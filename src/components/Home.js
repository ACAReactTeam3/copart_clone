import { Button } from '@mui/material';
import React, { useState } from 'react'
import CardsAndSearch from './Cards and Search/CardsAndSearch';
import Carousel from './Carousel';
import Filter from './Filter';
import LeftSideBar from './LeftSideBar';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function Home() {
  let [isShow, setIsShow] = useState(false)
  const show = () => {
   return setIsShow(!isShow)
  }
  return (
    <div> 
      <LeftSideBar />
      <Carousel />
      <Button onClick={show}  variant="primary" endIcon={<ManageSearchIcon />}> Filter </Button>
      { isShow ? <Filter /> : null } 
      <CardsAndSearch />
    </div>
  )
}
 