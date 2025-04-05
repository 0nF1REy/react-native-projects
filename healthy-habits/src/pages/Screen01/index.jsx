import React, { useState } from "react";
import { Artigo, Imagem, Titulo, ViewContainer, RowButtonIcon } from "./styles";
import { View } from "react-native";
import ButtonNext from "../../components/ButtonNext";
import Icon from "react-native-vector-icons/Feather";
import TextoInformativo from "../../components/TextoInformativo";

export default function Screen01({ navigation }) {
  function abrirCalculadoraImc() {
    navigation.navigate("Screen02");
  }

  const [iconeBacanaFlecha] = useState("arrow-right-circle");

  return (
    <ViewContainer>
      <View>
        <Artigo>
          <Titulo>
            <Imagem
              source={require("../../../assets/images/bmi-metric.jpg")}
            />
            O que são alimentos termogênicos e como eles podem te ajudar a
            emagrecer
          </Titulo>

          {/* COMPONENTE: Conteúdo do artigo */}
          <TextoInformativo />
        </Artigo>
        <RowButtonIcon>

          {/* COMPONENTE: Botão para ir ao cálculo do IMC */}
          <ButtonNext
            onPress={abrirCalculadoraImc}
            title="Calcular IMC"
            icon={<Icon name={iconeBacanaFlecha} size={20} color="#fff" />}
          />
        </RowButtonIcon>
      </View>
    </ViewContainer>
  );
}
