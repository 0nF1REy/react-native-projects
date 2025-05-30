import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Image } from "react-native";
import LoadingModal from "../LoadingModal";
import CardComponent from "../../components/Card";
import TextComponent from "../../components/Text";
import PostCreatorComponent from "../../components/PostCreator";
import PreviewModal from "../PreviewModal"; // <-- Import do modal

export default function Principal() {
  const [loading, setLoading] = useState(true);
  const [imagemSource, setImagemSource] = useState(null);
  const [text, setText] = useState("");
  const [icon] = useState("heart");

  const [showPreviewModal, setShowPreviewModal] = useState(false); // <-- Estado do modal

  useEffect(() => {
    const carregarImagem = async () => {
      setLoading(true);
      const uri = `https://i.pravatar.cc/300?rand=${Math.random()}`;
      try {
        await Image.prefetch(uri);
        setImagemSource({ uri });
      } catch (err) {
        console.error("Erro ao carregar imagem:", err);
      } finally {
        setLoading(false);
      }
    };

    carregarImagem();
  }, []);

  if (loading) {
    return <LoadingModal visible={loading} />;
  }

  return (
    <Container>
      <TextComponent text="Olá, Avery Collins!" />

      <PostCreatorComponent
        value={text}
        onChangeText={setText}
        onAttachPress={() => setShowPreviewModal(true)}
        onSendPress={() => {}}
        attachText="Anexar Imagem"
      />

      <PreviewModal
        visible={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
      />

      <CardComponent
        title="Imagem"
        description="Foto de usuário"
        imageSource={imagemSource}
        iconName={icon}
      />
    </Container>
  );
}
