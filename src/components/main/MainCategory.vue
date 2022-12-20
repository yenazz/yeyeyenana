<template>
  <section>
    <router-link to="/category" class="route">
      <article v-if="category.length > 0">
        <div class="item-wrapper">
          <div v-for="index in 5" :key="index" class="category-item">
            <img
              :src="category[index - 1].mainImg"
              :alt="category[index - 1].categoryName"
            />
            <div>{{ category[index - 1].categoryName }}</div>
          </div>
        </div>

        <div class="item-wrapper">
          <div v-for="index in 5" :key="index" class="category-item">
            <img
              :src="category[index + 5 - 1].mainImg"
              :alt="category[index + 5 - 1].categoryName"
            />
            <div>{{ category[index + 5 - 1].categoryName }}</div>
          </div>
        </div>
      </article>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from '~/config/axios.config'
import { LargeCategory } from '~/types/category'

const category = ref<LargeCategory[]>([])

onMounted(async () => {
  const { data } = await api.get('/category')
  category.value = data.largeCategory
})
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 30px;
  text-decoration: none;
  .route {
    text-decoration: none;
    article {
      @include pc-container();
      display: flex;
      justify-content: space-between;
      .item-wrapper {
        display: flex;
        .category-item {
          width: 119px;
          height: 110px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 15px;
          font-weight: 400;
          color: $fontMainColor;
          img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  @include tablet {
    .route {
      article {
        @include tablet-container();
        margin-top: 30px;
        justify-content: flex-start;
        width: 100%;
        .item-wrapper {
          width: 100%;
          justify-content: center;
          .category-item {
            font-size: 12px;
            width: 100%;
            height: auto;
            padding-top: 8px;
            img {
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }

  @include mobile {
    .route {
      article {
        @include mobile-container();
        margin-top: 30px;
        flex-direction: column;
        justify-content: space-between;

        .item-wrapper {
          justify-content: space-between;
          padding: 0 20px;

          &:first-child {
            .category-item {
              margin-bottom: 14px;
            }
          }
          .category-item {
            font-size: 11px;
            height: auto;
            width: 40px;

            div {
              text-align: center;
              word-break: break-all;
            }

            img {
              width: 40px;
              height: 40px;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
