import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Banner.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base='https://api.themoviedb.org/3';
const baseUrl="https://image.tmdb.org/t/p/w500/";
const req={
    original:`/discover/movie?api_key=6665ed067492248fdb044450a0bb9020&with_genres=27`,
};
const Banner = () => {
    const [movie,setMovie]=useState([]);
    const [TrailerUrl,setTrailer]=useState("");
   useEffect(() => {
    async function f(){
        const res=await axios.get(`${base}${req.original}`)
        setMovie(
            res.data.results[
                Math.floor(Math.random()*res.data.results.length-1)
            ]
        )
        return res;
    }
    f();
   
     
   }, []);
   console.log(movie);
   const opt={
    height:"400",
    width:"100%",
    playersVars:{
      autoplay:1,
    }
}
function handleClick(movie){
    if (TrailerUrl) {
      setTrailer('');
    }
    else{
       movieTrailer(movie?.title || movie?.name||"")
      .then((url) => {
        const urlParams=new URLSearchParams(new URL(url).search)
        setTrailer(urlParams.get('v'))
      }).catch((err)=>console.log(err))
  
  
    }
  
   };
   
    
  return (
    // <div>
        <>

    <header className='banner'
    style={
        {
            backgroundSize:"cover",
            backgroundImage:`url(${baseUrl}${movie.backdrop_path})`,
            backgroundPosition:"centre centre",
        }
    }
    >
        <div className='banner__contents'>
            <h1
            className='banner__title'
            >{movie?.title || movie?.name || movie?.original_name}</h1>
            {/* <img src={`${baseUrl}${movie.backdrop_path}`} alt={movie.title}/> */}
            <div className='banner_buttons1'>
                <button className='banner_button'
                 onClick={()=>handleClick(movie)}
                 >
                PlAY
                </button>
                {/* <button className='banner_button'>
                MY LIST
                </button> */}
            </div>
                <h2
               
               
               className='banner_description'>{movie?.overview}</h2>

        </div>
        
        {/* <div className="banner_fade"> */}
        {/* </div> */}
    </header>
        {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opt}/>}
               </>
  )
}

export default Banner;
