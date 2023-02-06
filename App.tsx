import React from 'react';
import {StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation/Root.navigator';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
