import React from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import { Container, Input, Button, ButtonText, ResultText, BoldText } from "./styles";

export default function Screen02() {
  return (
    <Container>
      <Input
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
      />
      <Input
        placeholder="Digite sua altura (cm)"
        keyboardType="numeric" value={num1}
      />
      <Button>
        <ButtonText>Calcular IMC</ButtonText>
      </Button>
      <ResultText>
        Seu IMC é: <BoldText>—</BoldText>
      </ResultText>
    </Container>
  );
}
