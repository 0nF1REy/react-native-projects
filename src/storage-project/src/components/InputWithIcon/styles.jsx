import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const InputField = styled.TextInput`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InputPassword = styled(InputField)``;

export const IconButton = styled.TouchableOpacity`
  padding: 4px;
`;

