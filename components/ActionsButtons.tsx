import useSeriesLoto from "@/store/useSeriesLoto";
import { Image, Pressable, StyleSheet, View } from "react-native";

const ActionsButtons = () => {
  const { getFullSet, clearAll } = useSeriesLoto();
  return (
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
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 32,
    height: 32,
    textAlign: "center",
    margin: "auto",
  },
});

export default ActionsButtons;
