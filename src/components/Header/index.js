import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 11 : 32;

export default function Header ({ name }) {
    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.nomeUsuario}>
                 {name}
            </Text>
            <Text style={styles.contaCorrente}>
                Conta Corrente
            </Text>
        </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2393F7',
        paddingTop: 2,
        flexDirection:'row',
        paddingStart:7,
        paddingEnd:16,
        paddingBottom:3,
    },
    content: {
        flex: 1,
    padding: 15,
        
    },
    nomeUsuario:{
    fontSize:13,
    fontWeight:'bold',


    },
    contaCorrente: {
    color: '#464237',
    fontSize:24,
    fontWeight:'bold',
    }
})