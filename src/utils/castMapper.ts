import { ICastEntity } from "../entities/cast-entity";
import { Cast } from "../interfaces/ICast";

export const castToEntity = (actor: Cast): ICastEntity => {
    return {
        id: actor.id,
        name: actor.name,
        poster: actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkoyUQaux4PEUmEPGc7PodeN8XbgC4aOBsug&usqp=CAU",
    }
}