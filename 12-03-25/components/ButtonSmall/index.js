import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonSmall({ text }) {
    return (
        <TouchableOpacity style={styles.teste}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    );
}