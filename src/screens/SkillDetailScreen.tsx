import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../constants/colors';
import {DiveSkill, SkillStackParamList} from '../types';
import {mockSkills} from '../data/mockData';

type SkillDetailNavigationProp = StackNavigationProp<SkillStackParamList>;
type SkillDetailRouteProp = RouteProp<SkillStackParamList, 'SkillDetail'>;

const {width} = Dimensions.get('window');

const SkillDetailScreen: React.FC = () => {
  const navigation = useNavigation<SkillDetailNavigationProp>();
  const route = useRoute<SkillDetailRouteProp>();
  const {skillId} = route.params;
  
  const [skill, setSkill] = useState<DiveSkill | null>(null);

  useEffect(() => {
    const foundSkill = mockSkills.find(s => s.id === skillId);
    setSkill(foundSkill || null);
  }, [skillId]);

  if (!skill) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading skill details...</Text>
      </View>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return COLORS.beginner;
      case 'intermediate': return COLORS.intermediate;
      case 'advanced': return COLORS.advanced;
      case 'expert': return COLORS.expert;
      default: return COLORS.gray;
    }
  };

  const handleWatchPro = () => {
    Alert.alert('Pro Video', 'Opening professional technique video...');
  };

  const handleRecordDive = () => {
    navigation.navigate('VideoComparison', {skillId: skill.id});
  };

  const handleMarkComplete = () => {
    Alert.alert(
      'Mark as Complete',
      'Are you sure you want to mark this skill as completed?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Complete', onPress: () => console.log('Skill marked complete')},
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={[getDifficultyColor(skill.difficulty), '#1F2937']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.skillInfo}>
            <Text style={styles.diveNumber}>{skill.diveNumber}</Text>
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>{skill.difficulty}</Text>
            </View>
          </View>
          
          <View style={styles.statusContainer}>
            {skill.isCompleted ? (
              <Icon name="check-circle" size={40} color={COLORS.success} />
            ) : skill.isUnlocked ? (
              <Icon name="play-circle-outline" size={40} color={COLORS.white} />
            ) : (
              <Icon name="lock" size={40} color={COLORS.gray} />
            )}
          </View>
        </View>
      </LinearGradient>

      {/* Content */}
      <View style={styles.content}>
        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{skill.description}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleWatchPro}>
            <Icon name="play-circle-filled" size={24} color={COLORS.white} />
            <Text style={styles.primaryButtonText}>Watch Pro Technique</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={handleRecordDive}
            disabled={!skill.isUnlocked}>
            <Icon name="videocam" size={24} color={skill.isUnlocked ? COLORS.primary : COLORS.gray} />
            <Text style={[styles.secondaryButtonText, !skill.isUnlocked && styles.disabledText]}>
              Record My Dive
            </Text>
          </TouchableOpacity>
        </View>

        {/* Coaching Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coaching Tips</Text>
          {skill.coachingTips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Icon name="lightbulb" size={20} color={COLORS.warning} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>

        {/* Judging Criteria */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Judging Criteria</Text>
          <View style={styles.criteriaContainer}>
            <View style={styles.criteriaItem}>
              <Text style={styles.criteriaLabel}>Approach</Text>
              <Text style={styles.criteriaValue}>{skill.judgingCriteria.approach}</Text>
            </View>
            <View style={styles.criteriaItem}>
              <Text style={styles.criteriaLabel}>Takeoff</Text>
              <Text style={styles.criteriaValue}>{skill.judgingCriteria.takeoff}</Text>
            </View>
            <View style={styles.criteriaItem}>
              <Text style={styles.criteriaLabel}>Execution</Text>
              <Text style={styles.criteriaValue}>{skill.judgingCriteria.execution}</Text>
            </View>
            <View style={styles.criteriaItem}>
              <Text style={styles.criteriaLabel}>Entry</Text>
              <Text style={styles.criteriaValue}>{skill.judgingCriteria.entry}</Text>
            </View>
            <View style={styles.criteriaItem}>
              <Text style={styles.criteriaLabel}>Degree of Difficulty</Text>
              <Text style={styles.criteriaValue}>{skill.judgingCriteria.degreeOfDifficulty}</Text>
            </View>
          </View>
        </View>

        {/* Complete Button */}
        {skill.isUnlocked && !skill.isCompleted && (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleMarkComplete}>
            <Text style={styles.completeButtonText}>Mark as Complete</Text>
            <Icon name="check" size={24} color={COLORS.white} />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  skillInfo: {
    flex: 1,
  },
  diveNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  skillName: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 12,
  },
  difficultyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
    textTransform: 'capitalize',
  },
  statusContainer: {
    marginLeft: 20,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 32,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  disabledText: {
    color: COLORS.gray,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.warning,
  },
  tipText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 12,
    flex: 1,
  },
  criteriaContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 16,
  },
  criteriaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  criteriaLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  criteriaValue: {
    fontSize: 14,
    color: COLORS.textSecondary,
    flex: 1,
    textAlign: 'right',
    marginLeft: 16,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.success,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export default SkillDetailScreen;