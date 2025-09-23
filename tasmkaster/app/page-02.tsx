import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, Dimensions, Alert, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Page02() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameActive, setGameActive] = useState(true);
  const [symbolPosition, setSymbolPosition] = useState({ x: 100, y: 200 });

  const SYMBOL_SIZE = 60;
  const GAME_TIME = 5;
  
  const PLAYABLE_WIDTH = screenWidth - SYMBOL_SIZE - 40;
  const PLAYABLE_HEIGHT = screenHeight - SYMBOL_SIZE - 200;

  const generateRandomPosition = useCallback(() => {
    const newX = Math.random() * PLAYABLE_WIDTH + 20;
    const newY = Math.random() * PLAYABLE_HEIGHT + 100;
    
    return {
      x: Math.max(20, Math.min(newX, PLAYABLE_WIDTH)),
      y: Math.max(100, Math.min(newY, PLAYABLE_HEIGHT + 100))
    };
  }, [PLAYABLE_WIDTH, PLAYABLE_HEIGHT]);

  const handleSymbolClick = useCallback(() => {
    if (!gameActive) return;

    setScore(prevScore => {
      const newScore = prevScore + 1;
      
      if (newScore >= 10) {
        setGameActive(false);
        Alert.alert(
          'Parabéns! 🎉',
          `Você ganhou com ${newScore} pontos!`,
          [{ text: 'Jogar Novamente', onPress: resetGame }]
        );
      }
      
      return newScore;
    });
    
    setSymbolPosition(generateRandomPosition());
    
    setTimeLeft(GAME_TIME);
  }, [gameActive, generateRandomPosition]);

  const resetGame = useCallback(() => {
    setScore(0);
    setLives(3);
    setTimeLeft(GAME_TIME);
    setGameActive(true);
    setSymbolPosition(generateRandomPosition());
  }, [generateRandomPosition]);

  const handleTimeOut = useCallback(() => {
    if (!gameActive) return;

    const newLives = lives - 1;
    setLives(newLives);

    if (newLives <= 0) {
      setGameActive(false);
      Alert.alert(
        'Game Over! 💀',
        `Pontuação final: ${score}/10`,
        [{ text: 'Jogar Novamente', onPress: resetGame }]
      );
    } else {
      setSymbolPosition(generateRandomPosition());
      setTimeLeft(GAME_TIME);
    }
  }, [gameActive, lives, score, generateRandomPosition, resetGame]);

  useEffect(() => {
    if (!gameActive) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameActive, handleTimeOut]);

  const renderLives = () => {
    const hearts = [];
    for (let i = 0; i < 3; i++) {
      hearts.push(
        <Text key={i} style={styles.heart}>
          {i < lives ? '❤️' : '🤍'}
        </Text>
      );
    }
    return hearts;
  };

  return (
    <View style={styles.gameContainer}>
      <View style={styles.hudContainer}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            ⚡ {score}/10
          </Text>
        </View>

        <View style={styles.livesContainer}>
          {renderLives()}
        </View>

        <View>
          <Text style={[
            styles.timerText, 
            { color: timeLeft <= 2 ? '#ff4757' : '#00ff88' }
          ]}>
            {timeLeft}s
          </Text>
        </View>
      </View>

      <View style={styles.gameArea}>
        {gameActive && (
          <TouchableOpacity
            onPress={handleSymbolClick}
            style={[
              styles.symbol,
              {
                left: symbolPosition.x,
                top: symbolPosition.y,
                transform: [{ scale: timeLeft <= 2 ? 1.1 : 1.0 }]
              }
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.symbolText}>
              ⚛️
            </Text>
          </TouchableOpacity>
        )}

        {gameActive && (
          <View style={styles.indicator} />
        )}

        {!gameActive && (
          <View style={styles.gameOverContainer}>
            <Text style={[
              styles.gameOverTitle,
              { color: score >= 10 ? '#00ff88' : '#ff4757' }
            ]}>
              {score >= 10 ? 'VOCÊ GANHOU!' : 'GAME OVER'}
            </Text>
            
            <Text style={styles.finalScore}>
              Pontuação: {score}/10
            </Text>
            
            <TouchableOpacity
              onPress={resetGame}
              style={styles.restartButton}
            >
              <Text style={styles.restartButtonText}>
                JOGAR NOVAMENTE
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a'
  },
  
  hudContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00ff88'
  },
  
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  scoreText: {
    color: '#00ff88',
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  livesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  heart: {
    fontSize: 20,
    marginRight: 5
  },
  
  timerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  gameArea: {
    flex: 1,
    position: 'relative'
  },
  
  symbol: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#00ff88',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00ff88',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10
  },
  
  symbolText: {
    fontSize: 30,
    color: '#ffffff'
  },
  
  indicator: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 20,
    height: 20,
    backgroundColor: '#00ff88',
    borderRadius: 10
  },
  
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  
  gameOverTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  
  finalScore: {
    color: '#00ff88',
    fontSize: 24,
    marginBottom: 30
  },
  
  restartButton: {
    backgroundColor: '#00ff88',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25
  },
  
  restartButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
});