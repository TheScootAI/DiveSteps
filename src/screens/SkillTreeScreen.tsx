import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../constants/colors';
import {DiveSkill, SkillStackParamList} from '../types';
import {mockSkills} from '../data/mockData';
import SkillCard from '../components/SkillCard';
import ProgressBar from '../components/ProgressBar';

type SkillTreeNavigationProp = StackNavigationProp<SkillStackParamList>;

const {width} = Dimensions.get('window');

const SkillTreeScreen: React.FC = () => {
  const navigation = useNavigation<SkillTreeNavigationProp>();
  const [skills, setSkills] = useState<DiveSkill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Load skills from API or local storage
    setSkills(mockSkills);
  }, []);

  const categories = [
    {key: 'all', label: 'All', icon: 'pool'},
    {key: 'forward', label: 'Forward', icon: 'trending-up'},
    {key: 'backward', label: 'Backward', icon: 'trending-down'},
    {key: 'reverse', label: 'Reverse', icon: 'replay'},
    {key: 'inward', label: 'Inward', icon: 'swap-horiz'},
    {key: 'twisting', label: 'Twisting', icon: 'rotate-right'},
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const completedCount = skills.filter(skill => skill.isCompleted).length;
  const progressPercentage = (completedCount / skills.length) * 100;

  const handleSkillPress = (skillId: string) => {
    navigation.navigate('SkillDetail', {skillId});
  };

  const renderCategoryTab = (category: {key: string; label: string; icon: string}) => (
    <TouchableOpacity
      key={category.key}
      style={[
        styles.categoryTab,
        selectedCategory === category.key && styles.categoryTabActive,
      ]}
      onPress={() => setSelectedCategory(category.key)}>
      <Icon
        name={category.icon}
        size={20}
        color={selectedCategory === category.key ? COLORS.white : COLORS.gray}
      />
      <Text
        style={[
          styles.categoryTabText,
          selectedCategory === category.key && styles.categoryTabTextActive,
        ]}>
        {category.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryLight]}
      style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Dive Journey</Text>
        <Text style={styles.headerSubtitle}>
          {completedCount} of {skills.length} skills mastered
        </Text>
        <ProgressBar
          progress={progressPercentage}
          color={COLORS.accent}
          backgroundColor={COLORS.primaryDark}
          height={8}
        />
      </View>

      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryTabs}
        contentContainerStyle={styles.categoryTabsContent}>
        {categories.map(renderCategoryTab)}
      </ScrollView>

      {/* Skills Grid */}
      <ScrollView
        style={styles.skillsContainer}
        contentContainerStyle={styles.skillsContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onPress={() => handleSkillPress(skill.id)}
              style={[
                styles.skillCard,
                index % 2 === 0 ? styles.skillCardLeft : styles.skillCardRight,
              ]}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: 16,
  },
  categoryTabs: {
    maxHeight: 60,
    marginBottom: 10,
  },
  categoryTabsContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryTabActive: {
    backgroundColor: COLORS.accent,
  },
  categoryTabText: {
    marginLeft: 6,
    fontSize: 14,
    color: COLORS.gray,
    fontWeight: '500',
  },
  categoryTabTextActive: {
    color: COLORS.white,
  },
  skillsContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  skillsContent: {
    padding: 20,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillCard: {
    marginBottom: 16,
  },
  skillCardLeft: {
    marginRight: 8,
  },
  skillCardRight: {
    marginLeft: 8,
  },
});

export default SkillTreeScreen;