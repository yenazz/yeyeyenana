<template>
  <section>
    <article>
      <div class="welcome">
        <img src="../../assets/join/welcome.png" alt="welcome" />
      </div>

      <div class="complete">
        <div class="complete-title">개인회원가입 완료!</div>
        <div class="complete-message">
          환영합니다! 홍길동님
          <br />
          창업픽 가입이 완료되었습니다.
        </div>
      </div>

      <div class="btn">
        <router-link to="/main" class="home-link">
          <div class="home">홈으로</div>
        </router-link>
        <div class="consult">무료 창업 상담 받기</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
article {
  padding: 200px 0 400px 0;
  text-align: center;
  .welcome {
    img {
      width: 328px;
      height: 107px;
    }
  }

  .complete {
    padding: 48px 0 50px 0;
    display: flex;
    flex-direction: column;
    gap: 26px;
    .complete-title {
      font-size: 20px;
      font-weight: 500;
    }
    .complete-message {
      font-size: 15px;
      color: $fontSubColor;
      line-height: 24px;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    div {
      width: 378px;
      height: 50px;
      border: 1px solid $mainColor;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .home-link {
      text-decoration: none;
      .home {
        background-color: $mainColor;
        color: #fff;
      }
    }

    .consult {
      background-color: #fff;
      color: $mainColor;
    }
  }
}

@include tablet {
  article {
    .btn {
      div {
        width: 376px;
      }
    }
  }
}

@include mobile {
  article {
    padding: 170px 24px;
    .welcome {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .complete {
      .complete-title {
        font-size: 18px;
      }
      .complete-message {
        font-size: 13px;
      }
    }

    .btn {
      div {
        width: 100%;
        font-size: 14px;
      }
      .home-link {
        width: 100%;
      }
    }
  }
}
</style>
