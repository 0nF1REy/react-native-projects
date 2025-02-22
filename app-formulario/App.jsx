import React from 'react';
import {
  TelaContainer,
  Titulo,
  CampoContainer,
  RotuloCampo,
  CampoTexto,
  BotaoSalvar,
  TextoBotao
} from './Styles'; 

export default function App() {
  return (
    <TelaContainer>
      <Titulo>Suas Informações</Titulo>
      
      <CampoContainer>
        <RotuloCampo>Nome Completo</RotuloCampo>
        <CampoTexto placeholder="Alan Ryan da Silva Domingues" placeholderTextColor="#888" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>E-mail</RotuloCampo>
        <CampoTexto placeholder="E-mail" placeholderTextColor="#888" keyboardType="email-address" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Telefone</RotuloCampo>
        <CampoTexto placeholder="+55 15 997687362" placeholderTextColor="#888" keyboardType="phone-pad" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Data de Nascimento</RotuloCampo>
        <CampoTexto placeholder="dd/mm/yyyy" placeholderTextColor="#888" keyboardType="numeric" />
      </CampoContainer>

      <BotaoSalvar>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </TelaContainer>
  );
}