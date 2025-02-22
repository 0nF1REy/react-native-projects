import styled from "styled-components/native";

export const TelaContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fafafa;
`;

export const Titulo = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const CampoContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const RotuloCampo = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #555;
  margin-bottom: 5px;
`;

export const CampoTexto = styled.TextInput`
  height: 45px;
  border-color: #ddd;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
`;

export const BotaoSalvar = styled.TouchableOpacity`
  background-color: #4caf50;
  border-radius: 8px;
  padding: 12px 30px;
  margin-top: 20px;
`;

export const TextoBotao = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
