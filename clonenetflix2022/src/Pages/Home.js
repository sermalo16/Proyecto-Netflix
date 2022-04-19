import React from 'react';
import {makeStyles} from "@material-ui/core";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Rows from "../Components/Rows";
import request from "../Requests";

const Home = () =>{
  const classes = useStyles();
    return (
        <div> 
          <Header/> 
          <Banner/>
          <Rows title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
          <Rows title="Top Rated" fetchUrl={request.fetchTopRated}/>
          <Rows title="Action Movies" fetchUrl={request.fetchActionMovies}/>
          <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
          <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
          <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
          <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
          
          <Rows title="Trending" fetchUrl={request.fetchTrending}/>
        </div>
        
    )
}


const useStyles = makeStyles((theme) => ({
    root:{

    },
  }));


export default Home;