import { LOTO_MAX_STAR, LOTO_MIN_STAR } from "@/constants/numbers";
import useSeriesLoto from "@/store/useSeriesLoto";
import { gridBalls } from "@/utils/numbers";
import { ColorValue, StyleSheet, View } from "react-native";
import BallSelection from "../BallSelection";

const SelectionStarNumber = () => {
  const { starSet, addNumberToStarSet } = useSeriesLoto();
  const grid = gridBalls(LOTO_MIN_STAR, LOTO_MAX_STAR);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {grid.map((element) => {
          const backgroundColor: ColorValue = starSet.has(element)
            ? "red"
            : "white";
          const textColor: ColorValue = starSet.has(element) ? "white" : "red";
          return (
            <BallSelection
              backgroundColor={backgroundColor}
              textColor={textColor}
              callback={addNumberToStarSet}
              key={element}
            >
              {element}
            </BallSelection>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    margin: "auto",

    justifyContent: "center",
    marginVertical: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 6,
    flexWrap: "wrap",
  },
});

export default SelectionStarNumber;
