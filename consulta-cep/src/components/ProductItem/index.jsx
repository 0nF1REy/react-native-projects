import React from "react";
import { Button, Item, ViewContainer } from "./styles";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native'; 

const ProductItem = ({ text }) => {
    
    const navigation = useNavigation(); 

    const handleEditItem = () => {
        navigation.navigate("EditItem"); 
    };

    const handleDeleteItem = () => {
        navigation.navigate("DeleteItem"); 
    };

    return (
        <View>
            <Item>
                <Text>Teste</Text>
            </Item>
            <ViewContainer>
                <Button onPress={handleEditItem}>
                    <Icon name="edit" size={16} color="#fff" />
                </Button>
                <Button onPress={handleDeleteItem}>
                    <Icon name="trash-2" size={16} color="#fff" />
                </Button>
            </ViewContainer>
        </View>
    );
};

export default ProductItem;
