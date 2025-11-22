import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.primary || "#4caf50"};
  border-radius: 25px;
  padding: 15px 40px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export const StyledTextButton = styled.Text`
  font-family: "Artifika-Regular";
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

StyledButton.activeOpacity = 0.7;
