<template>
  <section>
    <article>
      <div v-if="getDevice === 'pc'" class="pc-wrap">
        <div class="guide">
          <img src="../../assets/banner/guide.png" alt="guide" />
        </div>
        <div class="calculator">
          <router-link to="/calculator">
            <img src="../../assets/banner/calculator.png" alt="calculator" />
          </router-link>
        </div>
      </div>
      <div v-if="getDevice !== 'pc'" class="tm-wrap">
        <div class="guide">
          <img src="../../assets/banner/guide_tab.png" alt="guide" />
        </div>
        <div class="calculator">
          <router-link to="/calculator">
            <img
              src="../../assets/banner/calculator_tab.png"
              alt="calculator"
            />
          </router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useWindowStore } from '~/store/window'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
section {
  @include pc-container();
  article {
    padding: 80px 0px 76px 0px;
    .pc-wrap {
      display: flex;
      justify-content: space-between;
      div {
        img {
          cursor: pointer;
          width: 582px;
        }
      }
    }
  }
}

@include tablet {
  section {
    @include tablet-container();
    article {
      padding: 50px 0px;
      .tm-wrap {
        display: grid;
        gap: 0 30px;
        grid-template-columns: repeat(2, calc((100% - 24px) / 2));
        div {
          img {
            width: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    @include mobile-container();
    article {
      padding: 50px 0px;
      display: flex;
      justify-content: center;
      .tm-wrap {
        div {
          img {
            width: 100%;
            padding-bottom: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
