import React, { useState } from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import { NetflixButton, NetflixInput } from '../styled/styledcomponets';

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const signIn = (e) =>{

  }//funcion para signUp

  const register = (e) =>{

  }//Funcion par Register
  
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">Sign In</Typography>
      <form className={classes.form}>
        <NetflixInput value={email} placeholder="Email" className={classes.email} onChange={ (e) => setEmail(e.target.value)}/>
        <NetflixInput type="password" value={password} placeholder="Passsword" className={classes.password} onChange={ (e) => setPassword(e.target.value)}/>
        <NetflixButton type="submit" wide="medium" radius onclick={signIn}>Sign In</NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ? {" "}
          <span className={classes.signupLink} onClick={register}>
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: "350px",
    Width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-evenly",
    alignItems: "center",
  },
  form:{
    width: "80%",
  },
  email:{
    marginBottom: theme.spacing(2),
  },
  password:{
    marginBottom: theme.spacing(4),
  },
  signupLink:{
    color: "#fff",
    cursor: "pointer",
    "& hover": {
      textDecoration: "underline",
    },
  }
}));

export default SignUp