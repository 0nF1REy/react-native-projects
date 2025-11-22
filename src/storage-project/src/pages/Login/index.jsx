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
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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

  async function criarUsuario() {
    let user;
    user = await createUserWithEmailAndPassword(
      auth,
      'alanryan619@email.com',
      '12345a'
    );
    console.log(user)
  }

  async function login() {
    let user = await signInWithEmailAndPassword(auth, username, password);
    if (user.user) {
      navigation.navigate("Principal", { username });
    }
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
          label="Email"
          placeholder="Forneça um email..."
          iconName="user"
          value={username}
          onChangeText={setUsername}
        />

        <InputWithIconComponent
          label="Senha"
          placeholder={placeholder || "Forneça uma senha..."}
          iconName={icon}
          isPassword={true}
          secureTextEntry={hidePassword}
          onToggleVisibility={togglePasswordVisibility}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonComponent onpress={login} label="Entrar" />
        <ButtonComponent label="Entrar com o google" />
        <ButtonComponent onpress={criarUsuario} label="Realizar cadastro" />
      </FormContainer>
    </LoginView>
  );
};

export default Login;
