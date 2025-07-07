import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

interface ProgressBarProps {
  progress: number; // 0-100
  color: string;
  backgroundColor: string;
  height: number;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color,
  backgroundColor,
  height,
  animated = true,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (animated) {
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(progress);
    }
  }, [progress, animated, animatedValue]);

  return (
    <View style={[styles.container, {height, backgroundColor}]}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            backgroundColor: color,
            width: animatedValue.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
});

export default ProgressBar;