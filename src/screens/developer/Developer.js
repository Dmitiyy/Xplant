import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Developer = ({}) => {
    return (
        <View>
            <Text style={styles.text}>
                Hi. I am Peshkov Dmitry and i am developer this project. 
                This is a 1.0.0 version, the application will be improved 
                in the future. If you found any mistakes, write me and we 
                will decide any problem. Thank you for your attention!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'roboto regular',
        fontSize: 20
    }
});