import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles, homeScreenStyles } from "../styles/styles";
import useMovies from "../hooks/useMovies";
import { Text } from "react-native";
import MoviesCarrousel from "../components/home/MoviesCarrousel";

const HomeScreen = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useMovies();

  useMovies();
  return (
    <ScrollView style={homeScreenStyles.container}>
      <Text style={globalStyles.title}>En cartelera</Text>
      <MoviesCarrousel isPrincipalCarrousel movies={nowPlayingMovies} />

      <Text style={globalStyles.title}>Populares</Text>
      <MoviesCarrousel movies={popularMovies} />

      <Text style={globalStyles.title}>Lo más visto</Text>
      <MoviesCarrousel movies={topRatedMovies} />

      <Text style={globalStyles.title}>Próximamente</Text>
      <MoviesCarrousel movies={upcomingMovies} />
    </ScrollView>
  );
};

export default HomeScreen;
