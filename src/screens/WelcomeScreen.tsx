import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../constants/colors';
import {RootStackParamList} from '../types';

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList>;

const {width, height} = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate('Main');
  };

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryLight, COLORS.secondary]}
      style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <Icon name="pool" size={80} color={COLORS.white} />
          <Text style={styles.logoText}>DiveSteps</Text>
        </View>

        {/* Welcome Message */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome to Your Diving Journey!</Text>
          <Text style={styles.welcomeSubtitle}>
            Master diving skills step by step, compare your technique with pros, and track your progress with fun challenges.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Icon name="trending-up" size={32} color={COLORS.accent} />
            <Text style={styles.featureText}>Progressive Skill Tree</Text>
          </View>
          <View style={styles.feature}>
            <Icon name="video-library" size={32} color={COLORS.accent} />
            <Text style={styles.featureText}>Pro Technique Videos</Text>
          </View>
          <View style={styles.feature}>
            <Icon name="compare" size={32} color={COLORS.accent} />
            <Text style={styles.featureText}>Side-by-Side Comparison</Text>
          </View>
          <View style={styles.feature}>
            <Icon name="quiz" size={32} color={COLORS.accent} />
            <Text style={styles.featureText}>Interactive Trivia</Text>
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
          <Icon name="arrow-forward" size={24} color={COLORS.primary} />
        </TouchableOpacity>

        {/* Skip for now */}
        <TouchableOpacity onPress={handleGetStarted}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 16,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 40,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: COLORS.white,
    marginLeft: 16,
    fontWeight: '500',
  },
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: 8,
  },
  skipText: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.8,
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;