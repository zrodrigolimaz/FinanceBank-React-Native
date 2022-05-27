import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';


export default function Accountvalue() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.currentSymbol}>R$</Text>
                <Text style={styles.value}>60.000,00</Text>
            </View>
            <View style={styles.hide}>
                <Image

                    source={require('../../assets/hide.png')}
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
        paddingEnd: 22,
        marginStart: 14,
        marginEnd: 16,
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 5,
        zIndex: 99,

    },
    content: {
        flex: 1,
        flexDirection: 'row',
        paddingEnd: 22,
        marginEnd: 16,
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 5,
        zIndex: 99,
    },
    currentSymbol: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#464237'
    },
    value: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#383F47',
        marginStart: 5,

    },
    hide: {
        marginTop: 16,
        
    }


})