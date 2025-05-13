import React from "react";
import { InputWrapper, Input, Label, ErrorText } from "./styles";

const InputWithLabel = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  editable,
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={editable}
      />
    </InputWrapper>
  );
};

export default InputWithLabel;
