<template>
  <section class="side-menu-bar" @click="$emit('showAndCloseSideBar')">
    <div class="side-menu" @click.stop>
      <div class="side-menu-top menu">
        <div><button>기업 홈</button></div>
        <div>
          <img
            src="../../assets/close/close.png"
            alt="close"
            @click="$emit('showAndCloseSideBar')"
          />
        </div>
      </div>
      <div class="menu drop-down-menu" @click="showDropdown(0)">
        <div class="drop-down">
          <div>브랜드</div>
          <div>
            <img
              v-if="!isShowDropDown[0]"
              src="../../assets/arrow/down.png"
              alt="down"
            />
            <img v-else src="../../assets/arrow/up.png" alt="up" />
          </div>
        </div>
        <div v-if="isShowDropDown[0]" class="drop-down-menu-list" @click.stop>
          <div v-for="item in subMenu['브랜드']" :key="item.menuName">
            {{ item.menuName }}
          </div>
        </div>
      </div>
      <div class="menu drop-down-menu" @click="showDropdown(1)">
        <div class="drop-down">
          <div>상권분석</div>
          <div>
            <img
              v-if="!isShowDropDown[1]"
              src="../../assets/arrow/down.png"
              alt="down"
            />
            <img v-else src="../../assets/arrow/up.png" alt="up" />
          </div>
        </div>
        <div v-if="isShowDropDown[1]" class="drop-down-menu-list" @click.stop>
          <div v-for="item in subMenu['상권분석']" :key="item.menuName">
            {{ item.menuName }}
          </div>
        </div>
      </div>
      <div class="menu">
        <div>
          창업톡<img
            id="communityImg"
            src="../../assets/header/community.png"
            alt="community"
          />
        </div>
      </div>
      <div class="menu">
        <div>창업문의</div>
      </div>
      <div class="menu">
        <div>오늘 뭐 먹지?</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue'

type SubMenu = {
  [key: string]: {
    menuName: string
    url: string
  }[]
}

defineProps<{
  subMenu: SubMenu
}>()

defineEmits<{
  (e: 'showAndCloseSideBar'): void
}>()

onMounted(() => {
  document.body.setAttribute('style', 'overflow: hidden;')
})

onUnmounted(() => {
  document.body.removeAttribute('style')
})

const isShowDropDown = reactive<boolean[]>([false, false])

const showDropdown = (index: number): void => {
  isShowDropDown[index] = !isShowDropDown[index]
}
</script>

<style lang="scss" scoped>
.side-menu-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row-reverse;

  .side-menu {
    width: 48%;
    height: 100%;
    background: #fff;

    .menu {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 44px 0 40px;
      color: $fontMainColor;
      font-weight: 600;

      &.side-menu-top {
        height: 60px;
        border-bottom: 1px solid $sectionLine;
        box-sizing: border-box;
        padding: 0 44px 0 30px;

        button {
          width: 61px;
          height: 34px;
          color: #3d50cb;
          border: 1px solid #3d50cb;
          border-radius: 5px;
          background-color: #fff;
        }
      }

      &.drop-down-menu {
        display: block;
        height: auto;
        padding: 0;

        .drop-down {
          padding: 0 44px 0 40px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 50px;
        }

        .drop-down-menu-list {
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: #f3f3f3;
          color: $fontSubColor;
          font-size: 14px;

          div {
            height: 50px;
          }
        }
      }

      div {
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }

        #communityImg {
          margin-left: 3px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

@include mobile {
  .side-menu-bar {
    .side-menu {
      width: 100%;
    }
  }
}

@include tablet {
}

@include pc {
  .side-menu-bar {
    display: none;
  }
}
</style>
