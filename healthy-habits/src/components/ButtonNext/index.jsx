import React from "react";
import { View } from "react-native";
import { ButtonText, ButtonWrapper } from "./styles";

export default function ButtonNext({ onPress, title, icon }) {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonText>{title}</ButtonText>
      {icon && <View style={{ marginLeft: 8 }}>{icon}</View>}
    </ButtonWrapper>
  );
}
