import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ball from "./Ball";

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
          <Ball key={element} backgroundColor={"green"}>{element}</Ball>
        ))}
      </View>

      <View style={styles.container}>
        {listStar?.map((element) => (
          <Ball backgroundColor={"blue"} key={element} >{element}</Ball>
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
