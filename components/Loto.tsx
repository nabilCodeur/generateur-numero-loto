import React from "react";
import { StyleSheet, View } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import ActionsButtons from "./ActionsButtons";
import MainTitle from "./MainTitle";
import ModalWarning from "./ModalWarning";
import SerieResults from "./result/SerieResults";
import SelectionMainNumber from "./selection/SelectionMainNumber";
import SelectionStarNumber from "./selection/SelectionStarNumber";
import TitleStars from "./TitleStars";

const Loto = (): JSX.Element => {

  const adUnidId = __DEV__?TestIds.BANNER:"ca-app-pub-8274771615284496/2514972021"

  return (
    <View style={styles.app}>
      <MainTitle />
      <BannerAd unitId={ adUnidId} size={BannerAdSize.MEDIUM_RECTANGLE} />
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
