import {
  ViewContainer,
  Imagem,
  DescNoticia,
  ArticleContainer,
  Titulo,
  IconContainer,
} from "../../../Styles";
import {
  StyledButton,
  StyledButtonIcon,
  StyledTextButton,
} from "../../../components/Button/ButtonStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

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
      <ArticleContainer>
        <Titulo>
          Joan Jett: A Arte de Empoderar e Inspirar em Tempos de Incerteza
        </Titulo>
        <Imagem source={require("../../../assets/images/01.png")} />
        <DescNoticia>
          Nova Iorque, NY – O documentário "Bad Reputation" sobre Joan Jett
          inspirou um morador de Nova Iorque, que, ao ouvir "I Love Rock 'n
          Roll," reviveu sentimentos de assertividade e nostalgia. Em tempos
          turbulentos, a música de Jett se torna um refúgio, oferecendo conforto
          e esperança diante do caos.
        </DescNoticia>
        <StyledButton onPress={abrirPrimeiraNoticia}>
          <StyledTextButton>Abrir notícia</StyledTextButton>
        </StyledButton>
        <IconContainer>
          <StyledButtonIcon>
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              style={{ marginRight: 10 }}
            />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              style={{ marginRight: 10 }}
            />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <FontAwesomeIcon icon={faShareAlt} size="lg" />
          </StyledButtonIcon>
        </IconContainer>
      </ArticleContainer>
      <ArticleContainer>
        <Titulo>
          Suzi Quatro Lança Videoclipe de 'The Devil In Me' e Anuncia Novo Álbum
          com Colaboração do Filho
        </Titulo>
        <Imagem
          source={{
            uri: "https://www.radiorock.com.br/wp-content/uploads/2020/12/suzi-quatro.jpg",
          }}
        />
        <DescNoticia>
          A cantora Suzi Quatro lançou neste fim de semana nas plataformas
          digitais o single "The Devil In Me," faixa-título de seu próximo
          álbum, previsto para 26 de março via Steamhammer/SPV. Suzi destaca que
          o álbum será o "melhor de sua carreira," fruto de colaboração com seu
          filho, Richard Tuckey.
        </DescNoticia>
        <StyledButton onPress={abrirSegundaNoticia}>
          <StyledTextButton>Abrir notícia</StyledTextButton>
        </StyledButton>
        <IconContainer>
          <StyledButtonIcon>
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              style={{ marginRight: 10 }}
            />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              style={{ marginRight: 10 }}
            />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <FontAwesomeIcon icon={faShareAlt} size="lg" />
          </StyledButtonIcon>
        </IconContainer>
      </ArticleContainer>
    </ViewContainer>
  );
}
