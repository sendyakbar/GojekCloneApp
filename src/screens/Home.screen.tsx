import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import GoPayBox from '../components/GoPayBox.component';
import MainMenu from '../components/MainMenu.component';
import MenuSlider from '../components/MenuSlider.component';
import TreasureBox from '../components/TreasureBox.component';
import {colors} from '../theme/colors';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      <GoPayBox />
      <MainMenu />
      <TreasureBox />
      <MenuSlider />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
  },
});
