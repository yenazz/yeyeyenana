<template>
  <section>
    <article>
      <div class="top">
        <div class="title">이벤트</div>
        <div class="page-button">
          <div class="show-all-m">
            전체보기
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/btn/button3_right.png"
              alt="more"
            />
          </div>
          <div v-if="getDevice !== 'mobile'" class="button">
            <img src="../../assets/btn/button2_left.png" alt="prev" />
            <img src="../../assets/btn/button2_right.png" alt="next" />
          </div>
        </div>
      </div>
      <div class="event-banner">
        <div class="event">
          <div class="banner">
            <img src="../../assets/banner/event1.png" alt="event1" />
          </div>
          <div class="event-info">
            <p class="event-title">대국민 월세 지원 이벤트</p>
            <p class="event-date">2022.06.01 ~ 2022.12.31</p>
          </div>
        </div>
        <div class="event">
          <div class="banner">
            <img src="../../assets/banner/event2.png" alt="event2" />
          </div>
          <div class="event-info">
            <p class="event-title">2022 카타르 월드컵 응원댓글 이벤트</p>
            <p class="event-date">2022.11.07 ~ 2022.12.03</p>
          </div>
        </div>
        <div class="event">
          <div class="banner">
            <img src="../../assets/banner/event3.png" alt="event3" />
          </div>
          <div class="event-info">
            <p class="event-title">My공인중개사 사전가입 이벤트</p>
            <p class="event-date">2022.06.16 ~ 2022.07.30</p>
          </div>
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
  article {
    @include pc-container();
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 84px 0px 25px 0px;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: $fontMainColor;
      }
      .page-button {
        font-size: 12px;
        color: $fontSubColor;
        display: flex;
        align-items: center;
        .button {
          img {
            width: 30px;
            height: 30px;
            margin-left: 12px;
          }
        }
      }
    }
    .event-banner {
      display: grid;
      gap: 0 30px;
      grid-template-columns: repeat(3, calc((100% - 60px) / 3));
      .event {
        cursor: pointer;
        img {
          width: 100%;
        }
        .event-info {
          margin-top: 10px;
          .event-title {
            font-size: 14px;
            color: $fontMainColor;
            padding-bottom: 7px;
          }
          .event-date {
            font-size: 12px;
            color: $inputLine;
          }
        }
      }
    }
  }
}

@include tablet {
  section {
    article {
      @include tablet-container();
      .event-banner {
        .event {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    border-top: 6px solid $sectionLine;
    border-bottom: 6px solid $sectionLine;
    padding-bottom: 30px;
    article {
      width: 100%;
      display: block;
      .top {
        @include mobile-container();
        margin: 30px 0px 21px 0px;
        .title {
          font-size: 16px;
        }
        .page-button {
          .show-all-m {
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .event-banner {
        @include mobile-container();
        display: grid;
        gap: 0 8px;
        grid-template-columns: repeat(3, calc((100% - 24px) / 2));
        overflow: hidden;
        .event {
          display: inline-block;
          .event-info {
            .event-title {
              font-size: 13px;
            }
            .event-date {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
