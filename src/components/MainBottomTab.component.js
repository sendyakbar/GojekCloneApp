import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import {icon} from '../theme/icons';
import {colors} from '../theme/colors';

export default function MainBottomTab(props) {
  const {state, descriptors, navigation} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconGenerator = () => {
          if (isFocused) {
            switch (route.name) {
              case 'Home':
                return icon.iconHomeActive;
              case 'Promos':
                return icon.iconPromoActive;
              case 'Orders':
                return icon.iconOrderActive;
              case 'Chat':
                return icon.iconChatActive;
              default:
                return null;
            }
          } else {
            switch (route.name) {
              case 'Home':
                return icon.iconHomeInactive;
              case 'Promos':
                return icon.iconPromoInactive;
              case 'Orders':
                return icon.iconOrderInactive;
              case 'Chat':
                return icon.iconChatInactive;
              default:
                return null;
            }
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item(isFocused)}>
            {isFocused ? <View style={styles.marker} /> : null}
            <Image source={iconGenerator()} style={styles.itemIcon} />
            <Text style={styles.labelText(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    overflow: 'hidden',
  },
  item: isFocused => ({
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: isFocused ? colors.TAB_BAR_BACKGROUND : null,
  }),
  marker: {
    width: '100%',
    height: 6,
    backgroundColor: colors.BRAND_COLOR,
    position: 'absolute',
    top: -3,
    borderRadius: 100,
  },
  itemIcon: {
    height: 24,
    width: 24,
  },
  labelText: isFocused => ({
    color: colors.BLACK,
    fontSize: 12,
    fontWeight: isFocused ? 'bold' : 'normal',
  }),
});
