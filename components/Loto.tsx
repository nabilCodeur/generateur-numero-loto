import useSeriesLoto from "@/app/store/useSeriesLoto";

import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SerieResults from "./result/SerieResults";
import SelectionMainNumber from "./selection/SelectionMainNumber";
import SelectionStarNumber from "./selection/SelectionStarNumber";

const Loto = (): JSX.Element => {
  const { getFullSet, clearAll } = useSeriesLoto();

  return (
    <View style={styles.app}>
      <Text style={styles.mainTitle}>Grille |</Text>
      <Text style={styles.subTitle}>Sélectionnez vos numéros fétiches</Text>
      <SelectionMainNumber />
      <Text style={styles.starText}>{"étoiles".toLocaleUpperCase()}</Text>
      <SelectionStarNumber />

      <View style={styles.containerActionButton}>
        <Pressable onPress={getFullSet} style={styles.pressable}>
          <Image
            style={styles.image}
            source={require("@/assets/images/game-die.png")}
          />
        </Pressable>

        <Pressable onPress={clearAll} style={styles.pressable}>
          <Image
            style={styles.image}
            source={require("@/assets/images/gui-eraser.png")}
          />
        </Pressable>
      </View>

      <SerieResults />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSerie: {
    display: "flex",
    flexDirection: "row",
  },
  starText: {
    fontWeight: "800",
    fontSize: 32,
    color: "blue",
    textAlign: "center",
    marginTop: 24,
  },
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 8,
  },
  containerActionButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 64,
  },
  pressable: {
    width: "40%",
    height: 63,
    backgroundColor: "green",
    margin: "auto",
    textAlign: "center",
    paddingVertical: 4,
    borderRadius: 10,
  },
  textButton: {
    textAlign: "center",
  },
  mainTitle: {
    fontWeight: "600",
    fontSize: 20,
    backgroundColor: "blue",
    padding: 6,
    width: 144,
    color: "white",
    borderColor: "blue",
    borderRadius: 10,
  },
  subTitle: {
    marginTop: 6,
  },
  image: {
    width: 32,
    height: 32,
    textAlign: "center",
    margin: "auto",
  },
});

export default Loto;
