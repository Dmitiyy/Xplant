import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import MainPhoto from '../../../assets/images/bg.jpg';

export const Welcome = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Image style={styles.image} source={MainPhoto} />
            <View style={{...styles.opacityBlock, ...styles.center}}>
                <Text style={styles.title}>Welcome to Xplant</Text>
                <Text style={styles.descr}>
                    Your offline documentation about plants in 
                    one application. Get start right now.
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('TabNavigation')}} 
                activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.titleBtn}>GET START</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'
    },
    center: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    opacityBlock: {
        backgroundColor: 'rgba(0, 0, 0, 0.49)'
    },
    title: {
        color: '#fff',
        fontSize: 55,
        textAlign: 'center',
        width: 350,
        marginBottom: 20,
        fontFamily: 'roboto bold'
    },
    descr: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        width: 300,
        marginBottom: 20,
        fontFamily: 'roboto light'
    },
    button: {
        width: 250,
        height: 80,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 5,
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleBtn: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'roboto bold'
    }
});