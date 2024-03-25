import React from "react";
import { IMoviesPosterEntity } from "../../entities/movies-entities";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import MoviePoster from "./MoviePoster";
import { moviesCarrouselStyles } from "../../styles/styles";

interface Props {
  movies: IMoviesPosterEntity[];
  isPrincipalCarrousel?: boolean;
}

const MoviesCarrousel = ({ movies, isPrincipalCarrousel }: Props) => {
  const posterHeight = isPrincipalCarrousel ? 350 : 180;
  const posterWidth = isPrincipalCarrousel ? 250 : 120;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={moviesCarrouselStyles.container}
    >
      {movies.map((movie) => (
        <MoviePoster
          movieId={movie.id}
          height={posterHeight}
          width={posterWidth}
          path={movie.poster}
          key={movie.id}
        />
      ))}
    </ScrollView>
  );
};

export default MoviesCarrousel;
