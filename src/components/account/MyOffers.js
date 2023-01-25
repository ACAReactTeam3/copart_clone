import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { v4 as uuid } from 'uuid'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

let useStyle = createUseStyles({
    parent: {
        backgroundColor: 'white'
    },

    inputParent: {
        width: '70%',
        margin: [0, 'auto'],
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    buttonParent: {
        width: '50%',
        height: 100,
        margin: [0, 'auto'],
        backgroundColor: '#ffff99',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default function MyOffers() {
    let classes = useStyle()
    let sort = ['Ամենաթարմերը', 'Գին՝ թանկից - էժան', 'Գին՝ էժանից-թանկ', 'Տարեթվերը՝ ամենահները', 'Տարեթվերը՝ ամենանորերը']
    let [selectedSort, setSelectedSort ] = useState('')
    const handleChangeselectedType = (event) => {
        setSelectedSort(event.target.value) ;
      };
  return (
      <div className={classes.parent}>
      <div className={classes.inputParent}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-dialog-select-label"> Տեսակը </InputLabel>
             <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={selectedSort}
                onChange={handleChangeselectedType}
                input={<OutlinedInput label="Sort" />}
            >
                {
                sort.map(item => {
                    return <MenuItem value={item} key={uuid()}> {item} </MenuItem>
                })
                }
            </Select>
        </FormControl>
        <label>
            <input type='checkbox' />
            Ակտիվները
        </label>
        <label>
            <input type='checkbox' />
            Ոչ ակտիվները
        </label>
        </div>
        <div className={classes.buttonParent}>
            <p> <ErrorOutlineIcon /> Դուք դեռևս չունեք հայտարարություններ: </p>
            <Button variant='contained' sx={{margin: 'auto'}}> Տեղադրել հայտարարություն </Button>
        </div>
        </div>
  )
}
