import React from 'react';
import { View, StyleSheet,Text,FlatList } from 'react-native';
import Header from '../../components/Header'
import Accountvalue from '../../components/Accountvalue'
import Menu from '../../components/Menu'
import Movements from '../../components/Movements';

const list = [
{
  id: 1 , 
  label: 'Supermercado',
  value: '40,10',
  date: "11/12",
  type:'despesa', 
}, 
{
  id: 2 , 
  label: 'Pix *1132 Matheus B',
  value: '40,10',
  date: "10/12",
  type: 'receita', 
},
{
  id: 3 , 
  label: 'Smartfit',
  value: '40,10',
  date: "09/12",
  type: 'despesa', 
},
{
  id: 4 , 
  label: 'Farmácia popul.',
  value: '40,10',
  date: "09/12",
  type: 'despesa', 
},
{
  id: 5 , 
  label: 'Transferência *1371',
  value: '40,10',
  date: "11/12",
  type: 'receita', /// 
},
{
  id: 6 , 
  label: 'Supermercado',
  value: '40,10',
  date: "11/12",
  type: 'despesa', /// 
},
]



const Home = () => {
  return (
    <View style ={styles.container}>
      <Header name="Rodrigo Lima"></Header>
      <Accountvalue saldo="60.000,00"/>
      <Menu/>
      <Text style={styles.title}>TRANSAÇÕES RECENTES</Text>
      <FlatList style={styles.list}
        data = {list}
        keyExtractor = {(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem={({ item }) => <Movements data={item}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F9",
  },
  title:{
    fontSize:13,
    fontWeight:'bold',
    marginStart: 42,
    color:'#8F99A3'
    
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});

export default Home;