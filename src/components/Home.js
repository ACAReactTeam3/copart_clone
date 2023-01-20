import React from 'react'
import CardsAndSearch from './Cards and Search/CardsAndSearch';
import Carousel from './Carousel';
import PostTool from './Filter';
import LeftSideBar from './LeftSideBar';

export default function Home() {
  return (
    <div> 
      <LeftSideBar />
      <Carousel />
      <PostTool />
      <CardsAndSearch />
    </div>
  )
}
 