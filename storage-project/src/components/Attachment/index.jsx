import React from "react";
import { AnexagemButton, AnexagemText } from "./styles";

const AnexagemComponent = ({ label, onPress }) => {
  return (
    <AnexagemButton onPress={onPress}>
      <AnexagemText>{label}</AnexagemText>
    </AnexagemButton>
  );
};

export default AnexagemComponent;
