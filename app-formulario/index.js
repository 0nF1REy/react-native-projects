import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components';
import { cores } from './Theme'; 
import Home from './App';

export default function App() {
    return (
      <ThemeProvider theme={cores}>
        <Home />
      </ThemeProvider>
    );
}

registerRootComponent(App);
