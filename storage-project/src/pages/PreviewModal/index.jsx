import React, { useState } from "react";
import { Modal } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Container, Box, Preview, Button, ButtonText } from "./styles";

export default function PreviewModal({ visible, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Container>
        <Box>
          <Preview
            source={
              selectedImage
                ? selectedImage
                : require("../../../assets/images/default-image.jpg")
            }
            resizeMode="contain"
          />

          <Button onPress={pickImage}>
            <ButtonText>Escolher Imagem</ButtonText>
          </Button>

          <Button onPress={onClose}>
            <ButtonText>Voltar</ButtonText>
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
