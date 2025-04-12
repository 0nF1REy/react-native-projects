import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";

export const InputWrapper = styled(View)`
  margin-bottom: 15px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled(TextInput)`
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
`;
