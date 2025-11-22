import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonSmall({ text, 
                                    onPress }){
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}>
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}