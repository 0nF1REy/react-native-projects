import React from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "@/app/constants/styles";

interface ProfileHeaderProps {
  avatarUri: string | number;
  userName: string;
  userId: string;
  userInfo: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarUri,
  userName,
  userId,
  userInfo,
}) => (
  <HeaderSection>
    <AvatarImage
      source={typeof avatarUri === "string" ? { uri: avatarUri } : avatarUri}
    />
    <UserName>{userName}</UserName>
    <UserInfo>{userInfo}</UserInfo>
  </HeaderSection>
);

const HeaderSection = styled.View`
  padding: ${spacing.xl}px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.accent};
`;

const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 4px solid ${({ theme }: { theme: DefaultTheme }) => theme.accent};
  margin-bottom: ${spacing.md}px;
`;

const UserName = styled.Text`
  font-size: ${typography.sizes.heading}px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const UserInfo = styled.Text`
  font-size: ${typography.sizes.lg}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  margin-top: ${spacing.xs}px;
`;

export default ProfileHeader;
