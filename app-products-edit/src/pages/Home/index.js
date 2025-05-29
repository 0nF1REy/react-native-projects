import { View } from 'react-native'
import styles from './styles';
import ButtonSmall from '../../components/ButtonSmall';
import InputText from '../../components/InputText';
import { useState } from 'react';
import api from '../../services/ApiProduto';
import LoadingModal from '../LoadingModal';

export default function Home({ navigation }){
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [unidade, setUnidade] = useState('');
    const [loading, setLoading] = useState(false);
    
    function verRegistros(){
        navigation.navigate('Register');
    }
    
    async function gravar(){
        setLoading(true);
        let data = {
                    descricao: descricao,
                    valor: valor,
                    unidade: unidade
                };

        const response = await api.post('produto', data);

        setLoading(false);

        if(response.status == 201){
            alert("Produto cadastrado com sucesso!");
            setDescricao('');
            setValor('');
            setUnidade('');
        }else{
            alert("Erro ao cadastrar produto!");

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
