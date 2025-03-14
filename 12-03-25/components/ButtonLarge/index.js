import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ButtonLarge({ text2 }) {
    return (
        <TouchableOpacity>
            <Text>
                {text2}
            </Text>
        </TouchableOpacity>
    );
}