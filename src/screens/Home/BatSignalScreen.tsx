// /screens/Home/BatSignalScreen.tsx


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';
import { styles } from './BatSignalScreenStyle';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const BatSignalScreen: React.FC<Props> = ({ navigation }) => {
  const [activated, setActivated] = useState(false);

  return (
    <View style={styles.container}>
      {!activated ? (
        <>
          <BatLogo />
          <BatButton
            title="Activate Bat Signal"
            onPress={() => {
              setActivated(true);
              navigation.navigate('FormScreen');
            }}
          />
        </>
      ) : (
        <Text style={styles.infoText}>Bat Signal activated! 🚨</Text>
      )}
    </View>
  );
};

export default BatSignalScreen;
