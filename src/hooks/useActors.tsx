import React, { useEffect, useState } from "react";
import * as Services from "./../services";
import { ICastEntity } from "../entities/cast-entity";

const useActors = (movieId: number) => {
  const [actors, setActors] = useState<ICastEntity[]>([]);

  const initLoad = async () => {
    const actors = await Services.actorsMovieService(movieId);
    setActors(actors);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return { actors };
};

export default useActors;
