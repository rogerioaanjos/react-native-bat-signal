// src/components/BatLogo/BatLogoStyles.tsx

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  logo: {
    resizeMode: 'contain',
    height: 180,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#bbb',
  },
});
