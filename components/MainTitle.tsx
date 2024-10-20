import { StyleSheet, Text, View } from "react-native";

const MainTitle = () => {
  return (
    <View>

      <Text style={styles.title}>
        Sélectionner le dé et/ou vos numéros fétiches
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
 
  title: {
    marginVertical: 6,
    marginLeft: 12,
    fontWeight: "bold",
    fontSize:25
  },
});

export default MainTitle;
