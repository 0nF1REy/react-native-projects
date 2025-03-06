import { Titulo, ViewContainer, Imagem, DescNoticia } from "../../../Styles";
import { StyledButton, StyledTextButton } from "../../../components/Button/ButtonStyled";

export default function Screen01({ navigation }) {
  // =======================================
  // FUNÇÃO PARA ABRIR A PÁGINA SEGUINTE !!!
  // =======================================
  function abrirPrimeiraNoticia() { 
    navigation.navigate("Primeira Noticia"); // Segunda Tela
  }
  function abrirSegundaNoticia() { 
    navigation.navigate("Segunda Noticia"); // Terceira Tela
  }

  return (
    <ViewContainer>
      <Imagem source={require('../../../assets/images/01.png')}/>
      <DescNoticia>Not long ago, I saw “Bad Reputation,” the new documentary about Joan Jett, and came out of it exhilarated, listening to “I Love Rock ’n Roll” while powering down Sixth Avenue. Jett’s sound—the full-throttle drums, guitar, and vocals—made me feel a joyous, uncharacteristic assertiveness. Instead of skirting pedestrian traffic, I walked confidently, claiming part of the sidewalk—and was suddenly blasted back to a sense memory of childhood, when I would request “I Love Rock ’n Roll” at the roller rink and pound my skates in time with the beat. In that era, I liked to wear a T-shirt that said “Let’s Face It—Girls Are Smarter.” And in recent weeks, as the wheels have flown off the shabby jalopy that is American civic life, Jett’s music has helped me feel better.</DescNoticia>
          <StyledButton onPress={abrirPrimeiraNoticia}>
            <StyledTextButton>Abrir Noticia</StyledTextButton>
          </StyledButton>
      <Imagem source={require('../../../assets/images/01.png')}/>
      <DescNoticia>Not long ago, I saw “Bad Reputation,” the new documentary about Joan Jett, and came out of it exhilarated, listening to “I Love Rock ’n Roll” while powering down Sixth Avenue. Jett’s sound—the full-throttle drums, guitar, and vocals—made me feel a joyous, uncharacteristic assertiveness. Instead of skirting pedestrian traffic, I walked confidently, claiming part of the sidewalk—and was suddenly blasted back to a sense memory of childhood, when I would request “I Love Rock ’n Roll” at the roller rink and pound my skates in time with the beat. In that era, I liked to wear a T-shirt that said “Let’s Face It—Girls Are Smarter.” And in recent weeks, as the wheels have flown off the shabby jalopy that is American civic life, Jett’s music has helped me feel better.</DescNoticia>
          <StyledButton onPress={abrirSegundaNoticia}>
            <StyledTextButton>Abrir Noticia</StyledTextButton>
          </StyledButton>

    </ViewContainer>
  );
}
