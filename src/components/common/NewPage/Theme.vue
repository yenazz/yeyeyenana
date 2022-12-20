<template>
  <section>
    <article class="top">
      <div class="title">
        <div class="title-small">테마별로 만나는 브랜드</div>
        <div class="title-big">
          <!-- {{ selectThemeTitle }} -->
          무인창업, 지금은 언택트 시대!
        </div>
      </div>
      <div class="theme-category">
        <div>
          <img src="../../../assets/btn/unmanned_theme.png" alt="unmanned" />
          무인
        </div>
        <div>
          <img src="../../../assets/btn/new_theme.png" alt="new" />
          신생
        </div>
        <div>
          <img src="../../../assets/btn/begginer_theme.png" alt="begginer" />
          초보
        </div>
        <div>
          <img src="../../../assets/btn/delivery_theme.png" alt="delivery" />
          배달
        </div>
      </div>
    </article>

    <article class="recommend-brand">
      <div class="top">
        <div class="title">추천 브랜드</div>
        <div class="ad">AD</div>
      </div>
      <div class="recommend-list">
        <div v-for="item in recommendItem" :key="item.id">
          <div class="brand-image">
            <img :src="item.brandImg" :alt="item.brandName" />
          </div>
          <div class="brand-info">
            <div
              class="brand-category"
              :style="{
                color: CategoryColor(brandItem.largeCategoryName),
                border: `1px solid ${CategoryColor(
                  brandItem.largeCategoryName
                )}`,
              }"
            >
              <div>{{ item.smallCategoryName }}</div>
            </div>
            <div class="brand-name">
              <div>{{ item.brandName }}</div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="total-brand">
      <div class="top">
        <div class="title">
          <div class="brand">
            <span>
              <!-- {{ totalCount }} -->
              개</span
            >
            브랜드
          </div>
        </div>
        <div class="filter">
          필터<img src="../../../assets/btn/filter.png" alt="filter" />
        </div>
      </div>
      <div class="brand-list">
        <StartCostItem
          v-for="item in brandItem"
          :key="item.id"
          :brand-item="item"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useWindowStore } from '~/store/window'
import { Brand } from '~/types/brand'
import { CategoryColor } from '~/types/category'
import api from '../../../config/axios.config'
import StartCostItem from '../brand/StartCostItem.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const smallCategoryList = ref<string>()
const recommendItem = ref<Brand[]>([])
const brandItem = ref<Brand[]>([])

const getSmall = async () => {
  const { data } = await api.get('/category')
  smallCategoryList.value = data.smallCategory
}
getSmall()

const getRecommend = async () => {
  const { data } = await api.get('/brand/search/recommend/brand?keyword=.')
  recommendItem.value = data.brand
}
getRecommend()

const getBrand = async () => {
  const { data } = await api.get(
    `/brand/search/category?l=%EC%83%9D%ED%99%9C%EC%84%9C%EB%B9%84%EC%8A%A4&sortType=p&type=l&page=.`
  )
  brandItem.value = data.brand
}
getBrand()
</script>

<style lang="scss" scoped>
section {
  padding: 50px 0 100px 0;
  .top {
    @include pc-container();
    .title {
      .title-small {
        font-size: 12px;
        color: $fontSubColor;
      }
      .title-big {
        font-size: 20px;
        color: $fontMainColor;
        font-weight: 500;
        padding: 6px 0 30px 0;
      }
    }
    .theme-category {
      display: flex;
      gap: 8px;
      div {
        padding: 10px 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        border: 1px solid $iconLine;
        border-radius: 50px;
        color: $fontSubColor;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .recommend-brand {
    background-color: #f8fafd;
    height: 230px;
    margin: 30px 0 60px 0;
    .top {
      display: flex;
      padding-top: 47px;
      gap: 4px;
      .title {
        font-size: 16px;
        color: $fontMainColor;
        font-weight: 500;
      }
      .ad {
        font-size: 10px;
        color: #fff;
        background-color: #bcbcbc;
        width: 24px;
        height: 16px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .recommend-list {
      @include pc-container();
      display: flex;
      font-size: 14px;
      gap: 30px;
      overflow: hidden;
      cursor: pointer;
      .brand-image {
        img {
          width: 174px;
          height: 68px;
          padding: 20px 0 10px 0;
        }
      }
      .brand-info {
        display: flex;
        gap: 8px;
        .brand-category {
          border-radius: 3px;
          font-size: 11px;
          display: flex;
          align-items: center;
        }
        .brand-name {
          div {
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  .total-brand {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 15px;
        color: $fontMainColor;
        font-weight: 500;
        span {
          color: $mainColor;
        }
      }
      .filter {
        font-size: 12px;
        color: $fontSubColor;
        display: flex;
        align-items: center;
        border: 1px solid $iconLine;
        padding: 4px 10px;
        border-radius: 10px;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

@include tablet {
  section {
    .top {
    }
  }
}
</style>
