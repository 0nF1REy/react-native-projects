import styled from 'styled-components/native';

export const ConteudoTextual = styled.Text`
  font-family: "Lora-Regular";
  font-size: 16px;
  padding: 20px;
  font-weight: 300;
  text-align: justify;
  color: ${(props) => props.theme.text};
  line-height: 24px;
`;

export const Destaque = styled.Text`
  color: ${(props) => props.theme.primary};
  font-weight: 800;
`;

export const LinhaQuebrada = styled.Text`
  display: block;
  margin-bottom: 15px;
  white-space: pre-line;
`;
