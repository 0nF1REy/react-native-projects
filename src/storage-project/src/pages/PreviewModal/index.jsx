import React, { useState } from "react";
import { Modal } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Container, Box, Preview, Button, ButtonText } from "./styles";

export default function PreviewModal({ visible, onClose }) {

  const [image, setImage] = useState();

  async function chooseImage() {
    const rest = await
    ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1
      }
    );
    if(!rest.canceled) {
      setImage(rest.assets[0]);
    }
  }

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Container>
        <Box>
          { image ? (<Preview
            source={
              image
            }
            resizeMode="contain"
          />):(<Preview
            source={
                require("../../../assets/images/default-image.jpg")
            }
            resizeMode="contain"
          />

          )}

          <Button onPress={chooseImage}>
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
