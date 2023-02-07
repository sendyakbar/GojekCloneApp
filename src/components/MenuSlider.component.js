import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {colors} from '../theme/colors';

import {icon} from '../theme/icons';

const {width: deviceWidth} = Dimensions.get('window');

export default function MenuSlider() {
  const data = [
    {
      title: '21 vouchers expiring soon',
      subtitle: 'Use before 12 Feb 2023',
      icon: icon.iconVoucher,
    },
    {
      title: 'Restos near me',
      subtitle: '',
      icon: icon.iconResto,
    },
    {
      title: 'Best-seller in my area',
      subtitle: '',
      icon: icon.iconResto,
    },
  ];

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
            <View style={styles.textCol}>
              <Text style={styles.titleText}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.subtitleText}>{item.subtitle}</Text>
              )}
            </View>
            <Image source={item.icon} style={styles.icon} />
          </TouchableOpacity>
        )}
        keyExtractor={(_, i) => String(i)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 6,
    paddingTop: 16,
    paddingBottom: 8,
  },
  itemContainer: {
    width: deviceWidth * 0.55,
    height: 60,
    marginLeft: 12,
    padding: 12,
    backgroundColor: colors.WHITE,
    borderRadius: 14,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCol: {
    paddingRight: 8,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  subtitleText: {
    fontSize: 11,
    color: colors.BLACK,
    fontWeight: '300',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
