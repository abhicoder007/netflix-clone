import React,{StrictMode, useEffect,useState} from 'react'
import axios from 'axios';
import "./Row.css" ;
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
const base='https://api.themoviedb.org/3';
const baseUrl="https://image.tmdb.org/t/p/w500/";
const req={
  fetchTopRated:`/movie/top_rated?api_key=6665ed067492248fdb044450a0bb9020&language=en-US`,
  fetchTrending:`/trending/all/week?api_key=6665ed067492248fdb044450a0bb9020&language=en-US`,
  dis1:`/discover/movie?api_key=6665ed067492248fdb044450a0bb9020&with_genres=35`,
  dis2:`/discover/movie?api_key=6665ed067492248fdb044450a0bb9020&with_genres=27`,
  dis3:`/discover/movie?api_key=6665ed067492248fdb044450a0bb9020&with_genres=10749`,
  dis4:`/discover/movie?api_key=6665ed067492248fdb044450a0bb9020&with_genres=99`,

};
function Row({title,fetchUrl,is}) {
  
    const [movies,setMovie]=useState([]);
    const [TrailerUrl,setTrailer]=useState("");
    useEffect(() => {
      async function func(){

        {
          let request=null;
          if (fetchUrl===1) {
            
            request=await axios.get(`${base}${req.fetchTrending}`)
          }
          if(fetchUrl===2) {
            // console.log("hello")
            request=await axios.get(`${base}${req.fetchTopRated}`)
            
          }
          if(fetchUrl===3) {
            // console.log("hello")
            request=await axios.get(`${base}${req.dis1}`)
            
          }
          if(fetchUrl===4) {
            // console.log("hello")
            request=await axios.get(`${base}${req.dis2}`)
            
          }
          if(fetchUrl===5) {
            // console.log("hello")
            request=await axios.get(`${base}${req.dis3}`)
            
          }
          if(fetchUrl===6) {
            // console.log("hello")
            request=await axios.get(`${base}${req.dis4}`)
            
          }


          setMovie(request.data.results);
          return request;
        }

      }
      func();
    
}, [fetchUrl])
console.table(movies)
const opt={
  height:"400",
  width:"100%",
  playersVars:{
    autoplay:1,
  }
  


};
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
    <div class="Row">
        {/* <h2>{fetchUrl}</h2> */}
        <h3 className='txt'>{title}</h3>
        <div className='post'>

           
            {movies.map(movie =>(
            <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row__poster ${is && "head"}`}
             src={`${baseUrl}${fetchUrl<=1 ? movie.poster_path:movie.backdrop_path}`} alt={movie.title} />
           ))}

        </div>
        {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opt}/>}
    <div>
      
    </div>
    </div>
  )
}

export default Row