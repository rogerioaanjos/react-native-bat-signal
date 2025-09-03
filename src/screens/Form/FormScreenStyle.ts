// /screens/Form/FormScreenStyle.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1C1C1C',
  },
    button: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#FFD700',
  },
  input: {
    width: '100%',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#FFF',
  },
  textArea: {
    width: '100%',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    height: 100,
    textAlignVertical: 'top',
    color: '#FFF',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  // NOVO: Modo Bat Signal ativado
  batContainer: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  batText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 20,
    textAlign: 'center',
  },
  batLogoAnimated: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
