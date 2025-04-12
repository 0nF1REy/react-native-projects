import React from "react";
import { InputWrapper, Input, Label } from "./styles";

const InputField = ({
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

export default InputField;
