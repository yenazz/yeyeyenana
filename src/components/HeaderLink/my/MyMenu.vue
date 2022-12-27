<template>
  <section>
    <article>
      <div class="profile">
        <div class="profile-wrap">
          <div class="profile-left">
            <img src="../../../assets/my/profile.png" alt="profile" />
            <p class="name">홍길동님</p>
            <p class="email">abc123@gmail.com</p>
          </div>
          <div class="profile-right">
            <button>
              <img src="../../../assets/my/setting.png" alt="setting" />
              내정보 관리
            </button>
          </div>
        </div>
      </div>
      <div class="my-category">
        <div class="category-wrap">
          <p>문의내역</p>
          <p>수익성계산기</p>
          <p>로그아웃</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 41px;
  .profile {
    width: 276px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid $sectionLine;
    .profile-wrap {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .profile-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        img {
          width: 50px;
          height: 50px;
        }
        .name {
          color: $fontMainColor;
          font-weight: 600;
        }
        .email {
          font-size: 14px;
          color: $fontSubColor;
        }
      }
      .profile-right {
        display: flex;
        justify-content: center;
        button {
          width: 100px;
          height: 30px;
          display: flex;
          align-items: center;
          background-color: #fff;
          border: 1px solid $sectionLine;
          border-radius: 50px;
          gap: 5px;
          font-size: 11px;
          color: $fontSubColor;
          font-family: pretendard;
          cursor: pointer;
          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .my-category {
    display: flex;
    .category-wrap {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 22px;
      p {
        font-size: 15px;
        color: $fontMainColor;
        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    .profile {
      width: 152px;
    }
  }
}
</style>
