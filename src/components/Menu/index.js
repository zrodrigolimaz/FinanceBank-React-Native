import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';


export default function Accountvalue({ }) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/Cartão.png')}
                />
            </View>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/Boleto.png')}
                />
            </View>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/Transferir.png')}
                />
            </View>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/Gastos.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        paddingStart: 22,
        paddingTop: 20,
        paddingEnd: 22,
        marginStart: 14,
        marginEnd: 16,
        marginTop: 4,
        marginBottom: 16,
        borderRadius: 7,
        zIndex: 99,

    },
    content: {
        flex: 1,
        flexDirection: 'row',
        paddingEnd: 10,
        paddingStart: 10,
        marginEnd: 4,
        marginTop: 3,
        marginBottom: 20,
        borderRadius: 12,
        zIndex: 99,
    },
    shadowProp: {
        shadowColor: '#FFFFFF',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 12,
      },
    


})