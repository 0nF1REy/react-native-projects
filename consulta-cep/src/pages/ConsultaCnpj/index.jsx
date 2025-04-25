import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/ApiProduto";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Container, ContainerCnpj, Label } from "./styles";
import { View, Alert } from "react-native";
import LoadingModal from "../LoadingModal";

export default function ConsultaCnpj() {
  const [unidade, setUnidade] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);

  function gravar() {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);

    }, 2000);
  }

  async function buscarApi() {
    try {
      const resposta = await api.get(`produto`);
      const data = resposta.data;

      setUnidade(data.unidade || "");
      setValor(data.valor || "");
      setDescricao(data.descricao || "");
    } catch (error) {
      console.error("Erro ao Consultar a API:", error);
      Alert.alert(
        "Erro",
        "Erro na consulta da API. Verifique se as informações estão corretas."
      );
    }
  }

  return (
    <Container>
      <View>
        <Label>UNIDADE</Label>

        <InputField
          placeholder="Unidade"
          value={unidade}
          onChangeText={(text) => setUnidade(text)}
          keyboardType="numeric"
        />

      </View>

      <Label>VALOR</Label>
      <InputField
        placeholder="Valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
        keyboardType="numeric"
      />

      <Label>DESCRICAO</Label>
      <InputField
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        keyboardType="text"
      />

      <Label>GRAVAR</Label>
      <ContainerCnpj>
        <Button onPress={gravar}>
          <Icon name="save" size={24} color="#fff" />
        </Button>
        <LoadingModal visible={loading} />
      </ContainerCnpj>
    </Container>
  );
}
