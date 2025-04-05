import { useState } from "react";

export function useCalcularIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC() {
    const pesoValue = parseFloat(peso);
    const alturaValue = parseFloat(altura) / 100;

    if (!pesoValue || !alturaValue) {
      setImc("Dados inválidos");
      setClassificacao("");
      return;
    }

    const imcValue = pesoValue / (alturaValue * alturaValue);
    setImc(imcValue.toFixed(2));

    let classificacao = "";
    if (imcValue < 18.5) {
      classificacao = "Baixo peso";
    } else if (imcValue < 25) {
      classificacao = "Peso normal";
    } else if (imcValue < 30) {
      classificacao = "Excesso de peso";
    } else if (imcValue < 35) {
      classificacao = "Obesidade";
    } else {
      classificacao = "Obesidade extrema";
    }

    setClassificacao(classificacao);
  }

  return {
    peso,
    altura,
    imc,
    classificacao,
    setPeso,
    setAltura,
    calcularIMC
  };
}
