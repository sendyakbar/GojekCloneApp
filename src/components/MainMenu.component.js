import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../theme/colors';
import {icon} from '../theme/icons';

const {width: deviceWidth} = Dimensions.get('window');

export default function MainMenu() {
  const data = [
    {
      icon: icon.iconGoride,
      title: 'GoRide',
    },
    {
      icon: icon.iconGocar,
      title: 'GoCar',
    },
    {
      icon: icon.iconGofood,
      title: 'GoFood',
    },
    {
      icon: icon.iconGosend,
      title: 'GoSend',
    },
    {
      icon: icon.iconGomart,
      title: 'GoMart',
    },
    {
      icon: icon.iconGotagihan,
      title: 'GoTagihan',
    },
    {
      icon: icon.iconGopaylater,
      title: 'GoPaylater',
    },
    {
      icon: icon.iconMore,
      title: 'More',
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          activeOpacity={0.8}>
          <Image source={item.icon} style={styles.itemIcon} />
          <Text style={styles.titleText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  itemContainer: {
    width: (deviceWidth - 32) / 4,
    alignItems: 'center',
    marginTop: 8,
  },
  itemIcon: {
    height: 48,
    width: 48,
  },
  titleText: {
    fontSize: 11,
    color: colors.BLACK,
    fontWeight: '300',
  },
});
