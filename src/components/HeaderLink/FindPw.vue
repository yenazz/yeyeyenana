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
            비밀번호 찾기
          </div>
        </div>
      </div>

      <div class="find-input">
        <div class="input-box">
          <div class="email">
            <p>이메일</p>
            <div class="input-column">
              <div class="input-border">
                <input type="email" placeholder="이메일@도메인 입력" />
              </div>
              <button class="send">인증번호 전송</button>
            </div>
          </div>
          <div class="number">
            <p>인증번호</p>
            <div class="input-column">
              <div class="input-border">
                <input type="text" placeholder="인증번호 입력" />
              </div>
              <router-link to="/resetpw" class="ok">
                <button>확인</button>
              </router-link>
            </div>
          </div>
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

  .find-input {
    display: flex;
    justify-content: center;
    .input-box {
      width: 378px;
      display: flex;
      flex-direction: column;
      p {
        font-size: 14px;
        color: $fontMainColor;
        padding: 30px 0 8px 0;
      }
      .input-column {
        display: flex;
        flex-direction: column;
        gap: 8px;
        button {
          height: 50px;
          border-radius: 10px;
          border: none;
          font-size: 16px;
          font-family: pretendard;
          color: #fff;
          cursor: pointer;
        }
        .send {
          background-color: $fontMainColor;
        }
        .ok {
          width: 100%;
          button {
            width: 100%;
            background-color: $mainColor;
          }
        }
      }
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
        }
        input:focus {
          outline: none;
        }
      }
    }
  }
}

@include mobile {
  article {
    @include mobile-container();
    padding-bottom: 368px;
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
    .find-input {
      .input-box {
        width: 100%;
        .input-column {
          button {
            font-size: 14px;
          }
        }
        .input-border {
          input::placeholder {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
