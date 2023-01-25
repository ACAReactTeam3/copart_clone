import React from 'react'
import { createUseStyles } from 'react-jss'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

let useStyle = createUseStyles({
    parent: {
        backgroundColor: 'white',
        padding: 10

    },
    textParent: {
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

export default function Saved() {
    let classes = useStyle()
  return (
      <div className={classes.parent}>
        <div className={classes.textParent}>
            <p> <ErrorOutlineIcon /> Հիշված հայտարարություններ չկան: </p>
        </div>
      </div>
  )
}
