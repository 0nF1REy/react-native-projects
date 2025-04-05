import { useState } from "react";

export function useCalcularIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function calcularIMC() {
    const pesoValue = parseFloat(peso);
    const alturaValue = parseFloat(altura) / 100;

    if (!pesoValue || !alturaValue) {
      setImc("Dados inválidos");
      return;
    }

    const imcValue = pesoValue / (alturaValue * alturaValue);
    setImc(imcValue.toFixed(2));
  }

  return { peso, altura, imc, setPeso, setAltura, calcularIMC };
}
