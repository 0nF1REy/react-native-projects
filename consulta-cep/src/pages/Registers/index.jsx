import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import LoadingModal from "../LoadingModal";
import api from "../../services/ApiProduto";

const Registers = ({}) => {

    const [loading, setLoading] = useState(false);

    // [] Matriz vazia
    const [dados,setDados] = useState([]);

    // Quando a tela carregar, chama a função buscarDados
    useEffect(()=>{
        buscarDados();
    }, []);

    // [] Significa que vai executar uma vez (Quando a tela carregar)
    async function buscarDados() {
        setLoading(true);

        const response = await api.get('produto');

        if (response.status == 200) {
            setDados(response.data);
        } else {
            alert("Não foi possível carregar os produtos");
        }

        setLoading(false);
    }

    return (
        <View>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>
                                {item.descricao}
                            </Text>
                        </View>
                    );
                }}
            />
            <LoadingModal visible={loading}/>
        </View>
  );
};

export default Registers;