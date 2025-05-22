import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f7f7f7;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const TaskList = styled.FlatList``;

export const TaskItem = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
`;

export const TaskText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TaskStatusConcluido = styled.Text`
  background-color: #367055;
  border-radius: 3px;
  color: #fff;
`;

export const TaskStatusPendente = styled.Text`
  background-color: #8c2a2a;
  border-radius: 3px;
  color: #fff;
`;

export const TaskStatus = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
`;

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary || "#007bff"};
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 8px;
`;

export const IconContainer = styled.View`
  margin-left: 8px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;
