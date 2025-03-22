import React from 'react';
import { View, ScrollView } from 'react-native';
import TextInputWithIcon from '../../components/TextInputWithIcon';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
        <ScrollView>
          <TextInputWithIcon placeholder="Digite sua senha aqui..." />
        </ScrollView>
    </Container>
  );
};

export default Home;