import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {colors} from '../theme/colors';
import {icon} from '../theme/icons';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
        <Image source={icon.iconSearch} style={styles.iconSearch} />
        <Text style={styles.placeholder}>Find services, food, or places</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.avatar}>
        <Image source={icon.iconUser} style={styles.iconUser} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: colors.BRAND_COLOR,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '85%',
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  placeholder: {
    fontSize: 12,
  },
  iconSearch: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  avatar: {
    height: 38,
    width: 38,
    borderRadius: 100,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconUser: {
    height: 24,
    width: 24,
  },
});
