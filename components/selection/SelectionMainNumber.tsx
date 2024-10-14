import { LOTO_MAX_MAIN, LOTO_MIN_MAIN } from "@/constants/numbers";
import useSeriesLoto from "@/store/useSeriesLoto";
import { gridBalls } from "@/utils/numbers";
import { ColorValue, StyleSheet, View } from "react-native";
import BallSelection from "../BallSelection";

const SelectionMainNumber = () => {
  const { mainSet, addNumberToMainSet } = useSeriesLoto();
  const grid = gridBalls(LOTO_MIN_MAIN, LOTO_MAX_MAIN);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {grid.map((element) => {
          const backgroundColor: ColorValue = mainSet.has(element)
            ? "blue"
            : "white";
          const textColor: ColorValue = mainSet.has(element) ? "white" : "blue";
          return (
            <BallSelection
              backgroundColor={backgroundColor}
              textColor={textColor}
              callback={addNumberToMainSet}
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

export default SelectionMainNumber;
