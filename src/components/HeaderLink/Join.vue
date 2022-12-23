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
        <div class="mobile-title">
          <img
            v-if="getDevice === 'mobile'"
            class="mobile-arrow"
            src="../../assets/btn/left_arrow.png"
            alt="lt-arrow"
          />
          개인회원가입
        </div>
      </div>

      <div class="simple">
        <div class="simple-box">
          <div class="simple-title">소셜 간편 가입</div>
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

      <div class="info-input">
        <div class="input-box">
          <div class="input-width">
            <div class="email">
              <p>이메일</p>
              <div class="input-border">
                <input type="email" placeholder="아이디@도메인 입력" />
              </div>
            </div>

            <div class="pw">
              <p>비밀번호</p>
              <div class="input-border">
                <input
                  type="password"
                  placeholder="비밀번호 입력(영문+숫자+특수문자 8-16자)"
                />
              </div>
              <div class="input-border">
                <input type="password" placeholder="비밀번호 확인" />
              </div>
            </div>

            <div class="name">
              <p>이름</p>
              <div class="input-border">
                <input type="text" placeholder="2자 이상 입력" />
              </div>
            </div>

            <div class="gender">
              <p>성별</p>
              <div class="gender-btn">
                <button>남자</button>
                <button>여자</button>
              </div>
            </div>

            <div class="birth">
              <p>생년월일(6자리)</p>
              <div class="input-border">
                <input type="text" placeholder="220101" />
              </div>
            </div>

            <div class="phone">
              <p>전화번호</p>
              <div class="input-border">
                <input type="text" placeholder="'-'제외 숫자만 입력" />
              </div>
            </div>
          </div>

          <div class="clause">
            <p>약관동의</p>
            <div class="clause-box">
              <div class="check-title">
                <div class="all">
                  전체 동의<input type="checkbox" value="all" />
                </div>
                <div class="check-between">
                  <div class="fourteen">
                    (필수) 만 14세 이상 확인<input type="checkbox" />
                  </div>
                  <div class="service">
                    (필수) 서비스 이용 약관 동의<input type="checkbox" />
                  </div>
                  <div class="privacy">
                    (필수) 개인정보 수집 이용 동의<input type="checkbox" />
                  </div>
                  <div class="receive">
                    (선택) 창업 정보 및 이벤트 정보 수신 동의<input
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/joincomplete" class="complete">
            회원가입 완료
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
  text-align: center;
  padding: 100px 0;
  .title {
    .logo {
      width: 160px;
      height: 38px;
    }
    .mobile-title {
      padding: 40px 0 21px 0;
      font-weight: 600;
      color: $fontMainColor;
    }
  }

  .simple {
    display: flex;
    justify-content: center;
    .simple-box {
      border: 1px solid $sectionLine;
      width: 378px;
      border-left: none;
      border-right: none;
      .simple-title {
        font-size: 14px;
        color: $fontMainColor;
        font-weight: 500;
        text-align: left;
        padding-top: 30px;
      }
      .sns {
        padding: 8px 0 30px 0;
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

  .info-input {
    display: flex;
    justify-content: center;
    .input-box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .input-width {
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        gap: 30px;
        .input-border {
          border: 1px solid $inputLine;
          border-radius: 10px;
          height: 50px;
          display: flex;
          padding: 0 16px;
          input {
            width: 100%;
            height: 48px;
            border: none;
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            font-size: 15px;
            color: $inputLine;
          }
        }
        .pw {
          display: flex;
          flex-direction: column;
          gap: 8px;
          p {
            padding: 0;
          }
        }
        .gender {
          .gender-btn {
            display: flex;
            gap: 32px;
            button {
              width: 100%;
              background-color: #fff;
              border: 1px solid $inputLine;
              border-radius: 10px;
              height: 50px;
              font-size: 15px;
              font-family: pretendard;
              color: $inputLine;
              cursor: pointer;
            }
          }
        }
      }
      p {
        text-align: left;
        padding-bottom: 8px;
        font-size: 14px;
      }

      .clause {
        .clause-box {
          border: 1px solid $inputLine;
          border-radius: 10px;
          color: #777;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 16px 14px 16px;
          .check-title {
            width: 100%;
            div {
              display: flex;
              font-size: 13px;
            }
            .all {
              font-size: 15px;
              border-bottom: 1px solid $sectionLine;
              padding-bottom: 16px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .check-between {
              display: flex;
              flex-direction: column;
              gap: 12px;
              padding-top: 14px;
              div {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            }
          }
        }
      }
      .complete {
        height: 50px;
        background-color: $mainColor;
        border-radius: 10px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    .info-input {
      .input-box {
        .input-width {
          .gender {
            .gender-btn {
              gap: 24px;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  article {
    @include mobile-container();
    padding: 30px;
    .title {
      .mobile-title {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 0 21px 0;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }

    .simple {
      .simple-box {
        width: 100%;
        .sns {
          div {
            width: 100%;
          }
        }
      }
    }

    .info-input {
      .input-box {
        width: 100%;
        .input-width {
          input {
            width: 100%;
          }
          .gender {
            .gender-btn {
              gap: 8px;
            }
          }
        }
        .clause {
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
