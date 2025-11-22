import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
}) => {
  const theme = useTheme();

  const buttonStyle = {
    backgroundColor: variant === "primary" ? theme.primary : theme.secondary,
    ...styles.button,
  };

  const textStyle = {
    color: theme.text,
    ...styles.text,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
