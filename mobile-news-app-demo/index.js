import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './Theme'; 
import MainApp from './MainApp';

export default function App() { 
    return (
      <ThemeProvider theme={colors}>
        <MainApp /> {}
      </ThemeProvider>
    );
}

registerRootComponent(App); 
