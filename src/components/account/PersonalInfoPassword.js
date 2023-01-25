import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

let useStyle = createUseStyles({
    parent: {
        backgroundColor: '#d9d9d9'
    },
    parentPassword: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        margin: [0, '40%'],
        padding: 10
    }
})

export default function PersonalInfoPassword() {
    let classes = useStyle()
    let [oldPassword, setOldPassword] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
  return (
      <div className={classes.parent}>
    <div className={classes.parentPassword}>
           <TextField
            required
            id="outlined-required"
            label="Հին գաղտնաբառ"
            sx={{width: 250, m: 1}}
            type='password'
            value={oldPassword}
            onChange={(e) => {
                setOldPassword(e.target.value.trim())
          }}
        />
         <TextField
          required
          id="outlined-required"
          label="Նոր գաղտնաբառ"
          sx={{width: 250, m: 1}}
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim())
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Կրկնել գաղտնաբառ"
          sx={{width: 250, m: 1}}
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value.trim())
          }}
          />
          <Button variant='contained' sx={{width: 250, m: 1}}> Change Password </Button>
    <p> Դուք կարող եք պարբերաբար թարմացնել գաղտնաբառը՝ այն ավելի ապահով դարձնելու համար </p>
    </div>
    </div>
  )
}
