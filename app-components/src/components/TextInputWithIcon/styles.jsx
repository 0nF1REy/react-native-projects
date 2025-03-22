import styled from "styled-components/native";

export const TextContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 350px;
  margin: 10px auto;
`;

export const TextInputLabel = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #fff;
`;

export const TextInputField = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: 16px;
  color: #333;
  padding: 0 8px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
