// src/components/BatLogo/BatLogo.tsx

import React, { useRef, useEffect } from 'react';
import { Text, Pressable, Animated, Image } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-signal.png';

interface BatLogoProps {
  large?: boolean;
}

export function BatLogo({ large = false }: BatLogoProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (large) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [large]);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const logoStyle = [
    styles.logo,
    { transform: [{ scale: scaleAnim }] },
    large && { width: 250, height: 250, marginBottom: 10 },
  ];

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          styles.wrapper,
          large && { opacity: fadeAnim, shadowColor: '#FFD700', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.9, shadowRadius: 20, elevation: 15 },
        ]}
      >
        <Animated.Image source={batLogo} style={logoStyle} resizeMode="contain" />
      </Animated.View>
    </Pressable>
  );
}
