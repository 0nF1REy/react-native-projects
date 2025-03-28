import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  TextContainer,
  TextInputLabel,
  InputWrapper,
  TextInputField,
  IconButton,
  TextInputLogin,
  ViewPrincipal,
  BotaoLargo,
  TextoBotao,
  TextContainerBotao,
  BotaoEntar,
  TextContainerAvatar,
  Imagem,
} from "./styles";



const TextInputWithIcon = ({ placeholder }) => {

  const [icone, setIcone] = useState('eye-off');
  const [text, setText] = useState('true');

  function openClose() {
    if (icone == "eye") {
      setIcone("eye-off");
      setText(true);
    } else {
      setIcone("eye");
      setText(false);
    }
  }

  return (
    <ViewPrincipal>

      <TextContainerAvatar>
         <Imagem source={require("../../../assets/images/hoje.png")} />
      </TextContainerAvatar>

      <TextContainer>
        <TextInputLabel>Login</TextInputLabel>
        <InputWrapper>
          <TextInputLogin placeholder="Digite seu usuário aqui..." />
          <IconButton >
            <Icon name="user" size={24} color="#888" />
          </IconButton>
        </InputWrapper>
      </TextContainer>

      <TextContainer>
        <TextInputLabel>Senha</TextInputLabel>
        <InputWrapper>
          <TextInputField placeholder={placeholder} secureTextEntry={text} />
          <IconButton onPress={openClose}>
            <Icon name={icone} size={24} color="#888" />
          </IconButton>
        </InputWrapper>
      </TextContainer>

      <TextContainerBotao>
        <BotaoEntar>
          <TextoBotao>
            Entrar
          </TextoBotao>
        </BotaoEntar>
      </TextContainerBotao>
    </ViewPrincipal>
  );
};


export default TextInputWithIcon;