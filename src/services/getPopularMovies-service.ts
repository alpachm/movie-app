import { BASE_URL, PARAMS } from "../config/ApiConfig";
import { IMoviesPosterEntity } from "../entities/movies-entities";
import { PopularMoviesResponse } from "../interfaces/IMovies";
import { posterMoviesToEntity } from "../utils/moviesMappers";

export const popuparService = async (): Promise<IMoviesPosterEntity[]> => { 
    try {
        const result = await fetch(`${BASE_URL}/popular${PARAMS}`);
        const popularMovies: PopularMoviesResponse = await result.json();
        return popularMovies.results.map(posterMoviesToEntity)
    } catch (error) {
        throw new Error ("Error al obtener las pelicuas - Popular")
    }
}