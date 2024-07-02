import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getRecommendationMovies() {
      try {
        const response = await axios.get(ENDPOINTS.RECOMMENDATIONS(id));
        console.log(response.data.results); // Tambahkan log untuk cek data
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching recommendation movies:", error);
      }
    }

    getRecommendationMovies();
  }, [id]);

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies by Detail" movies={movies} />
    </>
  );
}

export default Detail;
