import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const base_Url = "https://image.tmdb.org/t/p/original/";

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.discover_kids);
        console.log(response);

        const data =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ];
        setBanner(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner-sec"
      style={{ backgroundImage: `url(${base_Url}${banner?.backdrop_path})` }}
    >
      <div className="container">
        <div className="banner-content">
          <h2>{banner?.title || banner?.name || banner?.original_name}</h2>
          <p id="banner-desc">{banner.overview}</p>
        </div>
      </div>
      <div className="dark-shade"></div>
    </div>
  );
}

export default Banner;
