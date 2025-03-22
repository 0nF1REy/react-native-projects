import React from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  TextContainer,
  TextInputLabel,
  InputWrapper,
  TextInputField,
  IconButton,
} from "./styles";

const TextInputWithIcon = ({ placeholder }) => {
  return (
    <TextContainer>
      <TextInputLabel>Senha</TextInputLabel>
      <InputWrapper>
        <TextInputField placeholder={placeholder} secureTextEntry={false} />
        <IconButton>
          <Icon name="eye" size={20} color="#888" />
        </IconButton>
      </InputWrapper>
    </TextContainer>
  );
};

export default TextInputWithIcon;
