/* import React from 'react'
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
        navigate('/', {replace: true})
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
} */

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { signUp } from '../../constants/constants'

let useStyles = createUseStyles({  
  title: {
    textAlign: 'center',
    margin: 5
},
  div: {
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  button: {
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
      margin: [ 5, 'auto']
  },
})

export default function SignUp(props) {
  const classes = useStyles() 
  let { /* signUp */ openSignUp, handleCloseSignUp} = props;
  let [email, setEmail] = useState('')
  let [name, setName] = useState('')
  let [surname, setSurname] = useState('')
  let [password, setPassword] = useState('')
  let disabledButton =  password.length < 6 || email.length < 3
  let navigate = useNavigate()
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate('/', {replace: true})
      }
    })
  }, [auth])


/*   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  return (
    <div>
      <Dialog open={openSignUp} onClose={handleCloseSignUp}>
        <DialogTitle className={classes.title}>  Գրանցվել </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.title}>
            Սոց. հաշիվներով
          </DialogContentText>
          <Button variant="contained" sx={{m:1}} className={classes.button}> Facebook <FacebookOutlinedIcon /> </Button>
          <Button variant="contained" sx={{m:1}} color='success' className={classes.button} > Google <GoogleIcon  /> </Button>
          <hr/>
          <DialogContentText className={classes.title}> Կամ </DialogContentText>
          <div className={classes.div}>
            <TextField
              required
              margin="dense"
              id="name"
              label="Էլ. հասցե"
              sx={{m: 1}}
              value={email}
              onChange={(e) => {
              setEmail(e.target.value)
            }}
            />
            <TextField
              id="outlined-required"
              label="Անուն"
              sx={{m: 1}}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />  
            <TextField
              id="outlined-required"
              label="Ազգանուն"
              sx={{m: 1}}
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value)
              }}
            /> 
            <TextField
            required
            id="outlined-required"
            label="Գաղտնաբառ"
            sx={{m: 1}}
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.trim())
            }}
          />
        </div>
        </DialogContent>
        <DialogActions>
          <Button disabled={disabledButton} variant='contained' onClick={() => {
            signUp(email, password, name, surname)
            handleCloseSignUp()
          }} sx={{m: [0, 'auto']}} > Գրանցվել </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}