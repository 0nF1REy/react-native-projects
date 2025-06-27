import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import {
  Container,
  LogoContainer,
  LogoImage,
  Label,
  Input,
  Button,
  ButtonText,
  LoadingIndicator,
  ResultContainer,
  PokemonImage,
  ResultText,
} from './styles';

export default function App() {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPokemon = async () => {
    const query = input.trim().toLowerCase();
    if (!query) {
      Alert.alert('⚠️ Atenção', 'Por favor, digite um ID ou nome do Pokémon.');
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    setPokemon(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (!response.ok) throw new Error('Pokémon não encontrado.');

      const data = await response.json();
      setPokemon({
        nome: data.name,
        altura: data.height / 10,
        imagem: data.sprites.front_default,
      });
    } catch (error) {
      Alert.alert('❌ Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={require('./assets/images/pokemon-logo.png')} />
      </LogoContainer>

      <Label>Buscar Pokémon</Label>

      <Input
        placeholder="Digite o nome ou ID"
        value={input}
        onChangeText={setInput}
        autoCapitalize="none"
        returnKeyType="search"
        onSubmitEditing={buscarPokemon}
      />

      <Button activeOpacity={0.8} onPress={buscarPokemon}>
        <ButtonText>BUSCAR</ButtonText>
      </Button>

      {loading && <LoadingIndicator size="large" color="#007aff" />}

      {pokemon && (
        <ResultContainer>
          {pokemon.imagem && <PokemonImage source={{ uri: pokemon.imagem }} />}
          <ResultText>Nome: {pokemon.nome}</ResultText>
          <ResultText>Altura: {pokemon.altura} m</ResultText>
        </ResultContainer>
      )}
    </Container>
  );
}
