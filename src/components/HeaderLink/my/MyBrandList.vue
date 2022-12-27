<template>
  <section>
    <article>
      <div class="ad-box">
        <div class="ad">AD</div>
      </div>

      <div class="wrap">
        <div class="title-box">
          <div class="title">
            <span class="bold">찜한 브랜드</span>
            <span>10/10</span>
          </div>
          <div v-if="getDevice !== 'mobile'" class="btn">
            <img src="../../../assets/btn/button2_left.png" alt="prev" />
            <img src="../../../assets/btn/button2_right.png" alt="next" />
          </div>
        </div>
        <div class="list-box">
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap">
        <div class="title-box">
          <div class="title">
            <span class="bold">내가 본 브랜드</span>
            <span>10/10</span>
          </div>
          <div v-if="getDevice !== 'mobile'" class="btn">
            <img src="../../../assets/btn/button2_left.png" alt="prev" />
            <img src="../../../assets/btn/button2_right.png" alt="next" />
          </div>
        </div>
        <div class="list-box">
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
          </div>
          <div class="brand">
            <img src="../../../assets/my/brand.png" alt="brand" />

            <div class="brand-info">
              <div class="brand-category">교육(외국어)</div>

              <div class="brand-column">
                <div class="brand-name">굽네치킨</div>
                <div class="brand-cost">창업비 10억 1,000만원</div>
                <div class="ft">100㎡</div>
              </div>
            </div>
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
article {
  display: flex;
  flex-direction: column;
  gap: 54px;
  .ad-box {
    background-color: $sectionLine;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    .ad {
      float: right;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 9px;
    }
  }
  .wrap {
    .title-box {
      color: $fontMainColor;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      .title {
        color: $fontMainColor;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        .bold {
          font-size: 18px;
          font-weight: 600;
        }
      }
      .btn {
        display: flex;
        gap: 12px;
        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
    .list-box {
      display: flex;
      gap: 30px;
      .brand {
        img {
          width: 153px;
          height: 153px;
          padding: 24px 0 14px 0;
        }
        .brand-info {
          .brand-category {
            display: inline-block;
            margin-bottom: 7px;
            font-size: 11px;
            padding: 3px 4px;
            border: 1px solid #83ce00;
            border-radius: 3px;
            color: #83ce00;
          }
          .brand-column {
            color: $fontMainColor;
            div {
              padding-bottom: 7px;
            }
            .brand-name {
              font-weight: 700;
            }
            .brand-cost {
              font-size: 12px;
            }
            .ft {
              display: inline-block;
              font-size: 10px;
              padding: 3px 4px;
              background-color: $sectionLine;
              border: 1px solid $iconLine;
              border-radius: 3px;
              color: $fontSubColor;
            }
          }
        }
      }
    }
  }
}

@include tablet {
  article {
    .ad-box {
      width: 100%;
    }
    .wrap {
      .list-box {
        .brand {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
