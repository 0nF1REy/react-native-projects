import React from "react";
import { ButtonText, ButtonEnter } from "./styles";

const ButtonComponent = ({ label, onpress }) => {
  return (
    <ButtonEnter onPress={onpress}>
      <ButtonText>{label}</ButtonText>
    </ButtonEnter>
  );
};

export default ButtonComponent;
