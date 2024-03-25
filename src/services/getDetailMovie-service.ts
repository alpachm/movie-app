import { BASE_URL, PARAMS } from "../config/ApiConfig"
import { IDetailMovieEntity } from "../entities/movies-entities"
import { DetailMovieResponse } from "../interfaces/IMovies";
import { detailMovieToEntity } from "../utils/moviesMappers";

export const detailService = async (movieId: number): Promise<IDetailMovieEntity> => {
    try {
        const result = await fetch(`${BASE_URL}/${movieId}${PARAMS}`);
        const detailMovie:DetailMovieResponse  = await result.json();
        return detailMovieToEntity(detailMovie);
    } catch (error) {
        throw new Error ("Error al obtener la pelicula - detail")
    }
}