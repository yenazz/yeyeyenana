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
            <p>이메일</p>
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
          <router-link to="" class="ok">
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
}
</style>
