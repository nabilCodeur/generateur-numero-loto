import { StyleSheet, Text, View } from "react-native";

const MainTitle = () => {
  return (
    <View>
      <Text style={styles.mainTitle}>Grille 2</Text>
      <Text style={styles.subTitle}>
        Sélectionner le dé et/ou vos numéros fétiches
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: "600",
    fontSize: 20,
    backgroundColor: "blue",
    padding: 6,
    width: 144,
    color: "white",
    borderColor: "blue",
    borderRadius: 10,
  },
  subTitle: {
    marginVertical: 6,
  },
});

export default MainTitle;
