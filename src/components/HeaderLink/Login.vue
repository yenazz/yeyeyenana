<template>
  <section>
    <article>
      <div class="title">
        <img
          class="logo"
          v-if="getDevice !== 'mobile'"
          src="../../assets/header/logo.png"
          alt="logo"
        />
        <div class="mobile-title" v-if="getDevice === 'mobile'">
          <img src="../../assets/btn/left_arrow.png" alt="lt-arrow" />
          로그인
        </div>
      </div>

      <div class="select">
        <div class="selec">개인회원</div>
        <div>기업파트너</div>
      </div>

      <div class="id-pw">
        <input
          class="id"
          type="id"
          placeholder="이메일 입력"
          style="font-size: 15px"
        />
        <input
          class="pw"
          type="password"
          placeholder="비밀번호"
          style="font-size: 15px"
        />
      </div>

      <div class="btn">
        <div class="login-btn">로그인</div>
        <div class="find-pw">비밀번호 찾기</div>
      </div>

      <div class="simple">
        <div class="simple-box">
          <div class="simple-title">간편 로그인</div>
          <div class="sns">
            <div class="naver">
              <img src="../../assets/join/naver.png" />
              네이버
            </div>
            <div class="kakao">
              <img src="../../assets/join/kakao.png" />
              카카오
            </div>
            <div class="apple">
              <img src="../../assets/join/apple.png" />
              Apple
            </div>
          </div>
        </div>
      </div>

      <div class="join">
        <p>아직 창업픽 회원이 아니신가요?</p>
        <router-link to="/join" class="route">
          <div class="link">회원가입</div>
        </router-link>
      </div>

      <div class="bottom">
        <img src="../../assets/join/banner.png" alt="banner" />
        <div class="copy">Copyright © nicepick.co.kr. All rights reserved</div>
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
  text-align: center;
  padding: 100px 0;
  .title {
    .logo {
      width: 160px;
      height: 38px;
    }
  }
  .select {
    padding: 40px 0 30px 0;
    display: flex;
    justify-content: center;
    div {
      width: 189px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .selec {
      font-weight: 600;
      border-bottom: 2px solid #191919;
      box-sizing: border-box;
    }
  }
  .id-pw {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    input {
      background-repeat: no-repeat;
      background-size: 12px;
      background-position: 16px center;
      border: 1px solid $inputLine;
      border-radius: 10px;
      padding: 16px 265px 16px 44px;
    }
    input:focus {
      border: 1px solid transparent;
      outline: 1px solid $mainColor;
    }
    input::placeholder {
      color: $inputLine;
    }
    input:focus::placeholder {
      color: #191919;
      font-weight: 500;
    }
    .id {
      background-image: url(../../assets/join/id.png);
    }
    .id:focus {
      background-image: url(../../assets/join/id_select.png);
    }
    .pw {
      background-image: url(../../assets/join/pw.png);
      margin: 8px 0;
    }
    .pw:focus {
      background-image: url(../../assets/join/pw_select.png);
    }
  }
  .btn {
    div {
      cursor: pointer;
    }
    .login-btn {
      background-color: $mainColor;
      display: inline-block;
      color: #fff;
      padding: 15px 168px;
      border-radius: 10px;
    }
    .find-pw {
      font-size: 12px;
      color: #707070;
      margin: 12px 0 44px 0;
    }
  }
  .simple {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
    .simple-box {
      border: 1px solid $sectionLine;
      width: 378px;
      border-left: none;
      border-right: none;
      .simple-title {
        font-size: 14px;
        color: $fontMainColor;
        font-weight: 500;
      }
      .sns {
        padding: 25px 0 16px 0;
        display: flex;
        justify-content: center;
        gap: 9px;
        div {
          width: 120px;
          height: 40px;
          font-size: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          cursor: pointer;
          img {
            width: 30px;
            height: 30px;
          }
        }
        .naver {
          background-color: #19ce61;
          color: #fff;
        }
        .kakao {
          background-color: #ffe500;
          color: #2d1616;
        }
        .apple {
          background-color: #777;
          color: #fff;
        }
      }
    }
  }
  .join {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    color: $fontMainColor;
    .route {
      text-decoration: none;
      .link {
        color: $mainColor;
        border-bottom: 1px solid $mainColor;
        cursor: pointer;
      }
    }
  }
  .bottom {
    img {
      padding: 43px 0 30px 0;
      width: 378px;
      height: 123px;
    }
    .copy {
      font-size: 12px;
      color: $inputLine;
    }
  }
}

@include tablet {
  article {
    @include tablet-container();
    padding: 100px 0;
    .select {
      padding: 20px 0 30px 0;
    }
  }
}

@include mobile {
  article {
    @include mobile-container();
    .mobile-title {
      display: flex;
      align-items: center;
      color: $fontMainColor;
      gap: 8px;
      border-bottom: 1px solid $sectionLine;
      padding: 20px 0;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    .select {
      padding: 0 0 30px 0;
    }
    .id-pw {
      width: 100%;
      input {
        width: 100%;
        padding: 17px 0 17px 44px;
      }
    }
    .btn {
      .login-btn {
        padding: 15px 0;
        width: 100%;
        font-size: 14px;
      }
      .find-pw {
        font-size: 11px;
      }
    }
    .simple {
      .simple-box {
        width: 100%;
        .sns {
          padding: 16px 0;
          div {
            width: 100%;
          }
        }
      }
    }
    .join {
      font-size: 13px;
    }
    .bottom {
      img {
        width: 100%;
        height: 100%;
      }
      .copy {
        font-size: 11px;
        padding-bottom: 37px;
      }
    }
  }
}
</style>
