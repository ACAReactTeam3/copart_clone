import { collection, getDocs, } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbStore } from "../firebase/firebase";
import { createUseStyles } from "react-jss";

let useStyles = createUseStyles({
    mapParent: {
        display: 'inline',
    },
    parent: {
        width: '80%',
        border: [1, 'black', 'solid'],
        margin: [0, 'auto'],
        display: 'flex',
    },
    postBox: {
        width: "100%",
        height: 210,
        marginRight: 1,
        objectFit: 'cover',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: [1, 'black', 'solid'],
        '& :hover': {
            transform: 'scale(1)'
        }
    },
    img: {
        width: 247,
        height: 155,
        objectFit: 'cover',
        transform: 'scale(.7)',
        transition: '1s',
        cursor: 'pointer',
    },
    priceDiv: {
        width: '100%',
        height: 55,
        position: 'relative',
        textAlign: 'center',
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

})

export default function AllOffers() {
const classes = useStyles()
let [post, setPost] = useState([])
useEffect(() => {
     (async () => {
        const colRef = collection(dbStore, 'user')
        const snapshots = await getDocs(colRef)

        const docs = snapshots.docs.map((doc) => {
            const data = doc.data()
            data.id = doc.id
            return data
        })
        setPost(docs)
    })()
}, [])
  return <div className={classes.parent}>
   {
       post.map((item) => {
           return <div key={Math.random()} className={classes.mapParent}> 
             {item.posts.map((post) => {
               return <div key={Math.random()} className={classes.postBox}>
                    <div> 
                        <img src={post.img} alt='Car' className={classes.img} />
                    </div>
                    <div className={classes.priceDiv}>  
                            <h3>  {post.brand} </h3> 
                            <h4> Price: {post.price} </h4>
                    </div>
                </div>
                })} 
            </div>
    })}
  </div>;
}
