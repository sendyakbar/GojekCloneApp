import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function PromosScreen() {
  return (
    <View style={styles.container}>
      <Text>Promos Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
