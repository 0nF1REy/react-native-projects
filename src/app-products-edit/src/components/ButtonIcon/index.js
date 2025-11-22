import { TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import styles from "./styles";

export default function ButtonIcon({ text, icon }){
    return (
        <TouchableOpacity 
            style={styles.button}>
            <Icon
                name={icon}
                size={12}
                color="#fff"/>
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}