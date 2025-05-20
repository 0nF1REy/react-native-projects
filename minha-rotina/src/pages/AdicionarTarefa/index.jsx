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

export default function AdicionarTarefa({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function salvarTarefa() {
    setErrorMessage("");
    setSuccessMessage("");

    if (!titulo.trim()) {
      setErrorMessage("O título é obrigatório.");
      return;
    }

    setLoading(true);

    const novaTarefa = {
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      status: "pendente",
      data: new Date().toISOString().split("T")[0], 
    };

    try {
      const response = await api.post("tarefas", novaTarefa);

      if (response.status === 201) {
        setTitulo("");
        setDescricao("");
        setSuccessMessage("Tarefa adicionada com sucesso!");
      } else {
        setErrorMessage("Erro ao adicionar tarefa.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
      setErrorMessage("Erro ao conectar com o servidor.");
    }

    setLoading(false);
  }

  return (
    <Container>
      <InputWithLabel
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título da tarefa"
      />
      <InputWithLabel
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite uma descrição (opcional)"
      />

      {errorMessage !== "" && <ErrorText>{errorMessage}</ErrorText>}
      {successMessage !== "" && <SuccessText>{successMessage}</SuccessText>}

      <ActionButtonsContainer>
        <Button onPress={salvarTarefa}>
          <ButtonText>Salvar</ButtonText>
          <IconContainer>
            <Icon name="check-circle" size={24} color="#fff" />
          </IconContainer>
        </Button>
      </ActionButtonsContainer>

      <LoadingModal visible={loading} />
    </Container>
  );
}
