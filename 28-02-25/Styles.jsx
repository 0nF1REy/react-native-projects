import styled from "styled-components/native";

export const Titulo = styled.Text`
  font-family: "Forum-Regular";
  font-size: 50px;
  font-weight: 300;
`;

export const DescNoticia = styled.Text`
  font-family: "Forum-Regular";
  
  font-size: 18px;
  font-weight: 300;
`;

export const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  overflow: auto;
`;

export const Imagem = styled.Image`
  height: 300px;
  width: 300px;
`;

