import React from 'react';
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

import {colors} from '../theme/colors';

const {width: deviceWidth} = Dimensions.get('window');

export default function BannerCarousel(props) {
  const {data, titleIcon, title, subtitle, description} = props;

  return (
    <View>
      {!!title && (
        <View style={styles.titleRow}>
          <Image source={titleIcon} style={styles.titleIcon} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      {!!subtitle && (
        <View style={styles.subtitleRow}>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
      )}
      {!!description && (
        <View style={styles.descRow}>
          <Text style={styles.descText} numberOfLines={2}>
            {description}
          </Text>
        </View>
      )}
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer(data.length)}
            activeOpacity={0.8}>
            <Image
              source={{uri: item.imageUri}}
              style={styles.image}
              resizeMode="cover"
            />
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
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  titleIcon: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
  titleText: {
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  subtitleRow: {
    paddingHorizontal: 16,
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  descRow: {
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
  },
  descText: {
    fontSize: 11,
    color: colors.BLACK,
    fontWeight: '300',
  },
  itemContainer: length => ({
    width: length === 1 ? deviceWidth - 32 : deviceWidth - 32 - 16,
    height:
      length === 1 ? (deviceWidth - 32) * 0.5 : (deviceWidth - 32 - 16) * 0.5,
    marginLeft: 12,
    borderRadius: 18,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: colors.WHITE,
  }),
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
