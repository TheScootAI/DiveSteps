import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../constants/colors';
import {DiveSkill} from '../types';

interface SkillCardProps {
  skill: DiveSkill;
  onPress: () => void;
  style?: ViewStyle;
}

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 56) / 2; // Account for padding and gap

const SkillCard: React.FC<SkillCardProps> = ({skill, onPress, style}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return COLORS.beginner;
      case 'intermediate':
        return COLORS.intermediate;
      case 'advanced':
        return COLORS.advanced;
      case 'expert':
        return COLORS.expert;
      default:
        return COLORS.gray;
    }
  };

  const getDifficultyGradient = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return [COLORS.beginner, '#0D9488'];
      case 'intermediate':
        return [COLORS.intermediate, '#D97706'];
      case 'advanced':
        return [COLORS.advanced, '#DC2626'];
      case 'expert':
        return [COLORS.expert, '#7C3AED'];
      default:
        return [COLORS.gray, COLORS.darkGray];
    }
  };

  const getStatusIcon = () => {
    if (skill.isCompleted) {
      return {name: 'check-circle', color: COLORS.success};
    }
    if (skill.isUnlocked) {
      return {name: 'play-circle-outline', color: COLORS.primary};
    }
    return {name: 'lock', color: COLORS.gray};
  };

  const statusIcon = getStatusIcon();
  const isDisabled = !skill.isUnlocked;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}>
      <LinearGradient
        colors={isDisabled ? [COLORS.lightGray, COLORS.gray] : getDifficultyGradient(skill.difficulty)}
        style={styles.card}>
        {/* Difficulty Badge */}
        <View style={[styles.difficultyBadge, {backgroundColor: getDifficultyColor(skill.difficulty)}]}>
          <Text style={styles.difficultyText}>{skill.difficulty.charAt(0).toUpperCase()}</Text>
        </View>

        {/* Status Icon */}
        <View style={styles.statusContainer}>
          <Icon
            name={statusIcon.name}
            size={24}
            color={isDisabled ? COLORS.darkGray : statusIcon.color}
          />
        </View>

        {/* Dive Number */}
        <Text style={[styles.diveNumber, isDisabled && styles.disabledText]}>
          {skill.diveNumber}
        </Text>

        {/* Skill Name */}
        <Text
          style={[styles.skillName, isDisabled && styles.disabledText]}
          numberOfLines={2}>
          {skill.name}
        </Text>

        {/* Category Icon */}
        <View style={styles.categoryContainer}>
          <Icon
            name={getCategoryIcon(skill.category)}
            size={16}
            color={isDisabled ? COLORS.darkGray : COLORS.white}
          />
          <Text style={[styles.categoryText, isDisabled && styles.disabledText]}>
            {skill.category}
          </Text>
        </View>

        {/* Progress Indicators */}
        {skill.isCompleted && (
          <View style={styles.completedOverlay}>
            <Icon name="star" size={20} color={COLORS.warning} />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'forward':
      return 'trending-up';
    case 'backward':
      return 'trending-down';
    case 'reverse':
      return 'replay';
    case 'inward':
      return 'swap-horiz';
    case 'twisting':
      return 'rotate-right';
    case 'armstand':
      return 'fitness-center';
    default:
      return 'pool';
  }
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    minHeight: 140,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  difficultyBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statusContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  diveNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 4,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
    flex: 1,
    textAlign: 'left',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.white,
    marginLeft: 4,
    opacity: 0.9,
    textTransform: 'capitalize',
  },
  disabledText: {
    color: COLORS.darkGray,
  },
  completedOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});

export default SkillCard;