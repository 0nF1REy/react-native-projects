import React, { useState } from "react";
import { fetchCepData } from "../../services/ViaCep/fetchCepData";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Container } from "./styles";

export default function ConsultaCep({ navigation }) {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleSearch() {
    const data = await fetchCepData(cep);
    if (data && !data.erro) {
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } else {
      alert("CEP não encontrado!");
    }
  }

  return (
    <Container>
      <InputField
        label="CEP"
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Button onPress={handleSearch}>Buscar</Button>

      <InputField label="Logradouro" value={logradouro} editable={false} />
      <InputField label="Bairro" value={bairro} editable={false} />
      <InputField label="Cidade" value={cidade} editable={false} />
      <InputField label="Estado" value={estado} editable={false} />
    </Container>
  );
}
