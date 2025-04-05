  import React from "react";
  import { Container, Input, Button, ButtonText, ResultText, BoldText } from "./styles";

  export default function Screen02() {
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [imc, setImc] = React.useState("");

    function calcularIMC() {
      const pesoValue = parseFloat(peso);
      const alturaValue = parseFloat(altura) / 100;

      if (!pesoValue || !alturaValue) {
        setImc("Dados inválidos");
        return;
      }

      const imcValue = pesoValue / (alturaValue * alturaValue);
      setImc(imcValue.toFixed(2));
    }

    return (
      <Container>
        <Input
          placeholder="Digite seu peso (kg), ex: 70"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <Input
          placeholder="Digite sua altura (cm), ex: 170"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <Button onPress={calcularIMC}>
          <ButtonText>Calcular IMC</ButtonText>
        </Button>
          <ResultText>
            Seu IMC é: <BoldText>{imc}</BoldText>
          </ResultText>
      </Container>
    );
  }
