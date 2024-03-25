import { BASE_URL, PARAMS } from "../config/ApiConfig"
import { IMoviesPosterEntity } from "../entities/movies-entities"
import { UpcomingMoviesResponse } from "../interfaces/IMovies";
import { posterMoviesToEntity } from "../utils/moviesMappers";

export const upcomingService = async (): Promise<IMoviesPosterEntity[]> => {
    try {
        const result = await fetch(`${BASE_URL}/upcoming${PARAMS}`);
        const upcomingMovies: UpcomingMoviesResponse = await result.json();
        return upcomingMovies.results.map(posterMoviesToEntity)
    } catch (error) {
        throw new Error("Error al obtener las peliculas - upcoming")
    }
}