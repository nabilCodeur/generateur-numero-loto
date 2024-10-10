import React from "react";
import { StyleSheet, View } from "react-native";
import ActionsButtons from "./ActionsButtons";
import MainTitle from "./MainTitle";
import ModalWArning from "./ModalWarning";
import SerieResults from "./result/SerieResults";
import SelectionMainNumber from "./selection/SelectionMainNumber";
import SelectionStarNumber from "./selection/SelectionStarNumber";

const Loto = (): JSX.Element => {
  return (
    <View style={styles.app}>
      <MainTitle />
      <SelectionMainNumber />
      <ModalWArning />
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
