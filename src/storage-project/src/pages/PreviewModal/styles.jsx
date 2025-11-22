import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  align-items: center;
`;

export const Preview = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  border-radius: 8px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
