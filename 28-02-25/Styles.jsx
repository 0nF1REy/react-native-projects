import styled from "styled-components/native";

export const Titulo = styled.Text`
  font-family: "Merriweather_36pt-Regular";
  font-size: 25px;
  font-weight: 400;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export const DescNoticia = styled.Text`
  font-family: "Lora-Regular";
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
  color: ${(props) => props.theme.text};
  line-height: 24px;
  margin-bottom: 20px;
`;

export const ViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
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
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

export const Strong = styled.Text`
  color: ${(props) => props.theme.primary};
  font-weight: 800;
`;

export const AuthorInfo = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: ${(props) => props.theme.textSecondary || '#666'};
  margin-bottom: 5px;
  text-align: right;
`;