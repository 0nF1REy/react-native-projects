import React from "react";
import {
  Container,
  Input,
  Button,
  ButtonText,
  ResultText,
  BoldText,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";

export default function Screen02() {
  return (
    <Container>
      <Input placeholder="Digite seu peso (kg)" keyboardType="numeric" />
      <Input placeholder="Digite sua altura (cm)" keyboardType="numeric" />

      <Button>
        <ButtonText>Calcular IMC</ButtonText>
        <Icon name="activity" size={20} color="#fff" style={{ marginLeft: 8 }} />
      </Button>

      <ResultText>
        Seu IMC é: <BoldText>—</BoldText>
      </ResultText>
    </Container>
  );
}
