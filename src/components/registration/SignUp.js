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
  let [nickname, setNickname] = useState('')
  let [name, setName] = useState('')
  let [surname, setSurname] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')
  let checkExistUserNickname = username.find(oldUserNickname => oldUserNickname.nickname == nickname)
  let disabledButton =  password.length < 3 || !!checkExistUserNickname || nickname.length < 3 || password !==  confirmPassword
  let navigate = useNavigate()
  useEffect(() => {
    if(localStorage.length) {
      navigate('/')
    }
  }, [localStorage.length])

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
            label="Nickname"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />  
          <TextField
            required
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
          signUp(nickname, name, surname, password)
          setNickname('')
          setName('')
          setSurname('')
          setPassword('')
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