<template>
  <section>
    <article>
      <div class="title">
        <div class="title-box">
          <img
            v-if="getDevice !== 'mobile'"
            class="logo"
            src="../../assets/header/logo.png"
            alt="logo"
          />
          <div class="mobile-title">
            <img
              v-if="getDevice === 'mobile'"
              class="mobile-arrow"
              src="../../assets/btn/left_arrow.png"
              alt="lt-arrow"
            />
            비밀번호 재설정
          </div>
        </div>
      </div>

      <div class="reset-input">
        <div class="input-box">
          <div class="reset">
            <div class="input-border">
              <input
                type="password"
                placeholder="새로운 비밀번호 입력(영문+숫자+특수문자 8-16자)"
              />
            </div>
            <div class="input-border">
              <input type="password" placeholder="새로운 비밀번호 입력" />
            </div>
          </div>
          <router-link to="/resetpwcomplete" class="ok">
            <button>확인</button>
          </router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '~/store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
article {
  padding: 100px 0 500px 0;
  .title {
    display: flex;
    justify-content: center;
    text-align: center;
    .title-box {
      width: 378px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .logo {
        width: 160px;
        height: 38px;
      }
      .mobile-title {
        width: 100%;
        font-weight: 500;
        padding: 40px 0 21px 0;
        border-bottom: 1px solid $sectionLine;
      }
    }
  }

  .reset-input {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    .input-box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .reset {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .input-border {
          border: 1px solid $inputLine;
          border-radius: 10px;
          padding: 0 16px;
          input {
            padding: 0;
            width: 100%;
            height: 48px;
            border: none;
          }
          input::placeholder {
            color: $inputLine;
            font-family: pretendard;
            font-size: 15px;
          }
          input:focus {
            outline: none;
          }
        }
      }
      .ok {
        display: flex;
        justify-content: center;
        text-decoration: none;
        button {
          font-family: pretendard;
          font-size: 16px;
          width: 378px;
          height: 50px;
          background-color: $mainColor;
          border: none;
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}

@include mobile {
  article {
    @include mobile-container();
    padding-bottom: 470px;
    .title {
      .title-box {
        width: 100%;
        .mobile-title {
          font-weight: normal;
          color: $fontMainColor;
          padding: 15px 0;
          display: flex;
          align-items: center;
          gap: 8px;
          img {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
      }
    }
    .reset-input {
      .input-box {
        width: 100%;
        .reset {
          .input-border {
            input::placeholder {
              font-size: 13px;
            }
          }
        }
        .ok {
          width: 100%;
          button {
            width: 100%;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
