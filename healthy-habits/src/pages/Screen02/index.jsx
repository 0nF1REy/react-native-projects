import React from "react";
import {
  Button,
  ButtonText,
  ResultText,
  BoldText,
  BotaoVoltarHome,
  TextoBotaoVoltar,
  Imagem,
  ScrollViewContainer,
  ViewContainer,
  TituloBacana,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import InputBacanaComponent from "../../components/Input";
import { useCalcularIMC } from "../../hooks/useCalcularIMC";

export default function Screen02({ navigation }) {
  const { peso, altura, imc, setPeso, setAltura, calcularIMC } =
    useCalcularIMC();

  function abrirTelaHome() {
    navigation.navigate("Home");
  }

  return (
    <ScrollViewContainer>
      <ViewContainer>
        <TituloBacana>Calculadora de IMC</TituloBacana>
        <Imagem source={require("../../../assets/images/bmi-metric.jpg")} />
        {/* COMPONENTE: Input */}
        <InputBacanaComponent
          placeholder="Digite seu peso (kg), ex: 70"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <InputBacanaComponent
          placeholder="Digite sua altura (cm), ex: 170"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <Button onPress={calcularIMC}>
          <ButtonText>Calcular IMC</ButtonText>
          <Icon
            name="activity"
            size={20}
            color="#fff"
            style={{ marginLeft: 8 }}
          />
        </Button>

        <ResultText>
          Seu IMC é: <BoldText>{imc}</BoldText>
        </ResultText>

        {/* Voltar para a tela Home com ícone */}
        <BotaoVoltarHome onPress={abrirTelaHome}>
          <Icon
            name="arrow-left-circle"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
        </BotaoVoltarHome>
      </ViewContainer>
    </ScrollViewContainer>
  );
}
