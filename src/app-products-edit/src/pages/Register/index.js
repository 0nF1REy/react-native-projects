import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/ApiProduto';
import LoadingModal from '../LoadingModal';

export default function Register({navigation}){
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        function(){
            buscarDados();
        }
    ,[]);

    async function buscarDados(){
        setLoading(true);
        
        const response = await api.get('produto');

        if(response.status == 200){
            console.log(response.data);
            setDados(response.data);
            setLoading(false);
        }else{
            alert("Erro ao conectar com a API");
        }
    }

    function editarProduto(idProduto){
        const params = { id: idProduto };

        navigation.navigate('ProductEdit', params);
    }
    
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() => editarProduto(item.id)}>
                                <Text>{item.descricao}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                />
            
            <LoadingModal visible={loading}/>
        </View>
    );
}
