import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../constants/colors';
import {TriviaQuestion} from '../types';
import {mockTriviaQuestions} from '../data/mockData';

const TriviaScreen: React.FC = () => {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  useEffect(() => {
    setQuestions(mockTriviaQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      Alert.alert('Please select an answer', 'Choose one of the options before continuing.');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    setShowResult(true);

    // Show explanation
    Alert.alert(
      isCorrect ? 'Correct! 🎉' : 'Incorrect 😔',
      currentQuestion.explanation,
      [
        {
          text: 'Next Question',
          onPress: handleNextQuestion,
        },
      ]
    );
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      Alert.alert(
        'Quiz Complete!',
        `Your final score: ${score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)}/${questions.length}`,
        [
          {text: 'Restart', onPress: restartQuiz},
          {text: 'Done', style: 'cancel'},
        ]
      );
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return COLORS.success;
      case 'medium': return COLORS.warning;
      case 'hard': return COLORS.error;
      default: return COLORS.gray;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technique': return 'fitness-center';
      case 'judging': return 'gavel';
      case 'history': return 'history';
      case 'safety': return 'security';
      default: return 'quiz';
    }
  };

  if (!currentQuestion) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading trivia questions...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.secondaryLight]}
      style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Diving Trivia</Text>
        <Text style={styles.headerSubtitle}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill,
                {width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`}
              ]}
            />
          </View>
          <Text style={styles.scoreText}>Score: {score}/{answeredQuestions.length}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          {/* Question Meta */}
          <View style={styles.questionMeta}>
            <View style={[styles.difficultyBadge, {backgroundColor: getDifficultyColor(currentQuestion.difficulty)}]}>
              <Text style={styles.difficultyText}>{currentQuestion.difficulty}</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Icon 
                name={getCategoryIcon(currentQuestion.category)} 
                size={16} 
                color={COLORS.textSecondary} 
              />
              <Text style={styles.categoryText}>{currentQuestion.category}</Text>
            </View>
          </View>

          {/* Question */}
          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          {/* Answer Options */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === index && styles.selectedOption,
                  showResult && index === currentQuestion.correctAnswer && styles.correctOption,
                  showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer && styles.incorrectOption,
                ]}
                onPress={() => handleAnswerSelect(index)}
                disabled={showResult}>
                <Text style={[
                  styles.optionText,
                  selectedAnswer === index && styles.selectedOptionText,
                ]}>
                  {String.fromCharCode(65 + index)}. {option}
                </Text>
                {showResult && index === currentQuestion.correctAnswer && (
                  <Icon name="check" size={24} color={COLORS.white} />
                )}
                {showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                  <Icon name="close" size={24} color={COLORS.white} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Submit Button */}
          {!showResult && (
            <TouchableOpacity
              style={[
                styles.submitButton,
                selectedAnswer === null && styles.disabledButton
              ]}
              onPress={handleSubmitAnswer}
              disabled={selectedAnswer === null}>
              <Text style={styles.submitButtonText}>Submit Answer</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Study Tips */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>💡 Study Tip</Text>
          <Text style={styles.tipsText}>
            Watch professional dive videos carefully to understand the techniques being asked about in trivia questions!
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.gray,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginRight: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 20,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
    textTransform: 'capitalize',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 4,
    textTransform: 'capitalize',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    lineHeight: 26,
    marginBottom: 24,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  correctOption: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  incorrectOption: {
    backgroundColor: COLORS.error,
    borderColor: COLORS.error,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    flex: 1,
  },
  selectedOptionText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.gray,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  tipsCard: {
    backgroundColor: COLORS.warning,
    borderRadius: 12,
    padding: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  tipsText: {
    fontSize: 14,
    color: COLORS.white,
    lineHeight: 20,
  },
});

export default TriviaScreen;