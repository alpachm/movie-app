import { BASE_URL, PARAMS } from "../config/ApiConfig";
import { ICastEntity } from "../entities/cast-entity";
import { CastResponse } from "../interfaces/ICast";
import { castToEntity } from "../utils/castMapper";

export const actorsMovieService = async (movieId: number): Promise<ICastEntity[]> => {
    try {
        const result = await fetch(`${BASE_URL}/${movieId}/credits${PARAMS}`);
        const cast: CastResponse = await result.json();
        return cast.cast.map(castToEntity)
    } catch (error) {
        throw new Error("Error al obtener los actores")
    }
}