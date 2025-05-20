import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/MinhaApi";
import {
  Container,
  ActionButtonsContainer,
  ErrorText,
  SuccessText,
  Button,
  ButtonText,
  IconContainer,
} from "./styles";
import LoadingModal from "../LoadingModal";
import InputWithLabel from "../../components/InputWithLabel";

export default function MinhaAPI({ navigation }) {
  const [unidade, setUnidade] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function gravar() {
    setErrorMessage("");
    setSuccessMessage("");

    if (!unidade || !valor || !descricao) {
      setErrorMessage("Todos os campos devem ser preenchidos!");
      return;
    }

    setLoading(true);

    let data = {
      descricao: descricao,
      valor: valor,
      unidade: unidade,
    };

    try {
      const response = await api.post("produto", data);
      if (response.status === 201) {
        setDescricao("");
        setValor("");
        setUnidade("");
        setSuccessMessage("Produto cadastrado com sucesso!");
      } else {
        setErrorMessage("Erro ao cadastrar produto.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setErrorMessage("Erro ao cadastrar produto.");
    }

    setLoading(false);
  }

  return (
    <Container>
      <InputWithLabel
        label="Unidade de Medida"
        value={unidade}
        onChangeText={(text) => setUnidade(text)}
        placeholder="Insira a unidade de medida"
        keyboardType="numeric"
      />
      <InputWithLabel
        label="Valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <InputWithLabel
        label="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        placeholder="Descrição"
        keyboardType="default"
      />

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {successMessage && <SuccessText>{successMessage}</SuccessText>}

      <ActionButtonsContainer>
        <Button onPress={gravar}>
          <ButtonText>Salvar</ButtonText>
          <IconContainer>
            <Icon name="save" size={24} color="#fff" />
          </IconContainer>
        </Button>
        <Button onPress={() => navigation.navigate("Registers")}>
          <ButtonText>Listar</ButtonText>
          <IconContainer>
            <Icon name="play" size={24} color="#fff" />
          </IconContainer>
        </Button>
        <LoadingModal visible={loading} />
      </ActionButtonsContainer>
    </Container>
  );
}
