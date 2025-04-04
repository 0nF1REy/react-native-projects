import React from 'react';
import { Button } from './styles';

const ButtonNest = ({ label, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Text>{label}</Text>
    </Button>
  );
};

export default ButtonNest;
