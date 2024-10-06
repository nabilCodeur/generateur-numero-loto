import { ColorValue, StyleSheet, View } from "react-native";
import BallResult from "../BallResult";

const SerieResultModel = ({
  set,
  backgroundColor,
  textColor,
}: {
  set: Set<number>;
  backgroundColor: ColorValue;
  textColor: ColorValue;
}) => {
  return (
    <View style={styles.container}>
      {Array.from(set)
        .sort((a, b) => a - b)
        .map((element) => (
          <BallResult
            key={element}
            backgroundColor={backgroundColor}
            textColor={textColor}
          >
            {element}
          </BallResult>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
});

export default SerieResultModel;
