import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './Theme'; 
import MainApp from './MainApp';

export default function App() { 
  return (
    <ThemeProvider theme={theme}> 
      <MainApp />
    </ThemeProvider>
  );
}

registerRootComponent(App);
