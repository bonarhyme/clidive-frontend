import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottiewView from "lottie-react-native";

import { variables } from "../data/variables";

const UploadScreen = ({ progress = 0, visible = false, onAnimationFinish }) => {
  return (
    <Modal>
      <View style={styles.container}>
        <LottiewView
          autoPlay
          loop={false}
          // onAnimationFinish={onAnimationFinish}
          source={require("../assets/Animations/done.json")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
