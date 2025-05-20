import styled from "styled-components/native";

export const Item = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #213a8c;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.articleBg};
  flex: 1;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.articleBg};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
