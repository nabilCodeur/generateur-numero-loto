import React from "react";
import { StyleSheet, View } from "react-native";
import ActionsButtons from "./ActionsButtons";
import MainTitle from "./MainTitle";
import SerieResults from "./result/SerieResults";
import SelectionMainNumber from "./selection/SelectionMainNumber";
import SelectionStarNumber from "./selection/SelectionStarNumber";

const Loto = (): JSX.Element => {
  return (
    <View style={styles.app}>
      <MainTitle />
      <SelectionMainNumber />
      <SelectionStarNumber />
      <ActionsButtons />
      <SerieResults />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default Loto;
