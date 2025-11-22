import {
  StyledButton,
  StyledTextButton,
} from "../../../components/Button/ButtonStyled";
import { ViewContainer, Imagem, DescNoticia, Strong } from "../../../Styles";

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
          uri: "https://www.securityweek.com/wp-content/uploads/2023/06/zero-day.jpg",
        }}
      />
      <DescNoticia>
        <Strong>
          Pesquisadores de segurança da Rapid7 sinalizaram na quinta-feira a
          descoberta de uma nova vulnerabilidade de dia zero no PostgreSQL
        </Strong>
        , que parece ter sido um componente crítico em uma cadeia de ataques
        contra um produto BeyondTrust Remote Support.
        {"\n"}
        {"\t"}A vulnerabilidade, marcada como <Strong>CVE-2025-1094</Strong>,
        afeta o terminal interativo PostgreSQL psql e permite instruções SQL
        contendo entrada não confiável, mas escapada corretamente, para acionar
        a injeção SQL.
        {"\n"}
        {"\t"}Em uma reviravolta interessante, o Rapid7 está conectando
        diretamente a exploração do bug do PostgreSQL a ataques remotos de
        execução de código contra os sistemas de Suporte Remoto BeyondTrust. Os
        hacks comprometeram <Strong>com sucesso</Strong> as máquinas no
        Departamento do Tesouro dos EUA.
        {"\n"}
        {"\t"}Em todos os cenários examinados, os pesquisadores da Rapid7 dizem
        que o exploit BeyondTrust (CVE-2024-12356) exigiu alavancar essa falha
        do PostgreSQL. Embora a BeyondTrust tenha emitido patches para suas
        vulnerabilidades, incluindo CVE-2024-12356 e um bug separado
        (CVE-2024-12686), a falha subjacente no PostgreSQL permanece um ponto de
        pivô preocupante para os atacantes.
        {"\n"}
        {"\t"}De acordo com a d<Strong>ocumentação pública</Strong> Rapid7, o
        bug existe a maneira como o psql lida com sequências de bytes inválidas
        de caracteres UTF-8 mal formados. Nos testes, os pesquisadores do Rapid7
        descobriram que as sequências inválidas criadas podem encerrar
        prematuramente um comando SQL, permitindo que os invasores injetem
        instruções adicionais e até mesmo acionem a execução do shell via
        meta-comando do psql.
        {"\n"}
        {"\t"}Em testes controlados, os pesquisadores do Rapid7 dizem que foram
        capazes de injetar um comando que executou o comando id no sistema,
        confirmando o potencial de comprometimento total do sistema.
        {"\n"}
        {"\t"}A equipe do PostgreSQL lançou um <Strong>patch urgente</Strong> e
        alertou que as versões antes do PostgreSQL 17.3, 16.7, 15.11, 14.16 e
        13.19 são afetadas. O projeto não reconheceu a exploração de dia zero,
        mesmo que creditou a Rapid7 com a descoberta.
        {"\n"}
        {"\t"}A Rapid7 também lançou um módulo Metasploit que faz impressões
        digitais de sistemas BeyondTrust vulneráveis e automatiza a entrega de
        carga útil.
        {"\n"}
        {"\t"}A última reviravolta segue a notícia de que hackers do governo
        chinês{" "}
        <Strong>
          acessaram remotamente estações de trabalho do Departamento do Tesouro
          dos EUA
        </Strong>{" "}
        e documentos não classificados depois de comprometer um serviço
        BeyondTrust.
        {"\n"}
        {"\t"}Embora o Tesouro tenha descrito a situação como um “grande
        incidente de segurança cibernética”, o escopo da violação não foi
        detalhado, sem informações sobre quantas estações de trabalho foram
        comprometidas ou quais tipos de documentos podem ter sido acessados.
        {"\n"}
        {"\t"}Em uma carta aos legisladores, Aditi Hardikar, secretária
        assistente de gestão nos EUA O Departamento do Tesouro, disse que o
        Departamento soube do problema da BeyondTrust em 8 de dezembro, quando o
        fornecedor disse que um agente de ameaça obteve acesso a uma chave usada
        pela BeyondTrust para garantir um serviço baseado em nuvem usado para
        fornecer suporte técnico remoto para os funcionários do Departamento do
        Tesouro (DO).
        {"\n"}
        {"\t"}Funcionários do Tesouro souberam da chave exposta no mesmo dia em
        que a BeyondTrust divulgou publicamente o compromisso. Uma semana
        depois, a BeyondTrust revelou o CVE-2024-12356 – uma vulnerabilidade de
        injeção de comando com uma pontuação CVSS de 9.8 – que afetou as versões
        24.3.1 e Priorado de Acesso Remoto 24.3.1 e Anteriormente.
      </DescNoticia>
      <StyledButton onPress={abrirTelaHome}>
        <StyledTextButton>Voltar</StyledTextButton>
      </StyledButton>
    </ViewContainer>
  );
}
