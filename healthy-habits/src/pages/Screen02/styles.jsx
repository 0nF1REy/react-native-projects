import styled from "styled-components/native";

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
  font-family: "Roboto-Regular";
`;

export const ViewContainer = styled.View`
  align-items: center;
  justify-content: center;
`;


export const TituloBacana = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3d85c6;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  background-color: #3d85c6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  margin-right: 8px;
`;

export const ResultText = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const BotaoVoltarHome = styled.TouchableOpacity`
  height: 50px;
  width: 45%;
  background-color: #14ab94;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 70px;
  flex-direction: row;  
`;

export const TextoBotaoVoltar = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px; 
`;

export const Imagem = styled.Image`
  width: 70%;
  height: 200px;
  align-self: center;
  margin-bottom: 30px;
`;
