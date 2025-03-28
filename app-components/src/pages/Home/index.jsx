import React from 'react';
import { ScrollView } from 'react-native';
import TextInputWithIcon from '../../components/TextInputWithIcon';
import { Container } from './styles';

export default function Home({ navigation }) {
  // =======================================
  // FUNÇÃO PARA ABRIR A PÁGINA SEGUINTE !!!
  // =======================================
  function abrirSegundaPagina() {
    navigation.navigate("Primeira Noticia"); // Segunda Tela
  }

  return (
    <Container>
        <ScrollView>
          <TextInputWithIcon placeholder="Digite sua senha aqui..." />
        </ScrollView>
    </Container>
  );
}
