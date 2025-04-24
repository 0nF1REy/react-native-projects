import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/BrasilApi";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Container, ContainerCnpj, Label } from "./styles";
import { View, Alert } from "react-native";

export default function ConsultaCnpj() {
  const [cnpj, setCnpj] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");

  async function buscarCnpj() {
    try {
      const resposta = await api.get(`cnpj/v1/${cnpj}`);
      const data = resposta.data;

      setLogradouro(data.logradouro || "");
      setNumero(data.numero || "");
      setCep(data.cep ? data.cep.toString() : "");
      setMunicipio(data.municipio || "");
    } catch (error) {
      console.error("Erro ao buscar CNPJ:", error);
      Alert.alert(
        "Erro",
        "Erro ao buscar CNPJ. Verifique se o número está correto."
      );
    }
  }

  return (
    <Container>
      <View>
        <Label>CNPJ</Label>
        <ContainerCnpj>
          <InputField
            placeholder="CNPJ"
            value={cnpj}
            onChangeText={(text) => setCnpj(text)}
            keyboardType="numeric"
          />
          <Button onPress={buscarCnpj}>
            <Icon name="search" size={24} color="#fff" />
          </Button>
        </ContainerCnpj>
      </View>

      <Label>CEP</Label>
      <InputField
        placeholder="CEP"
        value={cep}
        onChangeText={(text) => setCep(text)}
        keyboardType="numeric"
      />

      <Label>Logradouro</Label>
      <InputField
        placeholder="Logradouro"
        value={logradouro}
        onChangeText={(text) => setLogradouro(text)}
      />

      <Label>Município</Label>
      <InputField
        placeholder="Município"
        value={municipio}
        onChangeText={(text) => setMunicipio(text)}
      />

      <Label>Número</Label>
      <InputField
        placeholder="Número"
        value={numero}
        onChangeText={(text) => setNumero(text)}
        keyboardType="numeric"
      />
    </Container>
  );
}
