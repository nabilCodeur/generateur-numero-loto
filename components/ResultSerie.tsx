import React from "react";
import { StyleSheet, View } from "react-native";
import BallSelection from "./BallSelection";

const ResultSerie = ({
  listMain,
  listStar,
}: {
  listMain?: number[];
  listStar?: number[];
}) => {
  return (
    <View style={styles.firstContainer}>
      <View style={styles.container}>
        {listMain?.map((element) => (
          <BallSelection key={element} backgroundColor={"green"}>{element}</BallSelection>
        ))}
      </View>

      <View style={styles.container}>
        {listStar?.map((element) => (
          <BallSelection backgroundColor={"blue"} key={element} >{element}</BallSelection>
        ))}
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
firstContainer:{
display:"flex",
flexDirection:"row",
gap:6,
marginVertical:5
},
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",

    gap: 6,
  },
 
});

export default ResultSerie;
