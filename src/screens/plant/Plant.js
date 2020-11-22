import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import { useSelector } from 'react-redux';
import THEME from '../../theme';

export const Plant = ({}) => {
    const plant = useSelector(state => state.open.plants);

    return (
        <ScrollView>
            <View style={styles.cont}>
                <View style={styles.center}>
                    <View style={styles.boxImg}>
                        <Image source={plant.image} style={styles.img} />
                    </View>
                    <Text style={styles.descr}>
                        {plant.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    descr: {
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'roboto regular',
        marginBottom: 20
    },
    boxImg: {
        width: 250,
        height: 250,
        backgroundColor: THEME.MAIN_COLOR,
        borderRadius: 19
    },
    cont: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    center: {
        width: 250,
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '100%'
    }
});