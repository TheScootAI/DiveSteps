import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/colors';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={80} color={COLORS.primary} />
        <Text style={styles.name}>Young Diver</Text>
        <Text style={styles.level}>Beginner Level</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Skills Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Practice Sessions</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>85</Text>
          <Text style={styles.statLabel}>Average Score</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="settings" size={24} color={COLORS.gray} />
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  header: {alignItems: 'center', paddingVertical: 40},
  name: {fontSize: 24, fontWeight: 'bold', color: COLORS.textPrimary, marginTop: 16},
  level: {fontSize: 16, color: COLORS.textSecondary, marginTop: 4},
  statsContainer: {flexDirection: 'row', justifyContent: 'space-around', padding: 20},
  statItem: {alignItems: 'center'},
  statNumber: {fontSize: 32, fontWeight: 'bold', color: COLORS.primary},
  statLabel: {fontSize: 14, color: COLORS.textSecondary, marginTop: 4},
  settingsButton: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20, padding: 16, borderRadius: 8, backgroundColor: COLORS.white},
  settingsText: {marginLeft: 8, fontSize: 16, color: COLORS.gray},
});

export default ProfileScreen;