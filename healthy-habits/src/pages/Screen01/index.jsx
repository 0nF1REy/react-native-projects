import React from "react";
import { Alinhamento, Artigo, Container, Imagem, Teste, TextoBacana, Titulo, ViewContainer } from "./styles";
import { Text, View } from "react-native-web";
import ButtonNest from "../../components/ButtonNest";

export default function Home() {
  return (
    <ViewContainer>

      <View>
        <Artigo>
          <Titulo>
          <Imagem source={require("../../../assets/images/metric-image-center-woman.png")} />
            O que são alimentos termogênicos e como eles podem te ajudar  a emagrecer
          </Titulo>
          <TextoBacana>
            Os alimentos termogênicos têm a capacidade de aquecer o organismo, gerar calor e facilitar a perda de calorias. Não existe uma recomendação específica em relação à quantidade necessária de cada um deles para que deem uma mãozinha na manutenção do peso. "Também não há um período de tempo específico para se determinar a perda de peso exata, o que dependente da pessoa e varia segundo a sua vontade, determinação e acompanhamento nutricional". Podem ser consumidos crus, como acompanhamento de molhos para saladas ou até salpicados em saladas cruas. Vale ainda agregá-los a temperos de várias preparações culinárias, como ensopados, e serem adicionado a sucos e chás. Confira algumas opções:
            {'\n'}{'\n'}
            Pimenta vermelha: Aumenta a circulação sanguínea e a temperatura corporal, e auxilia na digestão. Contém capsaícina, uma substância rica em antioxidantes, com ação anti-inflamatória e que previne o acúmulo de gorduras nas artérias. Se ingerida de maneira exagerada, pode levar à irritabilidade do estômago. Acelera o metabolismo em 20%;
            {'\n'}{'\n'}
            Gengibre: Possui gingerol, substância responsável pelo aumento da temperatura do corpo, que ajuda na eliminação de gorduras. Também acelera o metabolismo em 20%. O consumo excessivo pode levar à irritabilidade do estômago;
            {'\n'}{'\n'}
            Ômega 3: Presente em peixes (como salmão e sardinha), óleos de peixe e semente de linhaça, ajuda a queimar calorias e eliminar o excesso de líquidos (inchaço). Também tem função anti-inflamatória e previne contra doenças cardiovasculares. Aumenta o metabolismo basal, ou seja, queima calorias;
            {'\n'}{'\n'}
            Chá-verde: Reduz a absorção do açúcar no sangue, inibindo a ação da enzima responsável pela digestão dos carboidratos. Pesquisas mostram que pode diminuir a compulsão por carboidratos e auxiliar no bom funcionamento do intestino;
            {'\n'}{'\n'}
            Chá mate: Contribui com a perda de peso, além de ter propriedades anti-inflamatórias.
          </TextoBacana>
        </Artigo>
        <Artigo>
             
        </Artigo>
      </View>
    </ViewContainer>
  );
}
