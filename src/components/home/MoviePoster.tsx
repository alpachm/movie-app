import React from "react";
import { Image, Pressable } from "react-native";
import { moviePosterStyles } from "../../styles/styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/Navigation";

interface Props {
  movieId: number;
  path: string;
  height?: number;
  width?: number;
}

const MoviePoster = ({ path, height = 320, width = 250, movieId }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("Details", { movieId })}
      style={({ pressed }) => ({
        ...moviePosterStyles.posterPresseable,
        height,
        width,
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <Image style={moviePosterStyles.poster} source={{ uri: path }} />
    </Pressable>
  );
};

export default MoviePoster;
