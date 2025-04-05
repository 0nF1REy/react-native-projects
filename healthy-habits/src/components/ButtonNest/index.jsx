import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyledButton, ButtonText } from './styles';

export default function ButtonNest({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledButton>
        <ButtonText>{title}</ButtonText>
      </StyledButton>
    </TouchableOpacity>
  );
}
