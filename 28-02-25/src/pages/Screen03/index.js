import {
  StyledButton,
  StyledTextButton,
} from "../../../components/Button/ButtonStyled";
import { ViewContainer, Imagem, DescNoticia } from "../../../Styles";

import { useNavigation } from "@react-navigation/native";

export default function Screen03() {
  const navigation = useNavigation(); 

  function abrirTelaHome() {
    navigation.navigate("Notícias");
  }

  return (
    <ViewContainer>
      <Imagem
        source={{
          uri: "https://www.radiorock.com.br/wp-content/uploads/2020/12/suzi-quatro.jpg",
        }}
      />
      <DescNoticia>
        A lendária cantora e baixista Suzi Quatro lançou recentemente o
        videoclipe de "<b>The Devil In Me</b>", faixa-título de seu novo álbum, que
        será lançado em 26 de março pela Steamhammer/SPV. Este trabalho marca
        uma colaboração especial com seu filho, o guitarrista Richard Tuckey, e
        Suzi afirma que este é o melhor álbum de sua carreira até agora. Durante
        a pandemia, mãe e filho aproveitaram o tempo para compor novas músicas,
        inspirados pelos acontecimentos mundiais, resultando em um disco que
        mistura rock clássico com uma produção moderna. O videoclipe, dirigido
        por Bobby Nerves, já está disponível nas principais plataformas digitais
        e traz uma performance energética da artista, reafirmando sua relevância
        no cenário musical. Além do lançamento do álbum, o documentário "Suzi
        Q", que detalha sua trajetória, ganhou grande destaque recentemente,
        levando a artista a considerar a produção de uma cinebiografia, onde
        revelou à revista Bass Player que gostaria de ver a atriz Scarlett
        Johansson no papel principal. Com uma carreira que ultrapassa cinco
        décadas, Suzi Quatro continua a influenciar gerações de músicos e fãs, e
        "The Devil In Me" chega como mais uma prova de sua vitalidade artística
        e paixão pelo rock and roll.
      </DescNoticia>
      <StyledButton onPress={abrirTelaHome}>
        <StyledTextButton>Voltar</StyledTextButton>
      </StyledButton>
    </ViewContainer>
  );
}
