import React from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { Image } from "react-native"; // <-- Importe Image aqui
import { spacing, typography } from "../../constants/theme";

interface ProfileHeaderProps {
  // Alterado para aceitar uma URI de avatar em vez de iniciais
  avatarUri: string;
  userName: string;
  userId: string;
  userInfo: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarUri, // <-- Agora recebemos a URI
  userName,
  userId,
  userInfo,
}) => (
  <HeaderSection>
    {/* Usamos AvatarImage e passamos a avatarUri */}
    <AvatarImage source={{ uri: avatarUri }} />
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

// AGORA AvatarImage é um styled.Image
const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 4px solid ${({ theme }: { theme: DefaultTheme }) => theme.accent};
  margin-bottom: ${spacing.md}px;
  /* Removido background-color e justify/align-items, pois não são para Image */
`;

// <-- AvatarCircle e AvatarText não são mais necessários e podem ser removidos.
// const AvatarCircle = styled.View`
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
//   background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
//   border: 4px solid ${({ theme }: { theme: DefaultTheme }) => theme.accent};
//   margin-bottom: ${spacing.md}px;
//   justify-content: center;
//   align-items: center;
// `;

// const AvatarText = styled.Text`
//   font-size: ${typography.sizes.heading}px;
//   color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
// `;

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