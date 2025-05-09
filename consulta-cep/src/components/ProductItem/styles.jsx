import styled from "styled-components/native";

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-color: black;
  border-radius: 8px;
  margin-bottom: 8px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 25%;
  flex: 1;
  flex-direction: row;
`;

export const ViewContainer = styled.View`
  padding-top: 16px;
  padding-bottom: 16px;
`;