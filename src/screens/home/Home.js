import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Image} from 'react-native';
import DATA from '../../db';
import THEME from '../../theme';
import {useDispatch} from 'react-redux';
import { OPEN } from '../../store/actions/open';

export const Home = ({navigation}) => {
    const dispatch = useDispatch();

    const onOpen = (item) => {
        dispatch(OPEN(item));
        navigation.navigate('Plant', {name: item.title});
    }

    const renderItem = (item) => {
        return (
            <TouchableWithoutFeedback onPress={() => onOpen(item)}>
                <View style={styles.boxItem}>
                    <View style={styles.boxPhoto}>
                        <Image source={item.image} style={styles.img} />
                    </View>
                    <Text style={styles.boxTitlte}>{item.title}</Text>                 
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <FlatList data={DATA} 
                renderItem={({item}) => renderItem(item)} 
                keyExtractor={(item, i) => item.id + i} numColumns={2} horizontal={false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '90%',
        height: '95%',
        backgroundColor: 'transparent',
    },
    boxPhoto: {
        width: '100%',
        height: 150,
        backgroundColor: THEME.MAIN_COLOR,
        borderRadius: 19
    },
    boxTitlte: {
        fontSize: 20,
        fontFamily: 'roboto regular',
        marginTop: 10
    },
    boxItem: {
        width: '45%',
        height: 200,
        marginRight: '10%'
    },
    img: {
        width: '100%',
        height: '100%'
    }
});