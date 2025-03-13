import styled from "styled-components/native";

export const ViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding: 20px;
`;

export const TextoBacana = styled.Text`
  font-family: "Lora-Regular";
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
  color: ${(props) => props.theme.text};
  line-height: 24px;
  margin-bottom: 20px;
`;