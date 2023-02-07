import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import BannerCarousel from '../components/BannerCarousel.component';

import GoPayBox from '../components/GoPayBox.component';
import MainMenu from '../components/MainMenu.component';
import MenuSlider from '../components/MenuSlider.component';
import PromoCard from '../components/PromoCard.component';
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
      <PromoCard
        imageUri="https://lelogama.go-jek.com/cms_editor/2021/04/14/top-banner-1-ID.jpg"
        title="Pertolongan pertama buat ungkapin cinta"
        description="Beli coklat di GoMart, dianternya cepat. Nikmatin diskon ongkirnya"
      />
      <PromoCard
        imageUri="https://lelogama.go-jek.com/post_featured_image/Consumer_Trends_Blog_Banner_1.jpg"
        title="Kebutuhan apa aja, pasti ada!"
        description="Kamu butuh sesuatu, GoMart antar gak pake ntar-ntar. Klik!"
      />
      <PromoCard
        imageUri="https://1.bp.blogspot.com/--T4z8RjiFAw/YUC_YQTGdqI/AAAAAAAACzE/mSbSMMQ92iM4Z2HUHjpf3IVlPDii8eB8ACLcBGAsYHQ/w0/gosend.webp"
        title="Solusi perjalanan hemat"
        description="Yuk pake fitur GoRide Hemat buat trip jarak dekat. Klik di sini!"
      />
      <PromoCard
        imageUri="https://lelogama.go-jek.com/post_featured_image/supe_app_header_1.jpg"
        title="Cashback 75% GoPay dari GoSend!"
        description="Masukin kode GOSENDHEMAT dan dapatkan Cashback 75% GoPay Coins. Yuk, GoSend-in sekarang!"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 16,
  },
});
