import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';  
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

const LoginBacana = ({ placeholder }) => {
  const [icone, setIcone] = useState('eye-off');
  const [text, setText] = useState(true);
  
  const navigation = useNavigation(); 

  function openClose() {
    if (icone == "eye") {
      setIcone("eye-off");
      setText(true);
    } else {
      setIcone("eye");
      setText(false);
    }
  }

  function handleLogin() {
    navigation.navigate('Calculator');
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
          <IconButton>
            <Icon name="user" size={24} color="#888" />
          </IconButton>
        </InputWrapper>
      </TextContainer>

      <TextContainer>
        <TextInputLabel>Senha</TextInputLabel>
        <InputWrapper>
          <TextInputField 
            placeholder={placeholder || "Digite sua senha aqui..."} 
            secureTextEntry={text} 
          />
          <IconButton onPress={openClose}>
            <Icon name={icone} size={24} color="#888" />
          </IconButton>
        </InputWrapper>
      </TextContainer>

      <TextContainerBotao>
        <BotaoEntar onPress={handleLogin}>  
          <TextoBotao>
            Entrar
          </TextoBotao>
        </BotaoEntar>
      </TextContainerBotao>
    </ViewPrincipal>
  );
};

export default LoginBacana;
