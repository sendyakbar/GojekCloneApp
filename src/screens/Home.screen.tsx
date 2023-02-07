import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import BannerCarousel from '../components/BannerCarousel.component';

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
      <BannerCarousel
        data={[
          {
            imageUri:
              'https://lelogama.go-jek.com/cms_editor/2021/04/14/top-banner-1-ID.jpg',
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
  },
});
