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
          Lynx: Framework de Interface de Usuário da ByteDance Torna-se Open Source
        </Titulo>
        <Imagem source={require("../../../assets/images/lynx.png")} />
        <DescNoticia>
          Lynx, uma estrutura de interface do usuário multiplataforma desenvolvida pela ByteDance, foi feita de código aberto por sua equipe de desenvolvimento em 5 de março. O framework visa...
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
          Rapid7 sinaliza novo zero-day do PostgreSQL relacionado à exploração do BeyondTrust
        </Titulo>
        <Imagem
          source={{
            uri: "https://www.securityweek.com/wp-content/uploads/2023/06/zero-day.jpg",
          }}
        />
        <DescNoticia>
          Pesquisadores de segurança da Rapid7 sinalizaram na quinta-feira a descoberta de uma nova vulnerabilidade de dia zero no PostgreSQL, que parece ter sido um componente...
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
