import { StyleSheet } from "react-native";

const colors = {
  bgColor: "#1E1D1D",
  headerBgColor: "#2F2F2F",
  textColor: "#fff",
  textLightColor: "#D5D5D5",
};

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.textColor
    },
    lightText: {
      color: colors.textLightColor,
      fontSize: 16,
      fontWeight: '100'
    },
    text: {
      color: colors.textColor,
      fontSize: 20,
      fontWeight: '300',
      marginVertical: 20,
      textAlign: 'justify'
    }
});

export const navigationStyles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: colors.headerBgColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    color: colors.textColor,
    position: "absolute",
    left: 20,
    bottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
  },
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
});

export const moviesCarrouselStyles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
});

export const moviePosterStyles = StyleSheet.create({
    posterPresseable: {
        marginHorizontal: 5,
        borderRadius: 10
    },
    poster: {
      width: "100%",
      height: "100%",
      borderRadius: 10
    }
})

export const detailsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
  },
  poster: {
    width: "100%",
    height: 500
  },
  contentContainer: {
    padding: 10
  }
})

export const actorsCarrouselStyles = StyleSheet.create({
  image: {
    height: 120,
    width: 80,
    borderRadius: 5,
    marginHorizontal: 2
  }
})
