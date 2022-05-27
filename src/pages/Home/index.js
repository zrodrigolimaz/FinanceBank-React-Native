import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header'
import Accountvalue from '../../components/Accountvalue'

const Home = () => {
  return (
    <View style ={styles.container}>
      <Header name="Rodrigo Lima"></Header>
      <Accountvalue/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F9",
  },
});

export default Home;