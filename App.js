import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/';
import fonts from './src/fonts';
import { AppLoading } from 'expo';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Welcome } from './src/screens/welcome/Welcome';

export default function App() {
  const [ready, setIsReady] = useState(false);

  if (!ready) {
    return (
      <AppLoading onFinish={() => setIsReady(true)} startAsync={fonts} />
    )
  }

  return (
    <Provider store={store}>
      {/* <Welcome /> */}
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});   
