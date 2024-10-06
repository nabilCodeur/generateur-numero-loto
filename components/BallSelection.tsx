import React from "react";
import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";

const BallSelection = ({
  children,
  backgroundColor = "green",
  callback,
  textColor,
}: {
  children: number;
  backgroundColor: ColorValue;
  callback?: (ballNumber: number) => void;
  textColor: ColorValue;
}) => {
  return (
    <View>
      <Pressable
        style={{ ...styles.ball, backgroundColor }}
        onPress={() => callback && callback(children)}
      >
        <Text style={{ ...styles.text, color: textColor }}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ball: {
    backgroundColor: "green",
    shadowRadius: 2,
    width: 42,
    height: 42,

    margin: "auto",
    borderRadius: 4,

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

export default BallSelection;
