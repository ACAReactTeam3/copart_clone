import React from 'react'
import Button from '@mui/material/Button';

export default function Profile(props) {
  const { oneUser, logout } = props
  return (
    <div>
      <h1> Profile </h1>
        <Button variant='outlined' onClick={logout}> Log out </Button>
    </div>
  )
}