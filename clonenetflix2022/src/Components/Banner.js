import React, { useEffect, useState } from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core";
import luciferBanner from "../Imagenes/Lucifer-banner.jpg";
import axios2 from '../axios';
import request from "../Requests";

const Banner = () => {
    const classes = useStyles();

    //funcion para recortar la descripcion
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string

    const [movies, setMovies] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const requests = await axios2.get(request.fetchNetflixOriginals)
        // tenemos un array de peliculas en request.data.results
        // generamos un numero random entre 0 y la longitud del array, para obtener un indice aleatorio
        const random = Math.floor(Math.random() * requests.data.results.length - 1);
        // mostraremos en pantalla request.data.results[random]
        setMovies(requests.data.results[random]);
        return requests;
      }
      fetchData();
    }, [])

    console.log(movies);
  return (
    <div className={classes.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      position: 'relative',
      height: '440px',
      objectFit: "contain",
      BackgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
    }}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movies?.title || movies?.name || movies?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
        style={{wordWrap: "break-word"}}
        variant="h6"
        className={classes.description}>
          {
            truncate(movies?.overview,160)
          }
        </Typography>

        <div className={classes.fadebutton}></div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
      //backgroundImage: `url(${luciferBanner})`,
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