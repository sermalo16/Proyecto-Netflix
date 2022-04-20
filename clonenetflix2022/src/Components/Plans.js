import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import { NetflixButton } from '../styled/styledcomponets';
import { useDispatch, useSelector } from "react-redux";
import { setPrice} from '../features/PriceSlice';
import { useHistory } from 'react-router-dom';

const Plans = ({cost,children,color,wide}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick= (cost) => { 
      dispatch(setPrice(cost))
      history.push("/chekout")
    }
    return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant="h5">{children}</Typography>
      <NetflixButton 
      color={color} 
      wide={wide}
      onClick={()=> handleClick(cost)}
      > subscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& button": {
        marginBottom: theme.spacing(2),
      },
    },
    standard:{
      fontSize: "1.2rem",
    }
  }));
export default Plans