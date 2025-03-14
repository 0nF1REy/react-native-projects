import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonIcon({ text3 }) {
    return (
        <TouchableOpacity>
            <Text style={styles.teste}>
                {text3}
            </Text>
        </TouchableOpacity>
    );
}