import styled from "styled-components/native";

export const SuperiorView = styled.View`
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export const TextSuperior = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const LoginView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  justify-content: center;
  padding: 24px;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;

export const ImageAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const FormContainer = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.text};
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
