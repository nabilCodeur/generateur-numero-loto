import Loto from "@/components/Loto";
import { StatusBar, StyleSheet } from "react-native";

import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff"} />
      {/* 
        <Text style={{ color: "red" }}>Résultats euromillions</Text>

        <GridComponent min={LOTO_MIN_MAIN} max={LOTO_MAX_MAIN} />
        <Pressable style={styles.button} onPress={() => console.log("press")}>
          <Text style={styles.textButton}>
            {"Réinitialiser Euromillions 323".toUpperCase()}
          </Text>
        </Pressable>
        {/* <ResultSerie listMain={mainNumbersEuromillions} listStar={starNumberEuromillions}></ResultSerie> 


     */}
      <View style={styles.containerAfterTopBAr}>
        <Loto />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  containerAfterTopBAr: {
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    width: "50%",
    alignItems: "center",

    backgroundColor: "blue",
    color: "white",
  },
  textButton: {
    color: "white",
  },
});
