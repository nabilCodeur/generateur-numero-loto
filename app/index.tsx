import Loto from "@/components/Loto";
import { StatusBar, StyleSheet } from "react-native";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff"} />
      <View style={styles.containerAfterTopBAr}>
        <Loto />
      </View>
    </SafeAreaView>
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
