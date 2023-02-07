import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import {icon} from '../theme/icons';
import {colors} from '../theme/colors';

const {width: deviceWidth} = Dimensions.get('window');

export default function FoodprintsSlider() {
  const data = [
    {
      imageUri:
        'https://static01.nyt.com/images/2018/12/07/dining/07tgiving4/07tgiving4-square640-v2.jpg',
      title: 'Voltz Coffee, Lebak Bulus',
      subtitle: 'Sweets, Bakery, Coffee',
      rating: 4.8,
    },
    {
      imageUri:
        'https://static01.nyt.com/images/2018/12/07/dining/07tgiving4/07tgiving4-square640-v2.jpg',
      title: 'Ajeng Nasi Goreng, Pondok Labu, Indonesia',
      subtitle: 'Rice',
      rating: 4.7,
    },
    {
      imageUri:
        'https://static01.nyt.com/images/2018/12/07/dining/07tgiving4/07tgiving4-square640-v2.jpg',
      title: 'Naked Patty Burger ID, Emerald Bintaro',
      subtitle: 'Fast food, Coffee, Western',
      rating: 4.8,
    },
    {
      imageUri:
        'https://static01.nyt.com/images/2018/12/07/dining/07tgiving4/07tgiving4-square640-v2.jpg',
      title: 'Sate Madura Cak Tohir, Serpong',
      subtitle: 'Sate, Fast food, Chicken & duck',
      rating: 4.6,
    },
    {
      imageUri:
        'https://static01.nyt.com/images/2018/12/07/dining/07tgiving4/07tgiving4-square640-v2.jpg',
      title: "McDonald's, Ciater Raya Tangerang",
      subtitle: 'Fast food, Sweets, Snacks',
      rating: 4.8,
    },
  ];

  return (
    <View>
      <View style={styles.titleRow}>
        <Image source={icon.iconGojek} style={styles.titleIcon} />
        <Text style={styles.titleText}>gojek</Text>
      </View>
      <View style={styles.subtitleRow}>
        <View>
          <Text style={styles.subtitleText}>Your foodprints!</Text>
          <Text style={styles.descText}>
            Reorder what you had last time. Easy.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
            <Image
              source={{uri: item.imageUri}}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textRow}>
              <View>
                <Text style={styles.itemTitleText} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.itemSubtitleText} numberOfLines={2}>
                  {item.subtitle}
                </Text>
              </View>
              <View style={styles.ratingRow}>
                <Image source={icon.iconStar} style={styles.iconStar} />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  descText: {
    fontSize: 11,
    color: colors.BLACK,
    fontWeight: '300',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BUTTON_POSITIVE,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BRAND_COLOR,
  },
  itemContainer: {
    width: deviceWidth * 0.35,
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
  },
  image: {
    width: '100%',
    height: deviceWidth * 0.35 * 1.8 * 0.6,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  textRow: {
    backgroundColor: colors.WHITE,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    padding: 8,
    height: deviceWidth * 0.35 * 1.8 * 0.45,
    justifyContent: 'space-between',
  },
  itemTitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  itemSubtitleText: {
    fontSize: 10,
    fontWeight: '300',
    color: colors.BLACK,
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  iconStar: {
    height: 16,
    width: 16,
    marginRight: 6,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});
