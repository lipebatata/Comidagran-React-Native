import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarraNav from './src/barraNav.js'
import Amigos from './src/amigos.js'
import Publicacoes from './src/publicacoes.js'

export default function App() {
  return (
    <View>
      <BarraNav/>
      <Amigos/>
      <Publicacoes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
