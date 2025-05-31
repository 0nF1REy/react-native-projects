import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState("Informe o peso e a altura para realizar o cálculo.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if (weight !== "" && height !== "") {
            imcCalculator();
            setHeight("");
            setWeight("");
            setMessageImc("O seu Índice de Massa Corporal (IMC) é:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular Novamente");
        setMessageImc("Por favor, preencha os campos de peso e altura.");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura (em metros)</Text>
                <TextInput style={styles.input}
                    placeholder="Exemplo: 1.75"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
                <Text style={styles.formLabel}>Peso (em kg)</Text>
                <TextInput style={styles.input}
                    placeholder="Exemplo: 75.3"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}>
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                messageResultImc={messageImc}
                ResultImc={imc}
            />
        </View>
    );
}
