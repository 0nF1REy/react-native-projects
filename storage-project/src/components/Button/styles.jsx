import styled from "styled-components/native";

export const ButtonEnter = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px;
  margin-top: 24px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.articleBg};
  font-size: 16px;
  font-weight: bold;
`;
