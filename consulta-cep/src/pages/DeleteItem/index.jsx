import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import LoadingModal from "../LoadingModal";
import api from "../../services/ApiProduto";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  Title,
  StyledButton,
  ButtonText,
  Highlight,
} from "./styles";

const DeleteItem = () => {
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

  async function excluirProduto() {
    setLoading(true);
    try {
      const response = await api.delete(`produto/${id}`);
      if (response.status === 200) {
        Alert.alert("Sucesso", "Produto excluído com sucesso!");
        navigation.goBack();
      } else {
        alert("Erro ao excluir");
      }
    } catch (err) {
      alert("Erro ao excluir");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>
        Tem certeza que deseja excluir o produto:{" "}
        <Highlight>{descricao}</Highlight>?
      </Title>

      <StyledButton onPress={excluirProduto}>
        <ButtonText>Sim, excluir</ButtonText>
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

export default DeleteItem;
