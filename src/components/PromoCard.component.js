import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../theme/colors';

const {width: deviceWidth} = Dimensions.get('window');

export default function PromoCard(props) {
  const {imageUri, title, description} = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <View style={styles.textCol}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 18,
    marginTop: 8,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: (deviceWidth - 32) * 0.5,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  textCol: {
    padding: 16,
    backgroundColor: colors.WHITE,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  descText: {
    fontSize: 11,
    fontWeight: '300',
    color: colors.BLACK,
    marginTop: 4,
  },
});
