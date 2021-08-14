import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
  // This is the random movie at the top
  const [movie, setMovie] = useState([]);
  
  // run once when the banner component loads
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.originals);
      // Randomly select one movie from the list returned
      let randomIndex = Math.floor(Math.random() * request.data.results.length - 1)
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>
      <div className="banner__contents">
        {/* Title */}
        <h1 className="banner__title">
          {/* ? means if there is a movie title, OR there is a movie name etc. */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Div for the 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* Description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  )
}

export default Banner;