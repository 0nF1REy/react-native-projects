import React from "react";
import {
  CardContainer,
  CardImage,
  CardTitle,
  FooterRow,
  DescriptionText,
  HeartIcon,
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const CardComponent = ({ title, description, imageSource, iconName }) => {
  return (
    <CardContainer>
      {imageSource && <CardImage source={imageSource} resizeMode="cover" />}
      <CardTitle>{title}</CardTitle>

      <FooterRow>
        <DescriptionText>{description}</DescriptionText>

        <HeartIcon>
          <Icon name={iconName} size={24} color="#e74c3c" />
        </HeartIcon>
      </FooterRow>
    </CardContainer>
  );
};

export default CardComponent;
