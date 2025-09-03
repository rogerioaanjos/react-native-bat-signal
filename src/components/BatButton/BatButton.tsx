// src/components/BatButton/BatButtonStyles.tsx

import React, { useRef } from 'react';
import { Text, Pressable, Animated } from 'react-native';
import { styles } from './BatButtonStyles';

interface BatButtonProps {
  title: string;
  onPress: () => void;
}

export const BatButton: React.FC<BatButtonProps> = ({ title, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Animação de pulsar
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.05, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();

    onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};
