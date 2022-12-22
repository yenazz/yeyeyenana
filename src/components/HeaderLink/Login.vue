<template>
  <section>
    <article>
      <div class="logo">
        <img src="../../assets/header/logo.png" alt="logo" />
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
        <div class="simple-border"></div>
        <div class="simple-title">간편 로그인</div>
        <div class="sns">
          <div class="naver">
            <img src="../../assets/join/naver.png" alt="naver" />
            네이버
          </div>
          <div class="kakao">
            <img src="../../assets/join/kakao.png" alt="kakao" />
            카카오
          </div>
          <div class="apple">
            <img src="../../assets/join/apple.png" alt="apple" />
            Apple
          </div>
        </div>
        <div class="simple-border"></div>
      </div>

      <div class="join">
        <p>아직 창업픽 회원이 아니신가요?</p>
        <div class="link">회원가입</div>
      </div>

      <div class="bottom">
        <img src="../../assets/join/banner.png" alt="banner" />
        <div class="copy">Copyright © nicepick.co.kr. All rights reserved</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selecLogin = ref<string>('개인')
</script>

<style lang="scss" scoped>
article {
  text-align: center;
  padding: 100px;
  .logo {
    img {
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
      background-size: 20px;
      background-position: 16px center;
      border: 1px solid $inputLine;
      border-radius: 10px;
      padding: 16px 265px 16px 44px;
    }
    input:focus {
      border: 1px solid transparent;
      outline: 1px solid $mainColor;
    }
    .id {
      background-image: url(../../assets/join/id.png);
    }
    .pw {
      background-image: url(../../assets/join/pw.png);
      margin: 8px 0;
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
    font-size: 14px;
    color: $fontMainColor;
    .simple-border {
      border: 1px solid $sectionLine;
    }
    .sns {
      padding: 16px 0 32px 0;
      display: flex;
      justify-content: center;
      gap: 9px;
      div {
        width: 120px;
        height: 40px;
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
  .join {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    color: $fontMainColor;
    .link {
      color: $mainColor;
      cursor: pointer;
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
</style>
