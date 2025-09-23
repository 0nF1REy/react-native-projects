import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
  StyleSheet,
  Animated,
  Vibration,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// --- Constantes ---
const SYMBOL_SIZE = 60;
const GAME_INITIAL_TIME = 5;
const SCORE_TO_WIN = 10;
const INITIAL_LIVES = 3;
const TIME_DEDUCTION_PER_CLICK = 0.1;
const TIME_BONUS_ON_MISS = 0.5;

export default function Page02() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [timeLeft, setTimeLeft] = useState(GAME_INITIAL_TIME);
  const [gameActive, setGameActive] = useState(true);
  const [symbolPosition, setSymbolPosition] = useState({ x: 0, y: 0 });

  // Valores de animação
  const symbolScaleAnim = useRef(new Animated.Value(1)).current;
  const timeBarWidthAnim = useRef(new Animated.Value(screenWidth - 40)).current;
  const gameOverScaleAnim = useRef(new Animated.Value(0)).current;

  const PLAYABLE_AREA_PADDING_HORIZONTAL = 20;
  const PLAYABLE_AREA_PADDING_TOP = 100;
  const PLAYABLE_AREA_PADDING_BOTTOM = 50;

  const PLAYABLE_WIDTH =
    screenWidth - 2 * PLAYABLE_AREA_PADDING_HORIZONTAL - SYMBOL_SIZE;
  const PLAYABLE_HEIGHT =
    screenHeight -
    PLAYABLE_AREA_PADDING_TOP -
    PLAYABLE_AREA_PADDING_BOTTOM -
    SYMBOL_SIZE;

  // Função para animar a escala do símbolo
  const animateSymbolClick = useCallback(() => {
    symbolScaleAnim.setValue(0.8);
    Animated.spring(symbolScaleAnim, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(symbolScaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  }, [symbolScaleAnim]);

  // Função para animar a barra de tempo
  const animateTimeBar = useCallback(() => {
    const totalBarWidth = screenWidth - 40;
    const barWidth = (timeLeft / GAME_INITIAL_TIME) * totalBarWidth;
    Animated.timing(timeBarWidthAnim, {
      toValue: barWidth < 0 ? 0 : barWidth,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [timeLeft, timeBarWidthAnim]);

  // Gera posição aleatória para o símbolo
  const generateRandomPosition = useCallback(() => {

    // A posição x mínima é o padding horizontal
    const minX = PLAYABLE_AREA_PADDING_HORIZONTAL;

    // A posição y mínima é o padding superior (abaixo do HUD)
    const minY = PLAYABLE_AREA_PADDING_TOP;

    // Garante que o símbolo inteiro esteja dentro da área jogável
    const randomX = minX + Math.random() * PLAYABLE_WIDTH;
    const randomY = minY + Math.random() * PLAYABLE_HEIGHT;

    return { x: randomX, y: randomY };
  }, [PLAYABLE_WIDTH, PLAYABLE_HEIGHT]);

  // Manipular evento de clique do símbolo
  const handleSymbolClick = useCallback(() => {
    if (!gameActive) return;

    animateSymbolClick();
    Vibration.vibrate(50);

    setScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore >= SCORE_TO_WIN) {
        setGameActive(false);
        Animated.spring(gameOverScaleAnim, {
          toValue: 1,
          friction: 7,
          useNativeDriver: true,
        }).start();
        Alert.alert(
          'Vitória Galáctica!',
          `Você capturou ${newScore} estrelas!`,
          [{ text: 'Jogar Novamente', onPress: resetGame }]
        );
      }
      return newScore;
    });

    setSymbolPosition(generateRandomPosition());
    setTimeLeft((prev) => Math.max(1, prev - TIME_DEDUCTION_PER_CLICK));
  }, [
    gameActive,
    generateRandomPosition,
    animateSymbolClick,
    gameOverScaleAnim,
  ]);

  // Reiniciar o estado do jogo
  const resetGame = useCallback(() => {
    setScore(0);
    setLives(INITIAL_LIVES);
    setTimeLeft(GAME_INITIAL_TIME);
    setGameActive(true);
    setSymbolPosition(generateRandomPosition());
    gameOverScaleAnim.setValue(0);
    timeBarWidthAnim.setValue(screenWidth - 40);
  }, [generateRandomPosition, gameOverScaleAnim, timeBarWidthAnim]);

  // Lidar com o tempo esgotado (clique perdido)
  const handleTimeOut = useCallback(() => {
    if (!gameActive) return;

    Vibration.vibrate(100);

    const newLives = lives - 1;
    setLives(newLives);

    if (newLives <= 0) {
      setGameActive(false);
      Animated.spring(gameOverScaleAnim, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }).start();
      Alert.alert(
        'Missão Abortada!',
        `Pontuação final: ${score}/${SCORE_TO_WIN}`,
        [{ text: 'Jogar Novamente', onPress: resetGame }]
      );
    } else {
      setSymbolPosition(generateRandomPosition());
      setTimeLeft((prev) =>
        Math.min(GAME_INITIAL_TIME, prev + TIME_BONUS_ON_MISS)
      );
    }
  }, [gameActive, lives, score, generateRandomPosition, resetGame, gameOverScaleAnim]);

  // Efeito do temporizador do jogo
  useEffect(() => {
    if (!gameActive) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameActive, handleTimeOut]);

  // Efeito para animação da barra de tempo
  useEffect(() => {
    if (gameActive) {
      animateTimeBar();
    }
  }, [timeLeft, gameActive, animateTimeBar]);

  // Configuração inicial do jogo
  useEffect(() => {
    resetGame();
  }, []);

  // Renderizar ícones de coração para as vidas
  const renderLives = () => {
    const hearts = [];
    for (let i = 0; i < INITIAL_LIVES; i++) {
      hearts.push(
        <FontAwesome
          key={i}
          name={i < lives ? 'heart' : 'heart-o'}
          size={20}
          color={i < lives ? '#ff0077' : '#555'}
          style={styles.heartIcon}
        />
      );
    }
    return hearts;
  };

  return (
    <View style={styles.gameContainer}>
      {/* HUD (Heads-Up Display) */}
      <View style={styles.hudContainer}>
        <View style={styles.scoreContainer}>
          <FontAwesome name="star" size={18} color="#00ffff" />
          <Text style={styles.scoreText}>
            {' '}
            {score}/{SCORE_TO_WIN}
          </Text>
        </View>

        <View style={styles.livesContainer}>{renderLives()}</View>

        <View>
          <Text
            style={[
              styles.timerText,
              { color: timeLeft <= 2 ? '#ff0077' : '#00ffff' },
            ]}
          >
            {Math.round(timeLeft)}s
          </Text>
        </View>
      </View>

      {/* Barra de Progresso do Tempo */}
      <View style={styles.timeBarBackground}>
        <Animated.View
          style={[
            styles.timeBarFill,
            {
              width: timeBarWidthAnim,
              backgroundColor:
                timeLeft <= GAME_INITIAL_TIME / 3 ? '#ff0077' : '#00ffff',
            },
          ]}
        />
      </View>

      {/* Área do Jogo */}
      <View style={styles.gameArea}>
        {gameActive && (
          <TouchableOpacity
            onPress={handleSymbolClick}
            style={[
              styles.symbol,
              {
                left: symbolPosition.x,
                top: symbolPosition.y,
                transform: [{ scale: symbolScaleAnim }],
              },
            ]}
            activeOpacity={0.8}
          >
            <FontAwesome name="rocket" size={30} color="#0a0a0a" />
          </TouchableOpacity>
        )}

        {/* Tela de Fim de Jogo / Vitória */}
        {!gameActive && (
          <Animated.View
            style={[
              styles.gameOverContainer,
              { transform: [{ scale: gameOverScaleAnim }] },
            ]}
          >
            <Text
              style={[
                styles.gameOverTitle,
                { color: score >= SCORE_TO_WIN ? '#00ffff' : '#ff0077' },
              ]}
            >
              {score >= SCORE_TO_WIN ? 'MISSÃO CUMPRIDA!' : 'GAME OVER'}
            </Text>

            <Text style={styles.finalScore}>
              Estrelas Coletadas: {score}/{SCORE_TO_WIN}
            </Text>

            <TouchableOpacity onPress={resetGame} style={styles.restartButton}>
              <FontAwesome name="refresh" size={18} color="#0a0a0a" />
              <Text style={styles.restartButtonText}> JOGAR NOVAMENTE</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },

  hudContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 0,
  },

  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scoreText: {
    color: '#00ffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  livesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heartIcon: {
    marginRight: 5,
  },

  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  // --- Barra de Tempo ---
  timeBarBackground: {
    height: 10,
    backgroundColor: '#333',
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  timeBarFill: {
    height: '100%',
    borderRadius: 5,
  },

  gameArea: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },

  symbol: {
    position: 'absolute',
    width: SYMBOL_SIZE,
    height: SYMBOL_SIZE,
    backgroundColor: '#00ffff',
    borderRadius: SYMBOL_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },

  gameOverContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },

  gameOverTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 25,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  finalScore: {
    color: '#00ffff',
    fontSize: 28,
    marginBottom: 40,
    fontWeight: '600',
  },

  restartButton: {
    flexDirection: 'row',
    backgroundColor: '#00ffff',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 12,
  },

  restartButtonText: {
    color: '#0a0a0a',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});