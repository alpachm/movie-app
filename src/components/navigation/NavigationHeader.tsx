import React from "react";
import { Text, View } from "react-native";
import { navigationStyles } from "../../styles/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  backButton?: boolean;
}

const NavigationHeader = ({ title, backButton }: Props) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{ ...navigationStyles.header, marginTop: top }}>
      {backButton && (
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          style={navigationStyles.icon}
          name="keyboard-backspace"
          size={24}
        />
      )}
      <Text style={navigationStyles.text}>{title}</Text>
    </View>
  );
};

export default NavigationHeader;
