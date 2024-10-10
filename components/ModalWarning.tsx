import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalWArning = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
      animationType="fade"
      onRequestClose={handleClose}
      presentationStyle="overFullScreen"
    >
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <Text style={styles.text}>
            Bienvenue dans l'app qui génère pour vous des numéros à jouer au
            loto.
          </Text>
          <Text>
            Les jeux d'argents sont réservés aux personnes de plus de 18 ans
          </Text>
          <Text>Cette application n'est pas affiliée à la FDJ.</Text>
          <Button title="Fermer" onPress={handleClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  secondContainer: {
    maxHeight: "80%",
    maxWidth: "80%",
    display: "flex",
    rowGap: 10,
  },
  text: {
    fontWeight: "700",
  },
});

export default ModalWArning;
