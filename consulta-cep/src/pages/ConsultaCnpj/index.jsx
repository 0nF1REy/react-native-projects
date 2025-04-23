import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import api from '../../services/BrasilApi';
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Container, ContainerCnpj, Label } from "./styles";
import { Text, View } from "react-native-web";

export default function ConsultaCnpj(){
    const [cnpj, setCnpj] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');
    const [municipio, setMunicipio] = useState('');

    async function buscarCnpj(){
        let resposta = await api.get(cnpj);
    }

    return (
          <Container>
            <View>
                <Label>
                    CNPJ
                </Label>
                <ContainerCnpj>
                    <InputField
                        placeholder="CNPJ"
                        value={cnpj}
                        onChangeText={(text) => setCnpj(text)}/>
                    <Button>
                        <Icon name="search" size={24} color="#fff" onPress={buscarCnpj} />
                    </Button>
                </ContainerCnpj>

            </View>
            <Label>
                    CEP
                </Label>
                <InputField
                    placeholder="CEP"
                    value={cep}
                    onChangeText={(text) => setCep(text)}
                    />
                
                <Label>
                    Logradouro
                </Label>
                <InputField
                    placeholder="Logradouro"
                    value={logradouro}
                    onChangeText={(text) => setLogradouro(text)}
                    />
                        

                        <Label>
                    Municipio
                </Label>
                <InputField
                    placeholder="Municipio"
                    value={municipio}
                    onChangeText={(text) => setMunicipio(text)}/>
                    
                    <Label>
                    Número
                </Label>
                <InputField
                    placeholder="Número"
                    value={numero}
                    onChangeText={(text) => setNumero(text)}
                    />
                  </Container>
    );
}
