import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.articleBg};
  font-weight: bold;
`;
