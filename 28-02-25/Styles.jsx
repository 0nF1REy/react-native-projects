import styled from "styled-components/native";

export const Titulo = styled.Text`
  font-family: "Forum-Regular";
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const DescNoticia = styled.Text`
  font-family: "Forum-Regular";
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
  color: ${(props) => props.theme.text};
  line-height: 24px;
  margin-bottom: 20px;
`;

export const ViewContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
  overflow: auto;
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ArticleContainer = styled.View`
  background-color: ${(props) => props.theme.articleBg};
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
`;
