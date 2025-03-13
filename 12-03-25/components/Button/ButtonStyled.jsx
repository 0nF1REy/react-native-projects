import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.primary};
  border-radius: 25px;
  padding: 12px 30px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const StyledTextButton = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
`;

StyledButton.activeOpacity = 0.7;

export const StyledButtonIcon = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  opacity: 0.7;

  &:active {
    opacity: 0.5;
  }
`;
