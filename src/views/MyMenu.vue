<template>
  <main>
    <MyMenu />
    <MyBrandList />
  </main>
</template>

<script lang="ts" setup>
import MyMenu from '../components/HeaderLink/my/MyMenu.vue'
import MyBrandList from '../components/HeaderLink/my/MyBrandList.vue'
</script>

<style lang="scss" scoped>
main {
  @include pc-container();
  display: flex;
  padding: 50px 0 80px 0;
  gap: 30px;
}

@include tablet {
  main {
    @include tablet-container();
    padding-top: 50px;
    gap: 24px;
  }
}

@include mobile {
  main {
    @include mobile-container();
    padding-top: 25px;
  }
}
</style>
