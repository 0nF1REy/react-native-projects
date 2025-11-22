import { View } from 'react-native'
import styles from './styles';
import ButtonSmall from '../../components/ButtonSmall';
import InputText from '../../components/InputText';
import { useState, useEffect } from 'react';
import api from '../../services/ApiProduto';
import LoadingModal from '../LoadingModal';

export default function ProductEdit({ navigation, route }){
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [unidade, setUnidade] = useState('');
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(route.params.id);

    useEffect(
        function(){
            buscarProduto();
        }
    ,[]);

    async function buscarProduto(){
        setLoading(true);
        
        const response = await api.get('produto/'+id);

        if(response.status == 200){
            setDescricao(response.data.descricao);
            setValor(response.data.valor);
            setUnidade(response.data.unidade);

            setLoading(false);
        }else{
            alert("Erro ao conectar com a API");
        }
    }
    
    async function gravar(){
        setLoading(true);
        let data = {
                    descricao: descricao,
                    valor: valor,
                    unidade: unidade
                };

        const response = await api.put('produto/'+id, data);

        setLoading(false);

        if(response.status == 200){
            alert("Produto editado com sucesso!");
            setDescricao('');
            setValor('');
            setUnidade('');
        }else{
            alert("Erro ao editar produto!");

        }
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.dados}>

                <InputText
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={(text) => setDescricao(text)}/>
                
                <InputText
                    placeholder="Valor"
                    value={valor}
                    onChangeText={(text) => setValor(text)}/>
                
                <InputText
                    placeholder="Unidade"
                    value={unidade}
                    onChangeText={(text) => setUnidade(text)}/>
                
                <ButtonSmall
                     onPress={gravar}
                     text="Gravar" /> 
                <ButtonSmall
                     onPress={verRegistros}
                     text="Ver Registros" /> 

                <LoadingModal visible={loading}/>                       
            </View>
        </View>
    );
}
