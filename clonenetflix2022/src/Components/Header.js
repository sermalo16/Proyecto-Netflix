import { useEffect, useState } from 'react'
import {AppBar, makeStyles, Toolbar, Avatar, IconButton} from "@material-ui/core";
import logo from "../Imagenes/Logo-Netflix.png";
import { useHistory } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    const history = useHistory();
    
    //declaramos una variable setshow false
    const [show, setShow] = useState(false);
    
    //si el scrool en vertical es mayor a 100 la variable pasara a ser true
    const hideHeader = () =>{
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    
    useEffect(() =>{
        window.addEventListener("scroll", hideHeader)
        return () => window.removeEventListener("scroll", hideHeader)
    },[])

    return (
    <AppBar position="sticky" elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
        <Toolbar className={classes.toolbar}>
            <IconButton onClick={() =>history.push("/")}>
                <img src={logo} alt="logo" className={classes.logo} />
            </IconButton>
            <Avatar variant="square" styles={{cursor: "pointer"}} onClick={() => history.push("/profile")}/>
        </Toolbar>
    </AppBar>
  )
}


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#111",
        top: 0,
        left: 0,
        right: 0,
    },
    transparent:{
        backgroundColor: "transparent"
    },
    logo: {
        width: "100px",
        cursor: "pointer",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
  }));
export default Header