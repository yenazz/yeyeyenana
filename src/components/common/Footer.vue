<template>
  <footer>
    <section>
      <article class="qna">
        <div class="qna-info">
          <div>고객센터 031-889-0142</div>
          <div>(운영시간 10:00~20:00 주말, 공휴일 휴무)</div>
        </div>
        <div class="footer-images">
          <img src="../../assets/footer/insta.png" alt="인스타그램" />
          <img src="../../assets/footer/kakao.png" alt="카카오톡" />
          <img src="../../assets/footer/you.png" alt="유튜브" />
          <img
            src="../../assets/footer/gstore.png"
            alt="플레이스토어"
            class="hide-image"
          />
          <img
            src="../../assets/footer/astore.png"
            alt="앱스토어"
            class="hide-image"
          />
        </div>
      </article>

      <article class="company-info">
        <div class="footer-link">
          <div>개인정보 수집 및 이용동의</div>
          <div>서비스 이용약관</div>
          <div>마케팅 정보 수신 동의</div>
        </div>
        <div class="info">
          <div>
            (주)삼화이노랩 대표이사 : 원용철 이메일 : nice1pick@gmail.com
          </div>
          <div>
            사업자등록번호 : 242-87-02414 통신판매업 : 제2022 - 서울강남 -
            00663호 서울특별시 강남구 테헤란로 82길15 디아이타워 6층 686
          </div>
          <div>Copyright © nicepick.co.kr. All rights reserved.</div>
        </div>
      </article>
    </section>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
footer {
  height: 200px;
  width: 100%;
  background-color: #fcfcfc;

  section {
    @include pc-container();
    padding: 0px 0 21px 0;

    .qna {
      background-color: #f3f3f3;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      padding: 0 20px;
      box-sizing: border-box;

      .qna-info {
        display: flex;
        align-items: center;

        div {
          font-size: 14px;
          color: $fontMainColor;

          &:last-child {
            font-size: 12px;
            color: $fontSubColor;
            margin-left: 10px;
          }
        }
      }

      .footer-images {
        display: flex;
        align-items: center;

        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          cursor: pointer;
        }
      }
    }

    .company-info {
      margin-top: 20px;
      font-size: 12px;
      color: $fontSubColor;

      .footer-link {
        margin-bottom: 20px;
        cursor: pointer;
        display: flex;

        div {
          &:not(:first-child) {
            &::before {
              content: '|';
              margin: 0 20px;
            }
          }
        }
      }

      .info {
        line-height: 20px;

        div {
          &:last-child {
            font-weight: 600;
          }
        }
      }
    }
  }
  @include tablet {
    section {
      @include tablet-container();
      padding-bottom: 21px;

      .qna {
        .footer-images {
          .hide-image {
            display: none;
          }
        }
      }
    }
  }

  @include mobile {
    section {
      @include mobile-container();

      padding-bottom: 27px;

      .qna {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;

        .qna-info {
          flex-direction: column;
          line-height: 20px;
          margin-bottom: 20px;
        }

        .footer-images {
          .hide-image {
            display: none;
          }
        }
      }

      .company-info {
        font-size: 11px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .footer-link {
          div {
            &:not(:first-child) {
              &::before {
                content: '|';
                margin: 0 6px;
              }
            }
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;

          div:nth-child(2) {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
