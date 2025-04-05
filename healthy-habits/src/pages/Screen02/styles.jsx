import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  font-family: "Roboto-Regular";
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  background-color: #3d85c6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
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
  width: 80%;
  background-color: #14ab94;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 40px;  
`;

export const TextoBotaoVoltar = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;  
`;
