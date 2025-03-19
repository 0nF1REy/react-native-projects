import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonLarge({ text2 }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {text2}
            </Text>
        </TouchableOpacity>
    );
}