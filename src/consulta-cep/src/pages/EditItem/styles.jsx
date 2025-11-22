import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background || "#fff"};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text || "#000"};
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border || "#ccc"};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text || "#000"};
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary || "#213a8c"};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.articleBg || "#fff"};
  font-weight: bold;
  font-size: 16px;
`;
