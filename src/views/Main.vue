<template>
  <main>
    <MainBanner />
    <MainCategory />
    <AdBanner />
    <Expect />
    <Hotclip />
    <AdBanner />
    <SearchRank />
    <AdBanner />
    <MainTheme />
    <MainEvent />
    <GuideAndCalculator />
  </main>
</template>

<script lang="ts" setup>
import MainBanner from '../components/main/MainBanner.vue'
import MainCategory from '../components/main/MainCategory.vue'
import AdBanner from '../components/common/AdBanner.vue'
import Expect from '../components/main/BrandExpect.vue'
import Hotclip from '../components/main/BrandHotclip.vue'
import SearchRank from '../components/main/RankAndFavorit.vue'
import MainTheme from '../components/main/BrandTheme.vue'
import MainEvent from '../components/main/MainEvent.vue'
import GuideAndCalculator from '~/components/main/GuideAndCalculator.vue'
</script>

<style lang="scss" scoped></style>
