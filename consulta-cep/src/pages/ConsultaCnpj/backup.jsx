import React, { useState } from "react";
import { fetchCepData } from "../../services/ViaCep/fetchCepData";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Container } from "./styles";
import api from '../../services/ViaCep';

export default function ConsultaCep({ navigation }) {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");

  // async function handleSearch() {
  //   const data = await fetchCepData(cep);
  //   if (data && !data.erro) {
  //     setLogradouro(data.logradouro);
  //     setBairro(data.bairro);
  //     setCidade(data.localidade);
  //     setEstado(data.uf);
  //   } else {
  //     alert("CEP não encontrado!");
  //   }
  // }

  async function buscarCep() {
    let resposta = await api.get(cep +  '/json');
  }

  return (
    <Container>
      <InputField
        label="CEP"
        value={cep}
        // onChangeText={setCep}
        onChangeText={(text) => setCep(text)}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      {/* <Button onPress={handleSearch}>Buscar</Button> */}
      <Button onPress={onPress}>Buscar</Button>

      <InputField label="Logradouro" value={logradouro} editable={false}
       onChangeText={(text) => setLogradouro(text)} />
      <InputField label="Bairro" value={bairro} editable={false}
       onChangeText={(text) => setBairro(text)}
      />
      <InputField label="Cidade" value={cidade} editable={false}
       onChangeText={(text) => setCidade(text)}
      />
      <InputField label="Estado" value={estado} editable={false}
       onChangeText={(text) => setEstado(text)} 
      />
    
    </Container>
  );
}
