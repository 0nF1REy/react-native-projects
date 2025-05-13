import React from "react";
import { Item, ItemText, Button, ButtonGroup } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ text }) => {
  const navigation = useNavigation();

  const handleEditItem = () => {
    navigation.navigate("EditItem");
  };

  const handleDeleteItem = () => {
    navigation.navigate("DeleteItem");
  };

  return (
    <Item>
      <ItemText>{text}</ItemText>
      <ButtonGroup>
        <Button onPress={handleEditItem}>
          <Icon name="edit" size={18} color="#fff" />
        </Button>
        <Button onPress={handleDeleteItem}>
          <Icon name="trash-2" size={18} color="#fff" />
        </Button>
      </ButtonGroup>
    </Item>
  );
};

export default ProductItem;
