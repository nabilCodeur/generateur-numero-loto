import React from "react";
import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";

const BallResult = ({
  children,
  textColor = "white",
  backgroundColor = "blue",
}: {
  children: number;
  textColor: ColorValue;
  backgroundColor: ColorValue;
}) => {
  return (
    <View>
      <Pressable style={{ ...styles.ball, backgroundColor }}>
        <Text style={{ ...styles.text, color: textColor }}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ball: {
    backgroundColor: "white",
    shadowRadius: 2,

    margin: "auto",
    borderRadius: 48,
    width: 48,
    height: 48,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
  },
  text: {
    fontWeight: 600,
  },
});

export default BallResult;
