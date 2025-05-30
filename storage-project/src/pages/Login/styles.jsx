import styled from "styled-components/native";
import TextComponent from "../../components/Text";

export const SuperiorView = styled.View`
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

// Estilização de um componente
export const StyledTextComponent = styled(TextComponent)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
