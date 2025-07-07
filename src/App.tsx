import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Screens
import SkillTreeScreen from './screens/SkillTreeScreen';
import SkillDetailScreen from './screens/SkillDetailScreen';
import VideoComparisonScreen from './screens/VideoComparisonScreen';
import TriviaScreen from './screens/TriviaScreen';
import ProfileScreen from './screens/ProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';

// Constants
import {COLORS} from './constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SkillStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: COLORS.primary},
      headerTintColor: COLORS.white,
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen
      name="SkillTree"
      component={SkillTreeScreen}
      options={{title: 'Dive Skills'}}
    />
    <Stack.Screen
      name="SkillDetail"
      component={SkillDetailScreen}
      options={{title: 'Skill Details'}}
    />
    <Stack.Screen
      name="VideoComparison"
      component={VideoComparisonScreen}
      options={{title: 'Compare Your Dive'}}
    />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName: string;

        switch (route.name) {
          case 'Skills':
            iconName = 'pool';
            break;
          case 'Trivia':
            iconName = 'quiz';
            break;
          case 'Profile':
            iconName = 'person';
            break;
          default:
            iconName = 'help';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.gray,
      tabBarStyle: styles.tabBar,
      headerShown: false,
    })}>
    <Tab.Screen name="Skills" component={SkillStackNavigator} />
    <Tab.Screen name="Trivia" component={TriviaScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    height: 60,
    paddingBottom: 8,
  },
});

export default App;