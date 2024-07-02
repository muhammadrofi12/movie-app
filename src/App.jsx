import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";
import GlobalStyle from "../GlobalStyle";
// import Theme.jsx
import theme from "./components/Theme";
import Detail from "./pages/movie/Detail";
import data from "./utils/constants/data";

import MoviesContext from "./context/MoviesContext";

function App() {
  const [movies, setMovies] = useState(data);

  const contextValue = {
    movies,
    setMovies,
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home movies={movies} />} />
              <Route
                path="/movie/create"
                element={<CreateMovie/>}
              />
              <Route path="/movie/popular" element={<PopularMovie movies={movies}/>} />
              <Route path="/movie/now" element={<NowPlayingMovie movies={movies}/>} />
              <Route path="/movie/top" element={<TopRatedMovie movies={movies}/>} />
              <Route path="/movie/:id" element={<Detail />} />
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
