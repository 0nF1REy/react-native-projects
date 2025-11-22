import styled from "styled-components/native";

export const PostBox = styled.View`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
`;

export const TextInputArea = styled.TextInput`
  min-height: 60px;
  font-size: 16px;
  padding: 8px;
`;

export const RowBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const AttachButton = styled.TouchableOpacity`
  padding: 6px 10px;
`;

export const AttachText = styled.Text`
  color: #007bff;
  font-size: 14px;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
