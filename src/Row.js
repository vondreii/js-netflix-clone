import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // These are where the images are stored
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // if [], run once when the row loads, don't run it again
    // if passing something, eg [movies], everytime movies changes, load this again.
    async function fetchData() {
      // eg when making a request to a 3rd party, it might take a second or 2
      // await means to wait for the response/promise to come back 
      const request = await axios.get(fetchUrl);
      // request.data.results is the list of movies coming back from the request
      //console.log(request);
      // Change the state of the movies to have the list returned
      setMovies(request.data.results);
      return request;
    }
    fetchData(); 
    // If there is any variable that is being used in a useEffect from outside the useEffect block, it needs to go in here eg [fetchUrl]
  }, [fetchUrl]);

  //console.table(movies);
  //console.log(movies)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } 
    else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => 
          console.log(error)
        );
    }
  }

  // movies.map() goes through each of the array
  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row__posters">
        
        {movies.map(movie => (
          /* String interpolation */
          <img 
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              /* Condition ? true : false */
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name} 
          />
        ))}
      </div>
      {/* <Youtube videoId="LKKG0sCxrGw" opts={opts}></Youtube> */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;