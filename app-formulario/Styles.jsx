import styled from "styled-components/native";

export const TelaContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 1px;
`;

export const CampoContainer = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const RotuloCampo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

export const CampoTexto = styled.TextInput`
  height: 50px;
  border-color: #ddd;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  font-size: 16px;
  background-color: #fff;
  color: ${(props) => props.theme.text};
  margin-top: 5px;
`;

export const BotaoSalvar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.primary || "#4caf50"};
  border-radius: 25px;
  padding: 15px 40px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export const TextoBotao = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

BotaoSalvar.activeOpacity = 0.7;
