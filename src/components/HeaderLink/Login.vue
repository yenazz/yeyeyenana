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
        <div class="id-pw-box">
          <div class="id-pw-input">
            <div class="input-border">
              <img src="../../assets/join/id.png" alt="id" />
              <input type="id" placeholder="이메일 입력" />
            </div>
            <div class="input-border">
              <img src="../../assets/join/pw.png" alt="pw" />
              <input class="pw" type="password" placeholder="비밀번호" />
            </div>
          </div>

          <div class="btn">
            <div class="btn-box">
              <button class="login-btn">로그인</button>
              <div class="pw-btn">
                <router-link to="/findpw" class="find-link">
                  비밀번호 찾기
                </router-link>
              </div>
            </div>
          </div>
        </div>
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
    .id-pw-box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      .id-pw-input {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .input-border {
          border: 1px solid $inputLine;
          border-radius: 10px;
          display: flex;
          align-items: center;
          height: 50px;
          padding: 0 16px;
          gap: 8px;
          img {
            width: 20px;
            height: 20px;
          }
          input {
            display: flex;
            width: 100%;
            height: 48px;
            border: none;
            font-size: 15px;
          }
          input::placeholder {
            color: $inputLine;
          }
          input:focus {
            outline: none;
          }
        }
      }
      .btn {
        .btn-box {
          display: flex;
          justify-content: center;
          flex-direction: column;
          .login-btn {
            height: 50px;
            border-radius: 10px;
            border: none;
            background-color: $mainColor;
            color: #fff;
            font-size: 16px;
            font-family: pretendard;
            cursor: pointer;
          }
          .pw-btn {
            padding: 12px 0 44px 0;
            .find-link {
              font-size: 12px;
              color: #707070;
              text-decoration: none;
            }
          }
        }
      }
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
      .id-pw-box {
        width: 100%;
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
