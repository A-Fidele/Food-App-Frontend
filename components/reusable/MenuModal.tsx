import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MenuModalProps = {
  handleShowModal: () => void,
  handleNavigateSearch: () => void,
  handleNavigateFavorites: () => void,
  isVisible: boolean,
}
export default function MenuModal({
  handleShowModal,
  handleNavigateSearch,
  handleNavigateFavorites,
  isVisible,
}: MenuModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleShowModal}
      style={styles.menuModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.menuButton}>
          <TouchableOpacity onPress={handleNavigateSearch}>
            <Text style={styles.textButton}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuButton}>
          <TouchableOpacity onPress={handleNavigateFavorites}>
            <Text style={styles.textButton}>My recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  menuModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  menuButton: {
    marginLeft: 15,
    marginTop: 50,
  },
  textButton: {
    fontSize: 18,
  },
});
