import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonSmall({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}