import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/Root.navigator';
import {NavigationContainer} from '@react-navigation/native';

import {colors} from './src/theme/colors';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.BRAND_COLOR}
      />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
