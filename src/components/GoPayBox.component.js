import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../theme/colors';
import {icon} from '../theme/icons';

export default function GoPayBox() {
  const menu = [
    {
      icon: icon.iconTopup,
      title: 'Top Up',
    },
    {
      icon: icon.iconPay,
      title: 'Pay',
    },
    {
      icon: icon.iconExplore,
      title: 'Explore',
    },
  ];

  const renderVerticalCarousel = () => {
    const data = [
      {
        icon: icon.iconGopaycoins,
        title: 'gopay',
        subtitle: 'coins',
        balance: '0',
        cta: 'Tap for details',
      },
      {
        icon: icon.iconGopaylater2,
        title: 'gopaylater',
        subtitle: '',
        balance: 'Rp500.000',
        cta: "Let's order now",
      },
      {
        icon: icon.iconGopay,
        title: 'gopay',
        subtitle: '',
        balance: 'Rp5.000',
        cta: 'Tap for history',
      },
    ];
    return (
      <FlatList
        data={data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item}) => (
          <View style={styles.verticalCarouselItemContainer}>
            <View style={styles.verticalCarouselTitleRow}>
              <Image
                source={item.icon}
                style={styles.verticalCarouselItemIcon}
              />
              <Text style={styles.verticalCarouselTitleText}>{item.title}</Text>
              {item.subtitle && <Text> {item.subtitle}</Text>}
            </View>
            <Text style={styles.balanceText}>{item.balance}</Text>
            <Text style={styles.ctaText}>{item.cta}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalCarouselContainer}
        nestedScrollEnabled
      />
    );
  };

  const renderMenu = () => {
    return (
      <>
        {menu.map((d, i) => (
          <TouchableOpacity key={i} style={styles.menuItem} activeOpacity={0.8}>
            <Image source={d.icon} style={styles.menuIcon} />
            <Text style={styles.menuItemText}>{d.title}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {renderVerticalCarousel()}
      {renderMenu()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    paddingHorizontal: 12,
    backgroundColor: colors.GOPAY_COLOR,
    borderRadius: 18,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.GOPAY_COLOR,
  },
  verticalCarouselContainer: {
    paddingTop: 11,
    paddingBottom: 11,
  },
  verticalCarouselItemContainer: {
    backgroundColor: colors.WHITE,
    padding: 8,
    borderRadius: 10,
    height: 66,
    marginVertical: 1,
  },
  verticalCarouselTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalCarouselItemIcon: {
    height: 14,
    width: 14,
  },
  verticalCarouselTitleText: {
    fontWeight: 'bold',
    color: colors.BLACK,
    marginLeft: 4,
  },
  balanceText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  ctaText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BRAND_COLOR,
  },
  menuItem: {
    marginHorizontal: 14,
    alignItems: 'center',
  },
  menuIcon: {
    height: 30,
    width: 30,
  },
  menuItemText: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.WHITE,
    marginTop: 4,
  },
});
