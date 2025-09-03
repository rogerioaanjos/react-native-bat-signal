// /navigation/AppNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BatSignalScreen from '../screens/Home/BatSignalScreen';
import FormScreen from '../screens/Form/FormScreen';
import batLogo from '../../assets/bat-signal.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './AppNavigatorStyle';

export type RootStackParamList = {
  Home: undefined;
  FormScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Header customizado
const CustomHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#FFD700" />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={batLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={{ width: 28 }} />
    </View>
  );
};

const AppNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={BatSignalScreen}
      options={{
        title: 'Bat Signal',
        headerStyle: { backgroundColor: '#1C1C1C' },
        headerTintColor: '#FFD700',
      }}
    />
    <Stack.Screen
      name="FormScreen"
      component={FormScreen}
      options={({ navigation }) => ({
        header: () => <CustomHeader onBack={() => navigation.navigate('Home')} />,
      })}
    />

  </Stack.Navigator>
);

export default AppNavigator;
