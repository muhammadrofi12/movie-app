import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

import MoviesContext from "../../context/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      try {
        const response = await axios.get(ENDPOINTS.TOP_RATED);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies"/>
    </div>
  );
}

export default TopRated;
