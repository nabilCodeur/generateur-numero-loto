import React from "react";
import { StyleSheet, View } from "react-native";
import ActionsButtons from "./ActionsButtons";
import MainTitle from "./MainTitle";
import ModalWarning from "./ModalWarning";
import SerieResults from "./result/SerieResults";
import SelectionMainNumber from "./selection/SelectionMainNumber";
import SelectionStarNumber from "./selection/SelectionStarNumber";
import TitleStars from "./TitleStars";

const Loto = (): JSX.Element => {
  return (
    <View style={styles.app}>
      <MainTitle />
      <SelectionMainNumber />
      <TitleStars />
      <SelectionStarNumber />
      <ActionsButtons />
      <SerieResults />
      <ModalWarning />
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
