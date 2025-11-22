import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import {
  AvatarContainer,
  ButtonEnter,
  ButtonText,
  FormContainer,
  IconButton,
  ImageAvatar,
  InputField,
  InputPassword,
  InputWrapper,
  LoginView,
  Label,
} from "./styles";

const Login = ({ placeholder }) => {
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  function togglePasswordVisibility() {
    setIcon((prev) => (prev === "eye" ? "eye-off" : "eye"));
    setHidePassword((prev) => !prev);
  }

  function handleLogin() {
    navigation.navigate("MinhaAPI");
  }

  return (
    <LoginView>
      <AvatarContainer>
        <ImageAvatar source={require("../../../assets/images/kagura.png")} />
      </AvatarContainer>

      <FormContainer>
        <Label>Username</Label>
        <InputWrapper>
          <InputField placeholder="Type your username..." />
          <IconButton>
            <Icon name="user" size={24} color="#888" />
          </IconButton>
        </InputWrapper>

        <Label>Password</Label>
        <InputWrapper>
          <InputPassword
            placeholder={placeholder || "Type your password..."}
            secureTextEntry={hidePassword}
          />
          <IconButton onPress={togglePasswordVisibility}>
            <Icon name={icon} size={24} color="#888" />
          </IconButton>
        </InputWrapper>

        <ButtonEnter onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </ButtonEnter>
      </FormContainer>
    </LoginView>
  );
};

export default Login;
