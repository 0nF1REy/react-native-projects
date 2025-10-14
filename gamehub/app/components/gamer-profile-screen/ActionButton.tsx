import React from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "../../constants/theme";

interface ActionButtonProps {
  title: string;
  isPrimary?: boolean;
  onPress: () => void;
}

interface ActionButtonContainerProps {
  isPrimary?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  isPrimary,
  onPress,
}) => (
  <ActionButtonContainer isPrimary={isPrimary} onPress={onPress}>
    <ActionButtonText isPrimary={isPrimary}>{title}</ActionButtonText>
  </ActionButtonContainer>
);

const ActionButtonContainer = styled.TouchableOpacity<ActionButtonContainerProps>`
  flex: 1;
  padding: ${spacing.md}px;
  border-radius: 25px;
  align-items: center;
  background-color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.primary : "transparent")};
  border: 2px solid
    ${({
      theme,
      isPrimary = true,
    }: {
      theme: DefaultTheme;
      isPrimary?: boolean;
    }) => (isPrimary ? "transparent" : theme.primary)};
`;

const ActionButtonText = styled.Text<ActionButtonContainerProps>`
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
  color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.background : theme.primary)};
`;

export default ActionButton;
