import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 992px) {
    margin: 0 1rem;
    justify-content: space-between;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-basis: 60%;
    margin-bottom: 0;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 768px) {
    flex-basis: 40%;
  }
`;

const HeroTitle = styled.h1`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 3.44rem;
  }
`;

const HeroGenre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    font-size: 1.59rem;
  }
`;

const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }

  @media (min-width: 992px) {
    padding-right: 3rem;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border-radius: 20px;
    margin: 0;
  }

  @media (min-width: 992px) {
    border-radius: 25px;
  }
`;

function Hero() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState("");
  const [idTrailer, setIdTrailer] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch trending movies
        const trendingResponse = await axios.get(ENDPOINTS.TRENDING);
        const firstMovie = trendingResponse.data.results[0];

        // Fetch movie details
        const detailResponse = await axios.get(ENDPOINTS.DETAIL(firstMovie.id));

        setMovie(detailResponse.data);
        setGenres(
          detailResponse.data.genres
            ? detailResponse.data.genres.map((genre) => genre.name).join(", ")
            : ""
        );

        setIdTrailer(
          detailResponse.data.videos &&
            detailResponse.data.videos.results.length > 0
            ? detailResponse.data.videos.results[0].key
            : ""
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.title}</HeroTitle>
          <HeroGenre>Genre: {genres}</HeroGenre>
          <HeroDescription>{movie.overview}</HeroDescription>
          <Button
            as="a"
            size="md"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}>
            Watch Movie
          </Button>
        </HeroLeft>
        <HeroRight>
          <HeroImage
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.Title}
          />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
