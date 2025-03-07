import { useNavigation } from "@react-navigation/native";
import {
  StyledButton,
  StyledTextButton,
} from "../../../components/Button/ButtonStyled";
import { ViewContainer, Imagem, DescNoticia } from "../../../Styles";

export default function Screen02() {
  const navigation = useNavigation();

  function abrirTelaHome() {
    navigation.navigate("Notícias");
  }

  return (
    <ViewContainer>
      <Imagem source={require("../../../assets/images/01.png")} />
      <DescNoticia>
        Nova Iorque, NY – Em tempos de crescente instabilidade, a arte se revela
        como um farol de esperança e um ponto de referência no caos.
        Recentemente, um morador de Nova Iorque vivenciou essa realidade ao
        assistir ao documentário "Bad Reputation," que retrata a trajetória da
        icônica Joan Jett. Após a exibição, enquanto caminhava pela movimentada
        Sixth Avenue, o impacto da experiência ainda reverberava. O som imortal
        de "I Love Rock 'n Roll," o hino que elevou Joan Jett ao estrelato,
        invadiu seus sentidos, provocando uma onda de confiança e determinação.
        A música o transportou para uma época de sua infância, lembrando-lhe da
        liberdade e do empoderamento que a artista sempre representou,
        especialmente para as mulheres. Em um cenário social polarizado, as
        canções de Joan Jett emergem como um refúgio, um lembrete de que a
        resiliência e a autenticidade ainda podem ser encontradas no meio da
        incerteza. O documentário "Bad Reputation" é mais que uma simples
        biografia de uma estrela do rock; é uma celebração da individualidade e
        da força da música em inspirar, conectar e curar. Para o morador de Nova
        Iorque, a obra foi um testemunho da relevância atemporal de Joan Jett,
        cuja energia crua e mensagem de empoderamento continuam a ressoar com
        gerações, oferecendo uma luz de esperança em tempos sombrios.
      </DescNoticia>
      <StyledButton onPress={abrirTelaHome}>
        <StyledTextButton>Voltar</StyledTextButton>
      </StyledButton>
    </ViewContainer>
  );
}
