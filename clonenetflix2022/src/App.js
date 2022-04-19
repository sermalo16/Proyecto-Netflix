import {makeStyles} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, SelectUser } from "./features/UserSlice";


function App() {
  const user = useSelector(SelectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        dispatch(logout)
      }
    })//
    return unsubscribe;
  }, [dispatch])


  return (
    <div className={classes.root}>
      <Router>
      {
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route path='/chekout'>
              <Paypal/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
      }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;