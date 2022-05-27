import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Header from '../../components/Header'
import Accountvalue from '../../components/Accountvalue'
import Menu from '../../components/Menu'

const Home = () => {
  return (
    <View style ={styles.container}>
      <Header name="Rodrigo Lima"></Header>
      <Accountvalue saldo="60.000,00"/>
      <Menu/>
      <Text style={styles.title}>TRANSAÇÕES RECENTES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F9",
  },
  title:{
    fontSize:14,
    fontWeight:'bold',
    marginStart: 32,
    
  }
});

export default Home;