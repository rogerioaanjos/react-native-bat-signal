// /screens/Form/FormScreen.tsx

import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ScrollView, Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormData } from '../../types/FormData';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';
import { styles } from './FormScreenStyle';
import { validationMessages } from '../../../utils/validationMessages';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FormScreen'>;
};

const FormScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleGoBack = () => {
    if (!submitted) {
      navigation.navigate('Home');
      return true;
    }
    return false;
  };

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleGoBack);
      return () => backHandler.remove();
    }, [submitted])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          style={{ marginLeft: 10, fontSize: 18, color: '#FFD700' }}
          onPress={handleGoBack}
        >
          {'<-'}
        </Text>
      ),
    });
  }, [navigation, submitted]);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      Alert.alert('Ops!', validationMessages.name);
      return;
    }
    if (!formData.phone.trim()) {
      Alert.alert('Ops!', validationMessages.phone);
      return;
    }
    if (!formData.location.trim()) {
      Alert.alert('Ops!', validationMessages.location);
      return;
    }

    Alert.alert('Sucesso', 'Dados enviados com sucesso!');
    setFormData({ name: '', phone: '', location: '', notes: '' });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.batContainer}>
        <BatLogo large />
        <Text style={styles.batText}>Bat Signal activated! 🚨</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bat Signal Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#AAA"
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#AAA"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Localização atual"
        placeholderTextColor="#AAA"
        value={formData.location}
        onChangeText={(text) => handleChange('location', text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Observações"
        placeholderTextColor="#AAA"
        multiline
        value={formData.notes}
        onChangeText={(text) => handleChange('notes', text)}
      />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <BatButton title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default FormScreen;
