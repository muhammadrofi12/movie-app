import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button";
import StyledDetailMovie from "./DetailMovie.styled";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";
  const trailer =
    movie.videos && movie.videos.results.length > 0
      ? `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
      : "";

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;

    try {
      const response = await axios.get(URL);
      setMovie(response.data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  }

  console.log(movie);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        {trailer && (
          <Button as="a" href={trailer}>
            Watch Trailer
          </Button>
        )}
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
