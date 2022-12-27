import React from "react";
import { View, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import CustomButton from "./CustomButton";

export default function Camera() {
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const CaptureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
      >
        <CustomButton title="Capture" onPressFunction={() => CaptureHandle()} />
      </RNCamera>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
