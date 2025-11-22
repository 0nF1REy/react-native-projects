import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { Theme } from "@/app/constants/styles";

const reportReasons = [
  "Conteúdo ofensivo",
  "Spam ou propaganda",
  "Assédio ou bullying",
  "Informações falsas",
  "Outro motivo",
];

interface ReportButtonProps {
  commentId: string;
  theme: Theme;
}

const ReportButton = ({ commentId, theme }: ReportButtonProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleReport = (reason: string) => {
    setModalVisible(false);
    Alert.alert(
      "Denúncia enviada",
      `Comentário ${commentId} denunciado por: ${reason}`
    );
  };

  const dynamicStyles = StyleSheet.create({
    reportButton: {
      padding: 6,
      backgroundColor: theme.error,
      borderRadius: 5,
      alignSelf: "flex-start",
      marginTop: 8,
    },
    reportText: {
      color: theme.background,
      fontWeight: "600",
      fontSize: 12,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      padding: 20,
    },
    modalContent: {
      backgroundColor: theme.surface,
      borderRadius: 10,
      padding: 20,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 15,
      color: theme.text,
    },
    reasonButton: {
      paddingVertical: 8,
    },
    reasonText: {
      fontSize: 14,
      color: theme.text,
    },
    cancelButton: {
      marginTop: 20,
      alignSelf: "center",
    },
    cancelText: {
      color: theme.primary,
      fontSize: 14,
    },
  });

  return (
    <View>
      <TouchableOpacity
        style={dynamicStyles.reportButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={dynamicStyles.reportText}>Denunciar</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={dynamicStyles.modalOverlay}>
          <View style={dynamicStyles.modalContent}>
            <Text style={dynamicStyles.modalTitle}>
              Escolha o motivo da denúncia:
            </Text>
            {reportReasons.map((reason) => (
              <TouchableOpacity
                key={reason}
                style={dynamicStyles.reasonButton}
                onPress={() => handleReport(reason)}
              >
                <Text style={dynamicStyles.reasonText}>{reason}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={dynamicStyles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={dynamicStyles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ReportButton;
