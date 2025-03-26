import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  TextContainer,
  TextInputLabel,
  InputWrapper,
  TextInputField,
  IconButton,
} from "./styles";

const TextInputWithIcon = ({ placeholder }) => {

  const [icone, setIcone] = useState('eye-off');
  const [text, setText] = useState('true');
  
  function openClose() {
    if(icone == "eye") {
      setIcone("eye-off");
      setText(true);
    } else {
      setIcone("eye");
      setText(false);
    }
  }
  
  return (
    <TextContainer>
      <TextInputLabel>Senha</TextInputLabel>
      <InputWrapper>
        <TextInputField placeholder={placeholder} secureTextEntry={text}  />
        <IconButton onPress={openClose}>
          <Icon name={icone} size={24} color="#888" />
        </IconButton>
      </InputWrapper>
    </TextContainer>
  );
};


export default TextInputWithIcon;