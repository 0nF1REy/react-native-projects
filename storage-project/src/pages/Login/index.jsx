import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AvatarContainer,
  FormContainer,
  ImageAvatar,
  LoginView,
  StyledTextComponent,
  SuperiorView,
} from "./styles";
import ButtonComponent from "../../components/Button";
import InputWithIconComponent from "../../components/InputWithIcon";

const Login = ({ placeholder }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  function togglePasswordVisibility() {
    setIcon((prev) => (prev === "eye" ? "eye-off" : "eye"));
    setHidePassword((prev) => !prev);
  }

  function handleLogin() {
    navigation.navigate("Principal");
  }

  return (
    <LoginView>
      <SuperiorView>
        <StyledTextComponent text="Bem-vindo! Faça login na sua conta" />
      </SuperiorView>
      <AvatarContainer>
        <ImageAvatar
          source={require("../../../assets/images/default-avatar.png")}
        />
      </AvatarContainer>

      <FormContainer>
        <InputWithIconComponent
          label="Username"
          placeholder="Type your username..."
          iconName="user"
          value={username}
          onChangeText={setUsername}
        />

        <InputWithIconComponent
          label="Password"
          placeholder={placeholder || "Type your password..."}
          iconName={icon}
          isPassword={true}
          secureTextEntry={hidePassword}
          onToggleVisibility={togglePasswordVisibility}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonComponent onpress={handleLogin} label="Começar" />
        <ButtonComponent label="Entrar com o google" />
      </FormContainer>
    </LoginView>
  );
};

export default Login;
