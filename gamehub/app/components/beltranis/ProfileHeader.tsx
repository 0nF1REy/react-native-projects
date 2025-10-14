import React from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "../../constants/theme";

interface ProfileHeaderProps {
  avatarInitials: string;
  userName: string;
  userId: string;
  userInfo: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarInitials,
  userName,
  userId,
  userInfo,
}) => (
  <HeaderSection>
    <AvatarCircle>
      <AvatarText>{avatarInitials}</AvatarText>
    </AvatarCircle>
    <UserName>
      {userName} // ID: {userId}
    </UserName>
    <UserInfo>{userInfo}</UserInfo>
  </HeaderSection>
);

const HeaderSection = styled.View`
  padding: ${spacing.xl}px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.accent};
`;

const AvatarCircle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  border: 4px solid ${({ theme }: { theme: DefaultTheme }) => theme.accent};
  margin-bottom: ${spacing.md}px;
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  font-size: ${typography.sizes.heading}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
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
