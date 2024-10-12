import { StyleSheet, Text } from "react-native";

const TitleStars = (): JSX.Element => {
  return <Text style={styles.text}>Numéro étoile</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "red",
    marginLeft: 17,
    fontSize: 22,
    marginVertical: 5,
  },
});

export default TitleStars;
