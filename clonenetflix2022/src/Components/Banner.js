import React from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core";
import luciferBanner from "../Imagenes/Lucifer-banner.jpg";

const Banner = () => {
    const classes = useStyles();

    //funcion para recortar la descripcion
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Movie Tittle
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description}>
          {
            truncate("Movie description Movie description Movie ",160)
          }
        </Typography>

        <div className={classes.fadebutton}></div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundImage: `url(${luciferBanner})`,
      position: 'relative',
      height: '440px',
      objectFit: "contain",
      BackgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
    },
    buttons:{
      //asi se accede a los buttones en material/ui
      "& button": {
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1,4,1,4),
        marginRight: "1rem",
        backgroundColor:"rgba(51,51,51,0.5)",
      },
      "& button:hover": {//aplicando hover a los botones en material/ui
        color: "#000",
        backgroundColor: "#e6e6e6"
      },
    },
    fadebutton:{
      position: "absolute",
      top:"30vh",
      bottom:0,
      left:0,
      right:0,
      zIndex:99,
      backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    },
  }));

export default Banner