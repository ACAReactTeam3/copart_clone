import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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
            transform: 'translate(15%, 35%)',
        }
})

export default function SignIn(props) {
    const classes = useStyles()
    const auth = getAuth();
    let { signIn } = props
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          navigate('/', {replace: true})
        }
      })
    }, [auth])

  return (
    <div>
        <CssBaseline />
        <Container maxWidth="sm">
            <Box component="form"
                 sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
                 noValidate 
                 autoComplete="off">
                <div className={classes.div}>
                    <h1> Sign In </h1>
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
                    required
                    id="outlined-required"
                    label="Password"
                    type='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value.trim())
                    }}
                />
                <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                    signIn(email, password)
                    setEmail('')
                    setPassword('')
                }}> Sign In </Button>
                </Stack>
                <h4>
                    No account yet?
                    <Link to='/signup'> Sign Up </Link>
                </h4>
                </div>
            </Box>
          </Container> 
    </div>
  )
}