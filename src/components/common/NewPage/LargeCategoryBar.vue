<template>
  <section>
    <article>
      <div v-if="getDevice === 'mobile'" class="top">
        생활서비스
        <img class="up" src="../../../assets/btn/button2_up.png" alt="up" />
        <img class="close" src="../../../assets/btn/x.png" alt="close" />
      </div>
      <div v-for="item in largeCategoryList" :key="item.category">
        <div class="large-item">{{ item.categoryName }}</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import api from '../../../config/axios.config'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '~/store/window'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const largeCategoryList = ref<string>()

const getCategory = async () => {
  const { data } = await api.get('/category')
  largeCategoryList.value = data.largeCategory
}
getCategory()
</script>

<style lang="scss" scoped>
article {
  font-size: 14px;
  color: #777;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px 68px 16px 16px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  .large-item {
    cursor: pointer;
  }
}

@include mobile {
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 2;
    article {
      font-size: 13px;
      background-color: #fff;
      width: 100%;
      height: 250px;
      margin-top: 60px;
      border-radius: 0;
      padding: 0;
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        color: $fontMainColor;
        font-weight: 500;
        border-bottom: 1px solid $sectionLine;
        padding: 18px 0;
        .up {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        .close {
          width: 30px;
          height: 30px;
          position: absolute;
          right: 5%;
          cursor: pointer;
        }
      }
      .large-item {
      }
    }
  }
}
</style>
