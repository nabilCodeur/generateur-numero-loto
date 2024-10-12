import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalWarning = () => {
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
          <Text style={styles.textWelcome}>
            Bienvenue dans l'app qui génère pour vous des numéros à jouer au
            loto.
          </Text>
          <Text>
            Les jeux d'argents sont réservés aux personnes de plus de 18 ans
          </Text>
          <Text>Cette application n'est pas affiliée à la FDJ.</Text>
          <Text style={styles.textGoodLuck}>Bonne chance !</Text>
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
    borderWidth: 2,
  },
  secondContainer: {
    maxHeight: "80%",
    maxWidth: "80%",
    display: "flex",
    rowGap: 10,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 16,
  },
  textWelcome: {
    fontWeight: "700",
    fontSize: 22,
  },
  textGoodLuck: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default ModalWarning;
