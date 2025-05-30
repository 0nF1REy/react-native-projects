import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { Label, InputWrapper, InputField, IconButton } from "./styles";

const InputWithIconComponent = ({
  label,
  placeholder,
  iconName,
  isPassword = false,
  secureTextEntry = false,
  onToggleVisibility,
  value,
  onChangeText
}) => {
  return (
    <>
      <Label>{label}</Label>
      <InputWrapper>
        <InputField
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        {isPassword ? (
          <IconButton onPress={onToggleVisibility}>
            <Icon name={iconName} size={24} color="#888" />
          </IconButton>
        ) : (
          <Icon name={iconName} size={24} color="#888" />
        )}
      </InputWrapper>
    </>
  );
};

export default InputWithIconComponent;
