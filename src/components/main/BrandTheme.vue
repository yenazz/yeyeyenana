<template>
  <section>
    <article>
      <div class="top">
        <div class="title-theme">
          <div class="title">테마별로 만나는 브랜드</div>
          <div class="theme-button">
            <div
              :class="{ active: currentTheme === '무인' }"
              @click="currentTheme = '무인'"
            >
              무인
            </div>
            <div
              :class="{ active: currentTheme === '신생' }"
              @click="currentTheme = '신생'"
            >
              신생
            </div>
            <div
              :class="{ active: currentTheme === '초보' }"
              @click="currentTheme = '초보'"
            >
              초보
            </div>
            <div
              :class="{ active: currentTheme === '배달' }"
              @click="currentTheme = '배달'"
            >
              배달
            </div>
          </div>
        </div>
        <div class="page-button">
          <div class="show-all">
            <router-link to="/theme" class="route">
              전체보기
              <img
                v-if="getDevice === 'mobile'"
                src="../../assets/btn/button3_right.png"
                alt="more"
              />
            </router-link>
          </div>
          <div v-if="getDevice !== 'mobile'" class="button">
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
      <div class="theme-list">
        <StartCostItem
          v-for="item in themeBrandItems"
          :key="item.id"
          :brand-item="item"
        />
      </div>
      <div v-if="getDevice === 'mobile'" class="re-load"></div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import api from '../../config/axios.config'
import { ref, computed, onMounted, watch } from 'vue'
import { useWindowStore } from '~/store/window'
import { storeToRefs } from 'pinia'
import { Brand } from '../../types/brand'
import StartCostItem from '../common/brand/StartCostItem.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const themeBrandItems = ref<Brand[]>([])

const currentTheme = ref<string>('무인')
const page = ref<number>(1)
const nextPage = ref<boolean>(false)
const prevPage = ref<boolean>(false)
const totalCount = ref<number>(0)
const pageNum = computed<number>(() => {
  return getDevice.value === 'pc' ? 10 : getDevice.value === 'tablet' ? 8 : 6
})

const getThemeBrand = async () => {
  const { data } = await api.get(
    `/brand/search/theme/${currentTheme.value}?sortType=p&page=${page.value}&pageNum=${pageNum.value}`
  )

  if (data.success) {
    themeBrandItems.value = data.brand
    nextPage.value = data.page.next
    prevPage.value = data.page.prev
    totalCount.value = data.page.totalCount
  } else {
    alert('테마 브랜드 요청 실패')
  }
}

const changePage = (type: string): void => {
  if (type === '+' && nextPage.value) {
    page.value++
    getThemeBrand()
  }
  if (type === '-' && prevPage.value) {
    page.value--
    getThemeBrand()
  }
}

onMounted(() => {
  getThemeBrand()
})

watch(
  () => getDevice.value,
  () => getThemeBrand()
)

watch(
  () => currentTheme.value,
  () => {
    page.value = 1
    getThemeBrand()
  }
)
</script>

<style lang="scss" scoped>
section {
  article {
    @include pc-container();
    margin-top: 80px;

    .top {
      display: flex;
      justify-content: space-between;
      .title-theme {
        display: flex;
        align-items: center;
        .title {
          font-size: 18px;
          font-weight: 500;
          color: $fontMainColor;
          margin-right: 40px;
        }
        .theme-button {
          display: flex;

          div {
            padding: 4px 12px;
            font-size: 14px;
            color: $fontSubColor;
            cursor: pointer;
            background-color: #f3f3f3;
            border-radius: 50px;
            margin-right: 10px;

            &.active {
              color: #fff;
              background-color: $mainColor;
            }
          }
        }
      }

      .page-button {
        font-size: 12px;
        color: $fontSubColor;
        display: flex;
        align-items: center;
        .show-all {
          cursor: pointer;
          .route {
            text-decoration: none;
            color: inherit;
            display: flex;
            align-items: center;
          }
        }

        .button {
          img {
            width: 30px;
            height: 30px;
            margin-left: 12px;
          }
        }
      }
    }

    .theme-list {
      margin-top: 20px;
      display: grid;
      justify-content: space-between;
      gap: 30px 24px;
      grid-template-columns: repeat(5, calc((100% - 120px) / 5));
    }
  }

  @include tablet {
    article {
      @include tablet-container();
      margin-top: 50px;

      .top {
        display: block;
        width: 100%;
        position: relative;

        .title-theme {
          flex-direction: column;
          align-items: flex-start;

          .title {
            margin: 0;
            line-height: 30px;
          }

          .theme-button {
            width: 100%;
            display: grid;
            gap: 0 24px;
            grid-template-columns: repeat(4, calc((100% - 72px) / 4));
            margin-top: 20px;

            div {
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0;
              padding: 0;
            }
          }
        }

        .page-button {
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      .theme-list {
        margin-top: 20px;
        margin-bottom: 80px;
        display: grid;
        gap: 30px 24px;
        grid-template-columns: repeat(4, calc((100% - 72px) / 4));
      }
    }
  }

  @include mobile {
    article {
      @include mobile-container();
      margin-top: 50px;

      .top {
        display: block;
        width: 100%;
        position: relative;

        .title-theme {
          flex-direction: column;
          align-items: flex-start;

          .title {
            margin: 0;
            line-height: 16px;
          }

          .theme-button {
            width: 100%;
            display: grid;
            gap: 0 24px;
            grid-template-columns: repeat(4, calc((100% - 72px) / 4));
            margin-top: 20px;

            div {
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0;
              padding: 0;
            }
          }
        }

        .page-button {
          position: absolute;
          top: 0;
          right: 0;

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

      .theme-list {
        margin-top: 20px;
        margin-bottom: 80px;
        display: grid;
        gap: 20px 8px;
        grid-template-columns: repeat(3, calc((100% - 16px) / 3));
      }
    }
  }
}
</style>
