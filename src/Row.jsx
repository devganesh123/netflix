import React, { useState, useEffect } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl }) {
  const base_Url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        const results = request.data.results;
        setMovies(results);
        //console.log(results)
        return request;
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  //react-youtube api
  const opts = {
    height: "380px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //movieTrailer Api
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // movieTrailer( 'Oceans Eleven', ( error, response ) => {
  //     console.log( response );

  // } )

  return (
    <div className="container mt-5">
      <h3>{title}</h3>
      <div className="poster-row mt-3">
        {movies.map((movie) => (
          <div className="poster-col" key={movie.id}>
            <img
              src={`${base_Url}${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid "
              onClick={() => handleClick(movie)}
            />
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Row;
