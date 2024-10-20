import useSeriesLoto from "@/store/useSeriesLoto";
import { StyleSheet, View } from "react-native";
import SerieResultModel from "./SerieResultModel";

const SerieResults = (): JSX.Element | null => {
  const { mainSet, starSet, showResult } = useSeriesLoto();

  return showResult ? (
    <View style={styles.container}>
      <View style={{display:"flex",flexDirection:"row"}}>
      <SerieResultModel
        backgroundColor={"blue"}
        set={mainSet}
        textColor={"white"}
      />
      <SerieResultModel
        backgroundColor={"red"}
        set={starSet}
        textColor={"white"}
        />
        </View>

    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "60%",
    justifyContent: "center",

    margin: "auto",
    marginVertical: 16,
    // flexGrow: 0,
    // flexShrink: 1,
    gap: 3,
  },
});

export default SerieResults;
