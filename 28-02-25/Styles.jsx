import styled from "styled-components/native";

export const Titulo = styled.Text`
  font-family: "Forum-Regular";
  font-size: 50px;
  font-weight: 300;
`;

export const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
