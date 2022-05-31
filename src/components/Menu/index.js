import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';


export default function Accountvalue({ }) {
    return (
        <ScrollView style={[styles.container] } horizontal = {true} showsHorizontalScrollIndicator= {false} >
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areButton}>
                    <Image source={require('../../assets/cartao.png')} />
                </View>
                <Text style={styles.labelButton}>Cartão</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areButton}>
                    <Image source={require('../../assets/boleto.png')} />
                </View>
                <Text style={styles.labelButton}>Boleto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areButton}>
                    <Image source={require('../../assets/transferir.png')} />
                </View>
                <Text style={styles.labelButton}>Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areButton}>
                    <Image source={require('../../assets/gastos.png')} />
                </View>
                <Text style={styles.labelButton}>Gastos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areButton}>
                    <Image source={require('../../assets/receber.png')} />
                </View>
                <Text style={styles.labelButton}>Receber</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#FFFFFF",
        maxHeight:84,
        paddingStart: 14,
        paddingEnd: 14,
        marginTop: 18,
        marginBottom: 18,
    },
    actionButton:{
        alignItems:"center",
        marginRight:33,
    },
    areButton: {
        backgroundColor:'#2393F7',
        borderRadius:10,
        height:48,
        width:48,
        justifyContent:'center',
        alignItems:'center',
    },
    labelButton: {
        color:'#66737D',
        marginTop:4,
        fontWeight:'bold',
    }

})