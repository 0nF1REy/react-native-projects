import { useState } from "react";
import { TextInput,Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function InputText({value, 
                                    placeholder, 
                                    onChangeText}){
    return(
        <View>
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText}
                style={styles.input}/>
        </View>
    );

}