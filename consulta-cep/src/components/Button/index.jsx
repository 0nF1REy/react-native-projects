import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

const Button = ({ onPress, children }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
