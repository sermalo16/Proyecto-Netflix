import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import Header from '../Components/Header';
import Plans from '../Components/Plans';
import netflixAvatar from '../Imagenes/avatar netflix.jpg';
import { NetflixButton } from '../styled/styledcomponets';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const signout = () =>{
    auth.signOut();//signout de firebase
    history.push("/login")
  }
  
  return (
    <div className={classes.root}>
      <Header/>
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <img src={netflixAvatar} alt="avatar" className={classes.avatar} />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">Email usuario</Typography>
            <Typography variant="h5" gutterBottom className={classes.plansText}>Palns</Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
            <NetflixButton wide="fullWidth" onClick={signout}>Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    color: "#fff",
    minHeight:"100vh",
    width:"100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img":{
      height: "100px",
      [theme.breakpoints.down("sm")]:{//ocultamos la mpantalle herramienta de materia ui
        display: "none",
      }
    }
  },
  details:{
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6":{
      backgroundColor:"#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize:"18px",

    }
  },
  plans:{
    width: "100%",
  },
  plansText:{
    borderBottom: "1px solid lightgray"
  }

}));

export default Profile;