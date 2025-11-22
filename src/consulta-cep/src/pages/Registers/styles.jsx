import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg || "#ccc"};
  padding: 16px;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text || "#000"};
`;
