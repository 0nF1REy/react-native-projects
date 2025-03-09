import { useNavigation } from "@react-navigation/native";
import {
  StyledButton,
  StyledTextButton,
} from "../../../components/Button/ButtonStyled";
import { ViewContainer, Imagem, DescNoticia, Strong, Bold } from "../../../Styles";

export default function Screen02() {
  const navigation = useNavigation();

  function abrirTelaHome() {
    navigation.navigate("Notícias");
  }

  return (
    <ViewContainer>
      <Imagem source={require("../../../assets/images/lynx.png")} />
      <DescNoticia>
        <Strong>Lynx, uma estrutura de interface do usuário multiplataforma desenvolvida pela ByteDance, foi feita de código aberto</Strong> por sua equipe de desenvolvimento em 5 de março. O framework visa ajudar os desenvolvedores da web a aproveitar suas habilidades existentes para criar interfaces nativas para plataformas móveis e web simultaneamente. Já implantado em aplicações como o TikTok, a estrutura possui recursos de alto desempenho, um mecanismo de renderização multifuncional e uma moderna cadeia de ferramentas baseada em Rust.
        {'\n'}
        {'\t'}A estrutura abrange paradigmas familiares de desenvolvimento web, suportando animações CSS, seletores e variáveis para garantir a personalização de interface flexível e moderna. Sua decisão de arquitetura mais distinta envolve a divisão de scripts de usuários em dois tempos de execução independentes: 1 - Um tempo de execução de thread principal acionado pelo motor PrimJS, lidando com eventos de alta prioridade, 2 - Um tempo de execução em segundo plano, garantindo operações de thread principal de baixa carga e sem bloqueio
        {'\n'}
        {'\t'}O Lynx tem dois destaques de desempenho: 1 - Renderização instantânea de primeiro quadro (IFR): Ao bloquear brevemente o thread principal, o Lynx garante que o primeiro quadro seja completamente renderizado, proporcionando uma resposta imediata à experiência do usuário, 2 - Script de linha principal (MTS): Um segmento de código programado estático lidando com eventos e gestos de alta prioridade, permitindo uma sensação de interação semelhante à nativa.
        {'\n'}
        {'\t'}Originalmente desenvolvido pela equipe de engenharia da ByteDance, o Lynx recebeu apoio significativo do TikTok. A plataforma apoiou a versão de código aberto do framework, fornecendo apoio financeiro, técnico e comunitário.
        {'\n'}
        {'\t'}O framework é particularmente adequado para cenários diversos e de interação rica, oferecendo aos desenvolvedores web uma ferramenta poderosa para criar interfaces multi-plataforma com uma única base de código.
      </DescNoticia>
      <StyledButton onPress={abrirTelaHome}>
        <StyledTextButton>Voltar</StyledTextButton>
      </StyledButton>
    </ViewContainer>
  );
}
