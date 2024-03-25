import { IDetailMovieEntity, IMoviesPosterEntity } from "../entities/movies-entities";
import { DetailMovieResponse, NowPlayingResult } from "../interfaces/IMovies";

export const posterMoviesToEntity = (movie: NowPlayingResult): IMoviesPosterEntity => {
    return {
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        isAdult: movie.adult
    }
}

export const detailMovieToEntity = (movie: DetailMovieResponse): IDetailMovieEntity => {
    return {
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        isAdult: movie.adult,
        description: movie.overview,
        budget: movie.budget,
        genres: movie.genres.map(genre => genre.name),
        production_companies: movie.production_companies.map(prod => prod.name),
    }
}