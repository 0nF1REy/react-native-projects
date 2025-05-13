import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import LoadingModal from "../LoadingModal";
import api from "../../services/ApiProduto";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Input, StyledButton, ButtonText, Title } from "./styles";

const EditItem = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [loading, setLoading] = useState(false);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    buscarProduto();
  }, []);

  async function buscarProduto() {
    setLoading(true);
    try {
      const response = await api.get(`produto/${id}`);
      if (response.status === 200) {
        setDescricao(response.data.descricao);
      } else {
        alert("Não foi possível carregar o produto");
      }
    } catch (err) {
      alert("Erro ao buscar produto");
    }
    setLoading(false);
  }

  async function salvarAlteracoes() {
    setLoading(true);
    try {
      const response = await api.put(`produto/${id}`, {
        descricao,
      });

      if (response.status === 200) {
        Alert.alert("Sucesso", "Produto atualizado com sucesso!");
        navigation.goBack();
      } else {
        alert("Erro ao atualizar");
      }
    } catch (error) {
      alert("Erro ao atualizar");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>Editar Produto</Title>

      <Input
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholderTextColor="#aaa"
      />

      <StyledButton onPress={salvarAlteracoes}>
        <ButtonText>Salvar Alterações</ButtonText>
      </StyledButton>

      <StyledButton
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: "#aaa" }}
      >
        <ButtonText>Cancelar</ButtonText>
      </StyledButton>

      <LoadingModal visible={loading} />
    </Container>
  );
};

export default EditItem;
