import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import LoadingModal from "../LoadingModal";
import api from "../../services/ApiProduto";
import ProductItem from "../../components/ProductItem";
import { Container, EmptyMessage } from "./styles";

const Registers = () => {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    buscarDados();
  }, []);

  async function buscarDados() {
    setLoading(true);
    try {
      const response = await api.get("produto");
      if (response.status === 200) {
        setDados(response.data);
      } else {
        alert("Não foi possível carregar os produtos.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      alert("Erro de conexão com o servidor.");
    }
    setLoading(false);
  }

  return (
    <Container>
      {loading ? (
        <LoadingModal visible={true} />
      ) : dados.length === 0 ? (
        <EmptyMessage>Nenhum produto encontrado.</EmptyMessage>
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem text={item.descricao} id={item.id} />
          )}
        />
      )}
    </Container>
  );
};

export default Registers;
