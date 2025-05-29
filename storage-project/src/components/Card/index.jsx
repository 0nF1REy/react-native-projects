import React from "react";
import { CardContainer, CardImage, CardTitle, CardDescription } from "./styles";

const CardComponent = ({ title, description, imageSource }) => {
  return (
    <CardContainer>
      {imageSource && <CardImage source={imageSource} resizeMode="cover" />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default CardComponent;
