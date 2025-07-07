import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../constants/colors';
import {SkillStackParamList} from '../types';

type VideoComparisonRouteProp = RouteProp<SkillStackParamList, 'VideoComparison'>;

const VideoComparisonScreen: React.FC = () => {
  const route = useRoute<VideoComparisonRouteProp>();
  const {skillId, userDiveId} = route.params;

  const handleRecordVideo = () => {
    Alert.alert('Record Video', 'Video recording functionality will be implemented here.');
  };

  const handleSelectVideo = () => {
    Alert.alert('Select Video', 'Video selection from gallery will be implemented here.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="videocam" size={80} color={COLORS.primary} />
        <Text style={styles.title}>Video Comparison</Text>
        <Text style={styles.subtitle}>
          Record or select your dive video to compare with the professional technique.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.recordButton} onPress={handleRecordVideo}>
            <Icon name="videocam" size={24} color={COLORS.white} />
            <Text style={styles.buttonText}>Record New Video</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.selectButton} onPress={handleSelectVideo}>
            <Icon name="video-library" size={24} color={COLORS.primary} />
            <Text style={styles.selectButtonText}>Select from Gallery</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.comingSoon}>
          Full video comparison features coming soon!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  recordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  comingSoon: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 40,
    fontStyle: 'italic',
  },
});

export default VideoComparisonScreen;