import { useEffect, useState } from "react";
import * as Services from "./../services";
import { IDetailMovieEntity } from "../entities/movies-entities";

const useMovie = (movieId: number) => {
  const [detailMovie, setDetailMovie] = useState<IDetailMovieEntity>();

  const initLoad = async () => {
    const detailMovie = await Services.detailService(movieId);
    setDetailMovie(detailMovie);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return { detailMovie };
};

export default useMovie;
