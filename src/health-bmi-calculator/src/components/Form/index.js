import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState("Informe o peso e a altura para realizar o cálculo.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório")
        }
    }

    function validationImc() {
        if (weight && height) {
            imcCalculator();
            setHeight("");
            setWeight("");
            setMessageImc("O seu Índice de Massa Corporal (IMC) é:");
            setTextButton("Calcular novamente");
            setErrorMessage(null);
        } else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Por favor, preencha os campos de peso e altura.");
        }
    }


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura (em metros)</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                    placeholder="Exemplo: 1.75"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
                <Text style={styles.formLabel}>Peso (em kg)</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
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
                resultImc={imc}
            />
        </Pressable>
    );
}
