import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import {colors} from '../theme/colors';
import {icon} from '../theme/icons';

export default function TreasureBox() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={icon.iconVoucherBox} style={styles.icon} />
      <View style={styles.textCol}>
        <Text style={styles.text}>
          Your voucher is here! Claim before it expires
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Claim</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: colors.TREASURE_COLOR,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    height: 48,
    width: 48,
  },
  textCol: {
    flex: 1,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 12,
    color: colors.WHITE,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
});
