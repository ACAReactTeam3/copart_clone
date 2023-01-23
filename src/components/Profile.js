import React from 'react'
import Button from '@mui/material/Button';
import { getAuth } from "firebase/auth";
export default function Profile(props) {
  const auth = getAuth();
  const user = auth.currentUser;
  const { logout } = props
  let email = user?.email
  return (
    <div>
      <h1> Profile </h1>
      <h2> User: {email} </h2>
        <Button variant='outlined' onClick={logout}> Log out </Button>
    </div>
  )
}