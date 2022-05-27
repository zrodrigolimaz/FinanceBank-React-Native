import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header'

const Home = () => {
  return (
    <View style ={styles.container}>
      <Header></Header>
      <Text>Pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
  },
});

export default Home;