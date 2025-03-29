import React from 'react';
import { Button } from './styles';

const CalculatorButton = ({ label, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Text>{label}</Text>
    </Button>
  );
};

export default CalculatorButton;
