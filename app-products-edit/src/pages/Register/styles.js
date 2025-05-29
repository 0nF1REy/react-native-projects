import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',  // ✅ importante no web
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    position: 'relative', // para o botão absoluto funcionar direito
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
  },
  botao: {
    position: 'absolute', // ✅ botão fixo
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;