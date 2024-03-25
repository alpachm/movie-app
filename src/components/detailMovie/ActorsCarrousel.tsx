import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import useActors from "../../hooks/useActors";
import { Image, Text, View } from "react-native";
import { actorsCarrouselStyles } from "../../styles/styles";

interface Props {
  movieId: number;
}

const ActorsCarrousel = ({ movieId }: Props) => {
  const { actors } = useActors(movieId);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {actors?.map((actor) => (
        <Image
          key={actor.id}
          style={actorsCarrouselStyles.image}
          source={{ uri: actor.poster }}
        />
      ))}
    </ScrollView>
  );
};

export default ActorsCarrousel;
