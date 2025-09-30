import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { themes, addOpacity, spacing, typography } from "./constants/theme.js";

type ThemeName = keyof typeof themes;

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("cyberpunk");
  return {
    theme: themes[currentTheme],
    currentTheme,
    changeTheme: setCurrentTheme,
    availableThemes: Object.keys(themes) as ThemeName[],
  };
};

export default function ExploreOutsideTabs2() {
  const { theme, currentTheme, changeTheme, availableThemes } = useTheme();
  const [likes, setLikes] = useState(42);
  const [isOnline, setIsOnline] = useState(true);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    Alert.alert("Curtiu!", "Like adicionado!");
  };

  const handleShare = () => {
    Alert.alert("Compartilhado!", "Post compartilhado com sucesso!");
  };

  const toggleOnlineStatus = () => {
    setIsOnline((prev) => !prev);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <View
        style={{
          padding: spacing.lg,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: addOpacity(theme.primary, 0.2),
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.heading,
            fontWeight: "700",
            color: theme.text,
            marginBottom: spacing.xs,
          }}
        >
          GameHub Demo
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.md,
            color: theme.textSecondary,
            textAlign: "center",
          }}
        >
          Demonstração de componentes usando themes.js
        </Text>
      </View>

      <View
        style={{
          padding: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Temas Disponíveis
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: spacing.sm,
          }}
        >
          {availableThemes.map((themeName) => (
            <TouchableOpacity
              key={themeName}
              style={{
                paddingHorizontal: spacing.md,
                paddingVertical: spacing.sm,
                borderRadius: 20,
                borderWidth: 2,
                backgroundColor: themes[themeName].primary,
                borderColor:
                  currentTheme === themeName ? theme.accent : "transparent",
              }}
              onPress={() => changeTheme(themeName)}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: typography.sizes.sm,
                  fontWeight: "600",
                }}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          padding: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Componentes de Card
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.surface,
            padding: spacing.md,
            borderRadius: 15,
            marginBottom: spacing.md,
            alignItems: "center",
            borderWidth: 1,
            borderColor: addOpacity(theme.primary, 0.1),
          }}
        >
          <View style={{ position: "relative", marginRight: spacing.md }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: theme.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme.background,
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                HC
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 15,
                height: 15,
                borderRadius: 7.5,
                backgroundColor: isOnline ? theme.success : theme.error,
                borderWidth: 2,
                borderColor: theme.surface,
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: typography.sizes.lg,
                fontWeight: "600",
                color: theme.text,
                marginBottom: spacing.xs,
              }}
            >
              Prof: Beto Pro
            </Text>
            <Text
              style={{
                fontSize: typography.sizes.sm,
                color: theme.textSecondary,
                marginBottom: spacing.xs,
              }}
            >
              Magic The Gathering
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: typography.sizes.xs,
                  color: theme.textMuted,
                  marginRight: spacing.sm,
                }}
              >
                Level 87
              </Text>
              <Text
                style={{
                  fontSize: typography.sizes.xs,
                  color: theme.textMuted,
                }}
              >
                • Diamante
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: isOnline ? theme.accent : theme.error,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: isOnline
                ? addOpacity(theme.accent, 0.7)
                : addOpacity(theme.error, 0.7),
            }}
            onPress={toggleOnlineStatus}
          >
            <Text
              style={{
                fontSize: typography.sizes.sm,
                fontWeight: "700",
                color: theme.background,
              }}
            >
              {isOnline ? "ON" : "OFF"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.surface,
            padding: spacing.md,
            borderRadius: 15,
            alignItems: "center",
            borderWidth: 1,
            borderColor: theme.border,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: addOpacity(theme.secondary, 0.2),
              justifyContent: "center",
              alignItems: "center",
              marginRight: spacing.md,
            }}
          >
            <Text
              style={{
                fontSize: typography.sizes.lg,
              }}
            >
              GAME
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: typography.sizes.lg,
                fontWeight: "600",
                color: theme.text,
                marginBottom: spacing.xs,
              }}
            >
              League of Legends
            </Text>
            <Text
              style={{
                fontSize: typography.sizes.sm,
                color: theme.textSecondary,
                marginBottom: spacing.xs,
              }}
            >
              MOBA • Competitivo
            </Text>
            <Text
              style={{
                fontSize: typography.sizes.sm,
                color: theme.success,
              }}
            >
              15.2k online
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: theme.primary,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.sm,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: theme.background,
                fontSize: typography.sizes.sm,
                fontWeight: "600",
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Botões Interativos
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: spacing.md,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: theme.primary,
              padding: spacing.md,
              borderRadius: 25,
              alignItems: "center",
            }}
            onPress={handleLike}
          >
            <Text
              style={{
                color: theme.background,
                fontSize: typography.sizes.md,
                fontWeight: "600",
              }}
            >
              LIKE {likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "transparent",
              padding: spacing.md,
              borderRadius: 25,
              alignItems: "center",
              borderWidth: 2,
              borderColor: theme.primary,
            }}
            onPress={handleShare}
          >
            <Text
              style={{
                color: theme.primary,
                fontSize: typography.sizes.md,
                fontWeight: "600",
              }}
            >
              SHARE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Paleta de Cores
        </Text>
        <View style={{ gap: spacing.sm }}>
          <View
            style={{
              flexDirection: "row",
              gap: spacing.sm,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 60,
                borderRadius: 10,
                backgroundColor: theme.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: typography.sizes.xs,
                  fontWeight: "600",
                }}
              >
                Primary
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 60,
                borderRadius: 10,
                backgroundColor: theme.secondary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: typography.sizes.xs,
                  fontWeight: "600",
                }}
              >
                Secondary
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: spacing.sm,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 60,
                borderRadius: 10,
                backgroundColor: theme.success,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: typography.sizes.xs,
                  fontWeight: "600",
                }}
              >
                Success
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 60,
                borderRadius: 10,
                backgroundColor: theme.error,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: typography.sizes.xs,
                  fontWeight: "600",
                }}
              >
                Error
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Tipografia
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.heading,
            fontWeight: "600",
            color: theme.text,
            marginBottom: spacing.sm,
          }}
        >
          Heading Text
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.md,
            color: theme.text,
            marginBottom: spacing.sm,
            lineHeight: 22,
          }}
        >
          Body text usando theme.text
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.md,
            color: theme.textSecondary,
            marginBottom: spacing.sm,
          }}
        >
          Secondary text usando theme.textSecondary
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.sm,
            color: theme.textMuted,
            marginBottom: spacing.sm,
          }}
        >
          Muted text usando theme.textMuted
        </Text>
      </View>

      <View
        style={{
          padding: spacing.lg,
          alignItems: "center",
          backgroundColor: addOpacity(theme.primary, 0.05),
        }}
      >
        <Text
          style={{
            fontSize: typography.sizes.md,
            color: theme.text,
            textAlign: "center",
            marginBottom: spacing.sm,
          }}
        >
          Este é um exemplo de como usar os temas dinâmicos!
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.sm,
            color: theme.textSecondary,
          }}
        >
          Tema atual:{" "}
          <Text
            style={{
              color: theme.primary,
              fontWeight: "600",
            }}
          >
            {currentTheme}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
