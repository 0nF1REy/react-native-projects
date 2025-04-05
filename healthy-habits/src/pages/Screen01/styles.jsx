import styled from "styled-components/native";

export const ViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 200px;
  align-self: center;
`;

export const Titulo = styled.Text`
  font-family: "Merriweather_36pt-Regular";
  font-size: 25px;
  font-weight: 400;
  color: #14ab94;
  margin-bottom: 20px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export const Artigo = styled.View`
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const RowButtonIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
