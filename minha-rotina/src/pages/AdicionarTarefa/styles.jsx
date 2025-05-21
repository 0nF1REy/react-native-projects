import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f7f7f7;
`;

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

export const SuccessText = styled.Text`
  color: green;
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary || "#007BFF"};
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 8px;
`;

export const IconContainer = styled.View`
  margin-left: 8px;
`;
