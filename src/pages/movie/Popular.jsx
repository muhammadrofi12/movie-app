import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

import MoviesContext from "../../context/MoviesContext";

function PopularMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    getPopularMovies();
  });

  async function getPopularMovies() {
    // Fetch data using axios
    const response = await axios.get(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
