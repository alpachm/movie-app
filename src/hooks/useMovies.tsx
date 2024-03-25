import { useEffect, useState } from "react";
import { IMoviesPosterEntity } from "../entities/movies-entities";
import * as Services from "./../services";

const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    IMoviesPosterEntity[]
  >([]);
  const [popularMovies, setPopularMovies] = useState<IMoviesPosterEntity[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<IMoviesPosterEntity[]>(
    []
  );
  const [upcomingMovies, setUpcomingMovies] = useState<IMoviesPosterEntity[]>(
    []
  );

  const initLoad = async () => {
    const nowPlayingMoviesPromise = Services.nowPlayingService();
    const popularMoviesPromise = Services.popuparService();
    const topRatedMoviesPromise = Services.topRatedService();
    const upcomingMoviesPromise = Services.upcomingService();

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingMoviesPromise,
        popularMoviesPromise,
        topRatedMoviesPromise,
        upcomingMoviesPromise,
      ]);

    setNowPlayingMovies(nowPlayingMovies);
    setPopularMovies(popularMovies);
    setTopRatedMovies(topRatedMovies);
    setUpcomingMovies(upcomingMovies);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies };
};

export default useMovies;
