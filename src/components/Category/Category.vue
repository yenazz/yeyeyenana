<template>
  <section>
    <article class="top">
      <div v-if="getDevice !== 'mobile'" class="title">카테고리</div>
      <div class="large-category">
        <img
          v-if="getDevice === 'mobile'"
          class="left-arrow"
          src="../../assets/btn/left_arrow.png"
          alt="left"
        />
        <!-- {{ selectCategory }} -->
        생활서비스
        <img
          class="down-arrow"
          src="../../assets/btn/button2_down.png"
          alt="down"
        />
      </div>
      <!-- <LargeCategoryBar /> -->
      <div class="small-list">
        <!-- <div v-for="item in smallCategoryList" :key="item.category">
          <div class="small-item">{{ item.categoryName }}</div>
        </div> -->
        <div class="all">전체</div>
        <div>
          <img src="../../assets/category/service_1.png" alt="service1" />
          운송
        </div>
        <div>
          <img src="../../assets/category/service_2.png" alt="service2" />
          미용
        </div>
        <div>
          <img src="../../assets/category/service_3.png" alt="service3" />
          숙박
        </div>
        <div>
          <img src="../../assets/category/service_4.png" alt="service4" />
          기타 서비스
        </div>
        <div>
          <img src="../../assets/category/service_5.png" alt="service5" />
          자동차 관련
        </div>
        <div>
          <img src="../../assets/category/service_6.png" alt="service6" />
          반려동물 관련
        </div>
        <div>
          <img src="../../assets/category/service_7.png" alt="service7" />
          부동산 중개
        </div>
        <div>
          <img src="../../assets/category/service_8.png" alt="service8" />
          임대
        </div>
        <div>
          <img src="../../assets/category/service_9.png" alt="service9" />
          배달
        </div>
        <div>
          <img src="../../assets/category/service_10.png" alt="service10" />
          인력 파견
        </div>
        <div>
          <img src="../../assets/category/service_11.png" alt="service11" />
          세탁
        </div>
        <div>
          <img src="../../assets/category/service_12.png" alt="service12" />
          이사
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
            <span class="total">
              <!-- {{ totalCount }} -->
              24개</span
            >
            브랜드
          </div>
        </div>
        <div class="filter">
          필터<img src="../../assets/btn/filter.png" alt="filter" />
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
import api from '../../config/axios.config'
import StartCostItem from '../common/brand/StartCostItem.vue'
import LargeCategoryBar from '../common/LargeCategory/LargeCategoryBar.vue'

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
  .top {
    @include pc-container();
    padding-top: 50px;
    .title {
      font-size: 12px;
      color: #777;
      padding-bottom: 6px;
    }
    .large-category {
      font-size: 20px;
      color: $fontMainColor;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
      .left-arrow {
        position: absolute;
        left: 5%;
      }
    }
    .small-list {
      font-size: 14px;
      color: #777;
      display: flex;
      gap: 8px;
      padding: 30px 0;
      div {
        display: flex;
        align-items: center;
        border: 1px solid #ebebeb;
        border-radius: 50px;
        padding: 10px 14px;
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
        display: flex;
        font-size: 15px;
        .brand {
          color: $fontMainColor;
          font-weight: 500;
          .total {
            color: $mainColor;
          }
        }
      }
      .filter {
        width: 61px;
        height: 28px;
        border: 1px solid #ebebeb;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #777;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .brand-list {
      @include pc-container();
      display: grid;
      gap: 40px 30px;
      grid-template-columns: repeat(6, calc((100% - 120px) / 6));
      padding: 20px 0 100px 0;
    }
  }
}

@include tablet {
  section {
    .top {
      @include tablet-container();
      padding-top: 50px;
    }
    .recommend-brand {
      .recommend-list {
        @include tablet-container();
        gap: 24px;
      }
    }
    .total-brand {
      .brand-list {
        display: grid;
        gap: 40px 24px;
        grid-template-columns: repeat(4, calc((100% - 72px) / 4));
      }
    }
  }
}

@include mobile {
  section {
    .top {
      @include mobile-container();
      padding-top: 18px;
      .large-category {
        display: flex;
        justify-content: center;
        font-size: 16px;
        .left-arrow {
          width: 30px;
          height: 30px;
        }
      }
      .small-list {
        font-size: 13px;
        padding: 20px 0;
      }
    }
    .recommend-brand {
      height: 210px;
      .top {
        padding-top: 40px;
      }
      .recommend-list {
        @include mobile-container();
        gap: 8px;
        font-size: 13px;
        .brand-image {
          img {
            width: 160px;
            height: 62px;
          }
        }
      }
    }
    .total-brand {
      .top {
        .title {
          font-size: 14px;
          .brand {
            color: $fontMainColor;
            font-weight: 500;
            .total {
              color: $mainColor;
            }
          }
        }
      }
      .brand-list {
        @include mobile-container();
        display: grid;
        gap: 8px 30px;
        grid-template-columns: repeat(3, calc((100% - 16px) / 3));
        margin: 20px 0 100px 0;
      }
    }
  }
}
</style>
