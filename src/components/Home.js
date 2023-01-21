import React from 'react'
import CardsAndSearch from './Cards and Search/CardsAndSearch';
import Carousel from './Carousel';
import Filter from './Filter';
import LeftSideBar from './LeftSideBar';

export default function Home() {
  return (
    <div> 
      <LeftSideBar />
      <Carousel />
      <Filter />
      <CardsAndSearch />
    </div>
  )
}
 