import styled from "styled-components/native";

export const TextContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #d1d1d6;
  width: 100%;
  max-width: 350px;
  margin: 15px auto;
`;

export const ViewPrincipal = styled.View`
  background-color: #f4f4f9;
  padding: 20px;
`;

export const TextInputLabel = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #d1d1d6;
  border-radius: 8px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #fff;
`;

export const TextInputField = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: 16px;
  color: #333;
  padding: 0 10px;
`;

export const TextInputLogin = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: 16px;
  color: #333;
  padding: 0 10px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: #f4f4f4;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  padding: 12px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const TextContainerBotao = styled.View`
  background-color: #0056b3;
  width: 100%;
  border-radius: 8px;
`;

export const BotaoEntar = styled.TouchableOpacity`
  background-color: #0056b3;
  border-radius: 8px;
`;

export const TextContainerAvatar = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 25px;
  border: 3px solid #e1c6a9;
`;
