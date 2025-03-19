import { TouchableOpacity, Text } from "react-native";
import Icon  from 'react-native-vector-icons/Feather';
import styles from "./styles";

export default function ButtonIcon({ text3, icon }) {
    return (
        <TouchableOpacity style={styles.button}>

                <Icon
                    name={icon}
                    size={12}
                    color="cyan"
                    style={styles.icon}
                />
                <Text style={styles.text}>
                {text3}
            </Text>
        </TouchableOpacity>
    );
}