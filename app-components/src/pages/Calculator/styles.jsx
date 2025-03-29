import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

export const Display = styled.Text`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: right;
  width: 100%;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 35px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: #333;
`;
