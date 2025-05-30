import styled from "styled-components/native";

export const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 8px 0;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 16px 4px 16px;
  color: #333;
`;

export const FooterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px 12px 16px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: #666;
  flex: 1;
`;

export const HeartIcon = styled.TouchableOpacity`
  margin-left: 8px;
`;
