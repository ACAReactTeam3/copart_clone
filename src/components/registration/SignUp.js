import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

let useStyles = createUseStyles({  
  '@global': {
      body: {
          backgroundColor: 'grey', 
      }
  },
  div: {
          width: 450,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'translate(15%, 10%)',
      }
})

export default function SignUp(props) {
  const classes = useStyles() 
  let {username, signUp} = props;
  let [email, setEmail] = useState('')
  let [name, setName] = useState('')
  let [surname, setSurname] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')
  let checkExistUserEmail = username.find(oldUserEmail => oldUserEmail.email == email)
  let disabledButton =  password.length < 6 || !!checkExistUserEmail || email.length < 3 || password !==  confirmPassword
  let navigate = useNavigate()
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate('/home', {replace: true})
      }
    })
  }, [auth])

  return (
    <div>
      <Container maxWidth='sm'>
        <Box
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
        noValidate
        autoComplete="off"
      >
        <div className={classes.div}>
        <h1 className={classes.h1}> Sign Up </h1>
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />  
          <TextField
            id="outlined-required"
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />  
          <TextField
            id="outlined-required"
            label="Surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value)
            }}
          /> 
          <TextField
          required
          id="outlined-required"
          label="Password"
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim())
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm password"
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value.trim())
          }}
          />
      <Stack spacing={2} direction="row">
        <Button variant="contained" disabled={disabledButton}
        onClick={() => {
          signUp(email, password, name, surname)
          }}> Sign Up </Button>
      </Stack>
      <h4>
        Already have an account?
      <Link to='/signin'> Sign In</Link> </h4>
        </div>
      </Box>
    </Container>
    </div>
  )
}