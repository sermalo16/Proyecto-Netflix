import React, { useState } from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import logo from "../Imagenes/Logo-Netflix.png";
import HeroBanner from "../Imagenes/Banner.jpeg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponets";
import SignUp from "./SignUp";


const Login = () =>{
    const classes = useStyles();
    const [signIn, setSignIn] = useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} alt="logo" className={classes.logo} />
            <NetflixButton className={classes.session}>Iniciar Sesion</NetflixButton>
            <div className={classes.info}>
                {
                    !signIn ? (<SignUp/>) : (
                    <>
                    <Typography variant='h4' gutterBottom>
                        Unlimited films, tv progammes and more
                    </Typography>
                    <Typography variant='h5'>
                        Unlimited films, tv progammes and more
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        Unlimited films, tv progammes and more
                    </Typography>
                    <div className={classes.inputBlock}>
                        <NetflixInput placeholder="Email Addres"/>
                        <NetflixButton wide="medium" onclick={()=> setSignIn(true)}>Get Started</NetflixButton>
                    </div>
                    </>
                    )
                }
                
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        position:"relative",
        height:"100vh",
        backgroundImage:`url(${HeroBanner})`,
        objectFit:"contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
    },logo: {
        position:"fixed",
        width: "150px",
        top:0,
        left:20,
        cursor: "pointer",
    },session:{
        position:"fixed",
        zIndex:15,
        right:20,
        top:20,
    },info:{
        color: "#fff",
        zIndex:15,
        textAlign: "center",
        "& h4":{//asi se accede a los h4 de lso typografi
            fontWeight: 800,
        },
        "& h5":{
            fontWeight: 400,
        }


    },
  }));

export default Login;