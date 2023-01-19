import React from 'react'
import { Outlet} from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h2> About Us </h2>
        <p> Our company... </p>
        <Outlet />
     </div>
  )
}