import { useFonts } from "expo-font";

import React from "react";
import {
  TelaContainer,
  Titulo,
  CampoContainer,
  RotuloCampo,
  CampoTexto,
} from "./Styles";
import {
  StyledButton,
  StyledTextButton,
} from "./components/Button/ButtonStyled";

export default function Home() {
  const [fontsLoaded] = useFonts({
    "Forum-Regular": require("./assets/fonts/Forum-Regular.ttf"),
    "SchibstedGrotesk-Regular": require("./assets/fonts/SchibstedGrotesk-Regular.ttf"),
    "Artifika-Regular": require("./assets/fonts/Artifika-Regular.ttf"),
    "Varta-Regular": require("./assets/fonts/Varta-Regular.ttf"),
  });

  return (
    <TelaContainer>
      <Titulo>Suas Informações</Titulo>

      <CampoContainer>
        <RotuloCampo>Nome Completo</RotuloCampo>
        <CampoTexto
          placeholder="Cloud Strife Sutoraifu"
          placeholderTextColor="#888"
        />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>E-mail</RotuloCampo>
        <CampoTexto
          placeholder="cloud.sutoraifu@gmail.com"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Telefone</RotuloCampo>
        <CampoTexto
          placeholder="+55 (XXX) XXX-XXXX"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Data de Nascimento</RotuloCampo>
        <CampoTexto
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
      </CampoContainer>

      <StyledButton>
        <StyledTextButton>Salvar</StyledTextButton>
      </StyledButton>
    </TelaContainer>
  );
}
