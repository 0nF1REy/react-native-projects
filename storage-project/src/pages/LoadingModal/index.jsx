import React from "react";
import { Modal } from "react-native";
import { Container, Gif } from "./styles";

export default function LoadingModal({ visible }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Container>
        <Gif
          source={require("../../../assets/animations/loading.gif")}
          resizeMode="contain"
        />
      </Container>
    </Modal>
  );
}
