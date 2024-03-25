import { BASE_URL, PARAMS } from "../config/ApiConfig"
import { IMoviesPosterEntity } from "../entities/movies-entities";
import { NowPlayingMoviesResponse } from "../interfaces/IMovies";
import { posterMoviesToEntity } from "../utils/moviesMappers";

export const nowPlayingService = async (): Promise<IMoviesPosterEntity[]> =>{
    try {
        const result =  await fetch(`${BASE_URL}/now_playing${PARAMS}`)
        const nowPlayingMovies: NowPlayingMoviesResponse  = await result.json();
        return nowPlayingMovies.results.map(posterMoviesToEntity);
        
    } catch (error) {
        throw new Error("Error al obtener las peliculas - now playing" + error)
    }
}