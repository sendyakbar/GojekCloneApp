import React from 'react';
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../theme/colors';

const {width: deviceWidth} = Dimensions.get('window');

export default function BannerCarousel(props) {
  const {data} = props;

  return (
    <View>
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
  itemContainer: {
    width: deviceWidth - 32,
    height: (deviceWidth - 32) * 0.5,
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
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
