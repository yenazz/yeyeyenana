<template>
  <section>
    <article>
      <div class="top">
        <div class="title">앞으로 기대되는 유망 브랜드</div>
        <div class="page">
          <div class="show-all">
            전체보기<img
              v-if="getDevice === 'mobile'"
              src="../../assets/btn/button3_right.png"
              alt="more"
            />
          </div>
          <div v-if="getDevice !== 'mobile'" class="page-button">
            <img
              src="../../assets/btn/button2_left.png"
              alt="prev"
              :style="{ cursor: prevPage ? 'pointer' : 'default' }"
              @click="changePage('-')"
            />
            <img
              src="../../assets/btn/button2_right.png"
              alt="next"
              :style="{ cursor: nextPage ? 'pointer' : 'default' }"
              @click="changePage('+')"
            />
          </div>
        </div>
      </div>
      <article class="list">
        <StartCostItem
          v-for="brandItem in brandItems"
          :key="brandItem.id"
          :brand-item="brandItem"
        />
      </article>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useWindowStore } from '~/store/window'
import StartCostItem from '../common/brand/StartCostItem.vue'
import api from '../../config/axios.config'
import { Brand } from '../../types/brand'
import { computed, onMounted, ref, watch } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const brandItems = ref<Brand[]>([])
const nextPage = ref<boolean>(false)
const prevPage = ref<boolean>(false)
const page = ref<number>(1)
const pageNum = computed<number>(() => {
  return getDevice.value === 'pc' ? 12 : getDevice.value === 'tablet' ? 8 : 6
})

const getBrandItems = async () => {
  const { data } = await api.get(
    `/brand/search/main/ad/${page.value}?pageNum=${pageNum.value}`
  )

  if (data.success) {
    brandItems.value = data.brand
    nextPage.value = data.page.next
    prevPage.value = data.page.prev
  } else {
    alert('브랜드 요청 실패')
  }
}

const changePage = (type: string): void => {
  if (type === '+' && nextPage.value) {
    page.value++
    getBrandItems()
  }
  if (type === '-' && prevPage.value) {
    page.value--
    getBrandItems()
  }
}

onMounted(() => {
  getBrandItems()
})

watch(
  () => getDevice.value,
  () => {
    getBrandItems()
  }
)
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 80px;
  article {
    @include pc-container();
    margin-top: 50px;

    &.list {
      margin-top: 20px;
      display: grid;
      gap: 30px 24px;
      grid-template-columns: repeat(6, calc((100% - 120px) / 6));
    }

    .top {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 18px;
        font-weight: 500;
        color: $fontMainColor;
      }

      .page {
        display: flex;
        align-items: center;
        .show-all {
          font-size: 12px;
          font-weight: 400;
          color: $fontSubColor;
          cursor: pointer;
        }

        .page-button {
          img {
            width: 30px;
            height: 30px;
            margin-left: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
  @include tablet {
    article {
      @include tablet-container();
      &.list {
        gap: 30px 24px;
        grid-template-columns: repeat(4, calc((100% - 72px) / 4));
      }
    }
  }

  @include mobile {
    article {
      @include mobile-container();
      &.list {
        gap: 20px 8px;
        grid-template-columns: repeat(3, calc((100% - 16px) / 3));
      }

      .top {
        .title {
          font-size: 16px;
        }
        .page {
          .show-all {
            display: flex;
            align-items: center;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
