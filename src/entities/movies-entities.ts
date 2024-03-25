export interface IMoviesPosterEntity {
    id: number;
    title: string;
    original_title: string;
    poster: string;
    isAdult: boolean;
}

export interface IDetailMovieEntity extends IMoviesPosterEntity {
    description: string;
    genres: string[];
    budget: number;
    production_companies: string[];
}   