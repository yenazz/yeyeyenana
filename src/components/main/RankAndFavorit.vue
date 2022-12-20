<template>
  <section>
    <article class="search-rank">
      <div class="rank-title">
        <div class="weekly-rank">주간 검색 순위</div>
        <div class="am-update">오전 7시 업데이트</div>
      </div>
      <div class="rank-box">
        <div v-for="item in rankKeyword" :key="item.rank" class="rank-item">
          <span class="rank">{{ item.rank }}</span>
          <span class="name">{{ item.keyword }}</span>
          <div class="variance">
            <img
              v-if="item.variance === 'new'"
              src="../../assets/btn/new.png"
              alt="new"
            />
            <img
              v-else-if="item.variance > 0"
              src="../../assets/btn/up.png"
              alt="up"
            />
            <img
              v-else-if="item.variance === 0"
              src="../../assets/btn/no-change.png"
              alt="no"
            />
            <img v-else src="../../assets/btn/down.png" alt="down" />
          </div>
        </div>
      </div>
    </article>

    <article class="favorit-brand">
      <div class="top">
        <div class="favorit-title">찜 많이 받은 브랜드</div>
        <div v-if="getDevice !== 'mobile'" class="page-btn">
          <div>
            <img
              src="../../assets/btn/button2_left.png"
              alt="prev"
              @click="changePage('-')"
            />
          </div>
          <div>
            <img
              src="../../assets/btn/button2_right.png"
              alt="next"
              @click="changePage('+')"
            />
          </div>
        </div>
      </div>
      <div class="favorit-list">
        <div v-for="item in favoritItem" :key="item.id" class="brand-list">
          <div class="brand-image">
            <img :src="item.brandImg" :alt="item.brandName" />
          </div>
          <div class="brand-info">
            <div
              class="category"
              :style="{
                color: CategoryColor(item.largeCategoryName),
                border: `1px solid ${CategoryColor(item.largeCategoryName)}`,
              }"
            >
              {{ item.smallCategoryName }}
            </div>
            <div class="brand-name">{{ item.brandName }}</div>
            <div class="favorit">
              <img src="../../assets/btn/wish.png" alt="star" />
              {{ item.count.toLocaleString() }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="getDevice === 'mobile'"
        class="favorit-more"
        @click="changePage('+')"
      >
        <img src="../../assets/btn/more.png" alt="more" />
        찜 브랜드 더보기
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../../config/axios.config'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'
import { Brand } from '../../types/brand'
import { CategoryColor } from '~/types/category'

type Rank = {
  keyword: string
  rank: number
  variance: number | string
}
const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const rankKeyword = ref<Rank[]>([])
const lastKeyword = ref<Rank[]>([])

const favoritItem = ref<Brand[]>([])
const nextPage = ref<boolean>(false)
const prevPage = ref<boolean>(false)
const page = ref<number>(1)
const pageNum = computed<number>(() => {
  return getDevice.value === 'pc' ? 12 : getDevice.value === 'tablet' ? 8 : 4
})

const getRank = async () => {
  const { data } = await api.get('/search/rank')

  rankKeyword.value = data.currentRank
  lastKeyword.value = data.lastRank

  rankKeyword.value.map((current) => {
    const test = lastKeyword.value.find(
      (last) => current.keyword === last.keyword
    )
    if (test) {
      current.variance = test.rank - current.rank
    } else {
      current.variance = 'new'
    }
    return current
  })
}

getRank()

const getBrand = async () => {
  const { data } = await api.get(
    `/brand/search/favorite/${page.value}?pageNum=${pageNum.value}`
  )
  favoritItem.value = data.brand
  if (data.success) {
    nextPage.value = data.page.next
    prevPage.value = data.page.prev
  } else {
    alert('찜 많이 받은 브랜드 요청 실패')
  }
}
getBrand()

const changePage = (type: string): void => {
  if (type === '+' && nextPage.value) {
    page.value++
    getBrand()
  } else if (type === '+' && !nextPage.value) {
    page.value = 1
    getBrand()
  }

  if (type === '-' && prevPage.value) {
    page.value--
    getBrand()
  }
}

onMounted(() => {
  getBrand()
})

watch(
  () => getDevice.value,
  () => getBrand()
)
</script>

<style lang="scss" scoped>
section {
  @include pc-container();
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  .search-rank {
    .rank-title {
      width: 276px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 25px;

      .weekly-rank {
        font-size: 18px;
        font-weight: 500;
      }
      .am-update {
        font-size: 12px;
        color: #bcbcbc;
      }
    }
    .rank-box {
      width: 276px;
      height: 515px;
      background-color: #fbfbfb;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      padding: 40px 26px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .rank-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .rank {
          color: #3d50cb;
          font-size: 16px;
          font-weight: bold;
          width: 19px;
        }
        .name {
          flex: 1;
          padding: 0 27px;
          color: $fontMainColor;
          font-size: 14px;
          cursor: pointer;
        }
        .variance {
          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
  .favorit-brand {
    width: 888px;
    margin-left: 30px;
    .top {
      display: flex;
      justify-content: space-between;
      .favorit-title {
        font-size: 18px;
        font-weight: 500;
        color: $fontMainColor;
        padding-bottom: 25px;
      }
      .page-btn {
        display: flex;
        img {
          width: 30px;
          height: 30px;
          padding-left: 12px;
          cursor: pointer;
        }
      }
    }
    .favorit-list {
      width: 100%;
      display: grid;
      gap: 25px 30px;
      grid-template-columns: repeat(3, calc((100% - 60px) / 3));
      .brand-list {
        width: 100%;
        height: 110px;
        display: flex;
        cursor: pointer;
        .brand-image {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          width: 110px;
          height: 100%;
          overflow: hidden;
          img {
            width: 110px;
            height: 110px;
          }
        }
        .brand-info {
          width: 166px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border: 1px solid $iconLine;
          border-left: none;
          padding: 13px 0px 0px 13px;

          .category {
            display: inline-block;
            margin-bottom: 7px;
            font-size: 11px;
            padding: 3px 4px;
            border-radius: 3px;
          }
          .brand-name {
            width: 139px;
            font-size: 13px;
            border-bottom: 1px solid $iconLine;
            padding-bottom: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .favorit {
          display: flex;
          align-items: center;
          font-size: 11px;
          color: #777;
          padding-top: 8px;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}

@include tablet {
  section {
    @include tablet-container();
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    .search-rank {
      .rank-title {
        width: 100%;
        padding-bottom: 20px;
      }
      .rank-box {
        width: 100%;
        height: 245px;
        flex-wrap: wrap;
        padding: 24px 0px;
        align-items: center;
        .rank-item {
          width: calc(100% / 2.5);
          height: calc(100% / 5);
        }
      }
    }
    .favorit-brand {
      padding-top: 54px;
      width: 100%;
      margin-left: 0;
      .favorit-list {
        display: grid;
        gap: 25px 30px;
        grid-template-columns: repeat(2, calc((100% - 24px) / 2));
        .brand-list {
          width: 100%;
          .brand-image {
            img {
              width: 119px;
              height: 119px;
            }
          }
          .brand-info {
            width: 100%;

            .brand-name {
              width: 100%;
              overflow: visible;
            }
          }
          .favorit {
            padding-top: 7px;
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    @include mobile-container();
    flex-direction: column;
    padding-top: 30px;
    .search-rank {
      .rank-title {
        width: 100%;
        padding-bottom: 20px;
        .weekly-rank {
          font-size: 16px;
        }
        .am-update {
          font-size: 10px;
        }
      }
      .rank-box {
        width: 100%;
        height: 380px;
        padding: 28px 33px;
      }
    }
    .favorit-brand {
      padding-top: 54px;
      width: 100%;
      margin-left: 0;
      .favorit-list {
        display: grid;
        gap: 25px 30px;
        grid-template-columns: repeat(1, calc((100% / 1)));
        .brand-list {
          width: 100%;
          .brand-image {
            img {
              width: 119px;
              height: 119px;
            }
          }
          .brand-info {
            width: 100%;
            padding: 16px 0px 0px 12px;

            .brand-name {
              width: 100%;
              overflow: visible;
            }
          }
          .favorit {
            padding-top: 7px;
          }
        }
      }
      .favorit-more {
        color: $mainColor;
        font-size: 13px;
        border: 1px solid $mainColor;
        border-radius: 10px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0px;
        cursor: pointer;
        img {
          width: 20px;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
