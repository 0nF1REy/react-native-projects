import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";

export const InputWrapper = styled(View)`
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
`;

export const Input = styled(TextInput)`
  padding: 12px;
  border-radius: 8px;
  border-width: 1px;
  font-size: 16px;
  color: #333;
`;
