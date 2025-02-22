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

export default function Home() {
  return (
    <TelaContainer>
      <Titulo>Suas Informações</Titulo>
      
      <CampoContainer>
        <RotuloCampo>Nome Completo</RotuloCampo>
        <CampoTexto placeholder="Cloud Strife Sutoraifu" placeholderTextColor="#888" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>E-mail</RotuloCampo>
        <CampoTexto placeholder="cloud.sutoraifu@gmail.com" placeholderTextColor="#888" keyboardType="email-address" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Telefone</RotuloCampo>
        <CampoTexto placeholder="+55 (XXX) XXX-XXXX" placeholderTextColor="#888" keyboardType="phone-pad" />
      </CampoContainer>

      <CampoContainer>
        <RotuloCampo>Data de Nascimento</RotuloCampo>
        <CampoTexto placeholder="DD/MM/YYYY" placeholderTextColor="#888" keyboardType="numeric" />
      </CampoContainer>

      <BotaoSalvar>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </TelaContainer>
  );
}