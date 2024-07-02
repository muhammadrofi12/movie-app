import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

import MoviesContext from "../../context/MoviesContext";

function NowPlayingMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      try {
        const response = await axios.get(ENDPOINTS.NOW_PLAYING);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    }

    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movie"/>
    </div>
  );
}

export default NowPlayingMovie;
