import React from "react";
import { StyledText } from "./styles";

const TextComponent = ({ text, style }) => {
  return <StyledText style={style}>{text}</StyledText>;
};

export default TextComponent;
