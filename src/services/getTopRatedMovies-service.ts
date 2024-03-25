import { BASE_URL, PARAMS } from "../config/ApiConfig";
import { IMoviesPosterEntity } from "../entities/movies-entities";
import { TopRatedMoviesResponse } from "../interfaces/IMovies";
import { posterMoviesToEntity } from "../utils/moviesMappers";

export const topRatedService = async (): Promise<IMoviesPosterEntity[]> => {
  try {
    const result = await fetch(`${BASE_URL}/top_rated${PARAMS}`);
    const topRatedMovies: TopRatedMoviesResponse = await result.json();
    return topRatedMovies.results.map(posterMoviesToEntity);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - TopRated");
  }
};
