import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/MinhaApi";
import {
  Container,
  Title,
  TaskList,
  TaskItem,
  TaskText,
  TaskDescription,
  TaskStatus,
  ActionButtonsContainer,
  Button,
  ButtonText,
  IconContainer,
  ErrorText,
  TaskStatusConcluido,
  TaskStatusPendente,
} from "./styles";
import LoadingModal from "../LoadingModal";

export default function Principal({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dataHoje = new Date().toISOString().split("T")[0];

  async function carregarTarefas() {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await api.get("nota");
      if (response.status === 200) {
        const tarefasHoje = response.data.filter(
          (tarefa) => tarefa.data === dataHoje
        );
        setTarefas(tarefasHoje);
      } else {
        setErrorMessage("Erro ao carregar tarefas.");
      }
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      setErrorMessage("Erro de conexão com a API.");
    }

    setLoading(false);
  }

  async function marcarConcluida(id) {
    setLoading(true);
    try {
      await api.put(`/nota/${id}`, { status: "concluído"});
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      setErrorMessage("Erro ao marcar como concluída.");
    }
    setLoading(false);
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <Container>
      <Title>Minhas Tarefas de Hoje</Title>

      {errorMessage !== "" && <ErrorText>{errorMessage}</ErrorText>}

      <TaskList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TaskItem onPress={() => marcarConcluida(item.id)}>
            <TaskText>{item.titulo}</TaskText>
            {item.descricao !== "" && (
              <TaskDescription>{item.descricao}</TaskDescription>
            )}
            {
            item.status === "concluído" ? 
            (
              <TaskStatusConcluido>{item.descricao}</TaskStatusConcluido>
            ):
            (
              <TaskStatusPendente>{item.descricao}</TaskStatusPendente>
            )}
            <TaskStatus status={item.status}>
              {item.status === "concluído" ? "✅ Concluído" : "⌛ Pendente"}
            </TaskStatus>
          </TaskItem>
        )}
      />

      <ActionButtonsContainer>
        <Button onPress={() => navigation.navigate("AdicionarTarefa")}>
          <ButtonText>Adicionar</ButtonText>
          <IconContainer>
            <Icon name="plus-circle" size={24} color="#fff" />
          </IconContainer>
        </Button>
        <Button onPress={carregarTarefas}>
          <ButtonText>Atualizar</ButtonText>
          <IconContainer>
            <Icon name="refresh-ccw" size={24} color="#fff" />
          </IconContainer>
        </Button>
      </ActionButtonsContainer>

      <LoadingModal visible={loading} />
    </Container>
  );
}
