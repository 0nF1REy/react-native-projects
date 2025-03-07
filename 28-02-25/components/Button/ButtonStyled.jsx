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
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

StyledButton.activeOpacity = 0.7;