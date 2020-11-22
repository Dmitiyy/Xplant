import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Welcome } from '../screens/welcome/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { Home } from '../screens/home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import THEME from '../theme';
import { Entypo } from '@expo/vector-icons'; 
import { Plant } from '../screens/plant/Plant';
import { About } from '../screens/about/About';
import { AntDesign } from '@expo/vector-icons'; 
import { Developer } from '../screens/developer/Developer';

const TabNavigator = createMaterialBottomTabNavigator();
const MainNavigator = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const DeveloperNavigator = createStackNavigator();

const styleConfigStackNavigator = {
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontFamily: 'roboto bold'
    }
}

const HomeNavigation = () => {
    return (
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen options={{...styleConfigStackNavigator}}
            name="Home" component={Home} />
            <HomeNavigator.Screen options={({route}) => ({...styleConfigStackNavigator, title: route.params.name})}
            name="Plant" component={Plant} />
        </HomeNavigator.Navigator>
    )
}

const AboutNavigation = () => {
    return (
        <AboutNavigator.Navigator>
            <AboutNavigator.Screen options={{...styleConfigStackNavigator, title: 'About the project'}} 
            name="About" component={About} />
        </AboutNavigator.Navigator>
    )
}

const DeveloperNavigation = () => {
    return (
        <DeveloperNavigator.Navigator>
            <DeveloperNavigator.Screen options={{...styleConfigStackNavigator}} 
            name="Developer" component={Developer} />
        </DeveloperNavigator.Navigator>
    )
}

const TabNavigation = () => {
    return (
        <TabNavigator.Navigator shifting barStyle={{backgroundColor: '#fff'}}>
            <TabNavigator.Screen options={
                {
                    tabBarLabel: 'Home',
                    tabBarIcon: (info) => (<Entypo name="home" size={24} 
                    color={info.focused ? 'black' : THEME.MAIN_COLOR} />),
                }
            } name="HomeNavigation" component={HomeNavigation} />
            <TabNavigator.Screen options={
                {
                    tabBarLabel: 'About',
                    tabBarIcon: (info) => (<AntDesign name="exclamationcircle" size={24} 
                    color={info.focused ? 'black' : THEME.MAIN_COLOR} />),
                }
            } name="AboutNavigation" component={AboutNavigation} />
            <TabNavigator.Screen options={
                {
                    tabBarLabel: 'Developer',
                    tabBarIcon: (info) => (<AntDesign name="codesquare" size={24} 
                    color={info.focused ? 'black' : THEME.MAIN_COLOR} />),
                }
            } name="DeveloperNavigation" component={DeveloperNavigation} />
        </TabNavigator.Navigator>
    )
}

export const AppNavigation = ({}) => {
    return (
        <>
            <NavigationContainer>
                <MainNavigator.Navigator screenOptions={{
                    tabBarVisible: false,
                }}>
                    <MainNavigator.Screen name="Welcome" component={Welcome} />
                    <MainNavigator.Screen name="TabNavigation" component={TabNavigation} />
                </MainNavigator.Navigator>
            </NavigationContainer>
        </>
    )
}