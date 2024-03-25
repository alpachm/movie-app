import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { detailsScreenStyles, globalStyles } from "../styles/styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigation";
import useMovie from "../hooks/useMovie";
import ActorsCarrousel from "../components/detailMovie/ActorsCarrousel";

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { detailMovie } = useMovie(movieId);

  return (
    <ScrollView style={detailsScreenStyles.container}>
      <Image
        style={detailsScreenStyles.poster}
        source={{ uri: detailMovie?.poster }}
      />
      <View style={detailsScreenStyles.contentContainer}>
        <Text style={globalStyles.title}>{detailMovie?.title}</Text>

        <Text style={globalStyles.lightText}>
          {detailMovie?.genres.join(", ")}
        </Text>

        <Text style={globalStyles.lightText}>
          {detailMovie?.budget.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>

        <Text style={globalStyles.lightText}>
          {detailMovie?.production_companies.join(", ")}
        </Text>

        <Text style={globalStyles.text}>{detailMovie?.description}</Text>

        <Text style={{ ...globalStyles.title, marginBottom: 10 }}>Reparto</Text>
        <ActorsCarrousel movieId={movieId} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
