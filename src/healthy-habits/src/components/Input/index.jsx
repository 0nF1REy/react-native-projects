import React from 'react';
import { TextInput } from 'react-native';
import { InputContainer } from './styles';

export default function InputBacanaComponent({ placeholder, value, onChangeText, keyboardType }) {
  return (
    <InputContainer>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={{ 
          height: 50, 
          borderColor: '#ccc', 
          borderWidth: 1, 
          borderRadius: 8, 
          paddingHorizontal: 16, 
          fontSize: 16 
        }}
      />
    </InputContainer>
  );
}
