import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { colors } from '../../../Theme'; 
import { View } from 'react-native-web';
import styles from './styles'; 
import ButtonSmall from '../../../components/ButtonSmall';
import ButtonIcon from '../../../components/ButtonIcon';
import ButtonLarge from '../../../components/ButtonLarge';

export default function Home() { 
    return (
      // <ThemeProvider theme={colors}>
        <View style={styles.container}>
            <ButtonSmall text='Confirmar'/>
            <ButtonLarge text2='Cancelar'/>
            <ButtonIcon 
            text3='Sair'
            icon="log-out"
            />
        </View>
      // </ThemeProvider>
    );
}
