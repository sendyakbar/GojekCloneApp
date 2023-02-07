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
      <BannerCarousel
        title="gojek"
        subtitle="Belanja makin hemat"
        description="Dapetin diskon dan harga spesialnya di Tokopedia sekarang sebelum kehabisan!"
        data={[
          {
            imageUri:
              'https://lelogama.go-jek.com/post_featured_image/Consumer_Trends_Blog_Banner_1.jpg',
          },
          {
            imageUri:
              'https://1.bp.blogspot.com/--T4z8RjiFAw/YUC_YQTGdqI/AAAAAAAACzE/mSbSMMQ92iM4Z2HUHjpf3IVlPDii8eB8ACLcBGAsYHQ/w0/gosend.webp',
          },
          {
            imageUri:
              'https://lelogama.go-jek.com/post_featured_image/supe_app_header_1.jpg',
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
