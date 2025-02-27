import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './Theme'; 
import Home from './App';

export default function App() {
    return (
      <ThemeProvider theme={colors}>
        <Home />
      </ThemeProvider>
    );
}

registerRootComponent(App);
