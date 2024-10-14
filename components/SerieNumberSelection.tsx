import { gridBalls } from "@/utils/numbers";
import { ColorValue, StyleSheet, View } from "react-native";
import BallSelection from "./BallSelection";

const SerieNumberSelection = ({
  min,
  max,
  bgColor = { selected: "blue", unselected: "white" },
  callback,
  currentSet,
  textColor,
}: {
  min: number;
  max: number;
  bgColor: { selected: ColorValue; unselected: ColorValue };
  callback: (elementSelected: number) => void;
  currentSet: Set<number>;
  textColor: { selected: ColorValue; unselected: ColorValue };
}) => {
  const list = gridBalls(min, max);

  return (
    <View style={styles.container}>
      {list.map((element) => {
        const backgroundColor = currentSet.has(element)
          ? bgColor.selected
          : bgColor.unselected;
        const textColo2 = currentSet.has(element)
          ? textColor.selected
          : textColor.unselected;
        return (
          <BallSelection
            backgroundColor={backgroundColor}
            callback={callback}
            key={element}
            textColor={textColo2}
          >
            {element}
          </BallSelection>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default SerieNumberSelection;
