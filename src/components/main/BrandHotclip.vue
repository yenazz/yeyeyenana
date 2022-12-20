<template>
  <section>
    <article>
      <div class="title">영상으로 즐기는 브랜드 HOT클립</div>
      <div class="clip-container">
        <div class="youtube-video">
          <iframe
            :src="`https://www.youtube.com/embed/${currentYoutube?.brandYoutube[0].youtubeId}?autoplay=1&mute=1&controls=0`"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div class="youtube-title">
            {{ currentYoutube?.brandYoutube[0].youtubeTitle }}
          </div>
          <div class="brand-logo-name">
            <img
              :src="currentYoutube?.brandLogoImg"
              :alt="currentYoutube?.brandName"
            />
            {{ currentYoutube?.brandName }}
          </div>
        </div>
        <div class="clip-list">
          <div class="thumbnail-list">
            <div
              v-for="item in shuffleItem"
              :key="item.id"
              class="item"
              :class="{
                active:
                  currentYoutube?.brandYoutube[0].youtubeId ===
                  item.brandYoutube[0].youtubeId,
              }"
              @click="changeCurrentYoutube(item)"
            >
              <div class="thumbnail-info">
                <div class="youtube-thumbnail">
                  <img
                    :src="`https://img.youtube.com/vi/${item.brandYoutube[0].youtubeId}/mqdefault.jpg`"
                    :alt="item.brandName"
                  />
                </div>
                <div class="youtube-brand-info">
                  <div class="list-title">
                    {{ item.brandYoutube[0].youtubeTitle }}
                  </div>
                  <div class="brand-name">{{ item.brandName }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="clip-more" @click="changePage('+')">
            <img src="../../assets/btn/more.png" alt="more" />
            HOT클립 더보기
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import api from '../../config/axios.config'
import { ref } from 'vue'
import { Brand, BrandYoutube } from '~/types/brand'
import axios from 'axios'
import { next } from 'dom7'

const currentYoutube = ref<Brand>()
const shuffleItem = ref<Brand[]>([])
const nextPage = ref<boolean>(false)
const clipItem = ref<Brand[]>([])
const pageNum = 3
const page = ref<number>(1)

const getClipItem = async () => {
  const { data } = await api.get('/brand/search/main/youtube')

  if (data.success) {
    clipItem.value = data.brand.sort(() => Math.random() - 0.5)
    shuffleItem.value = clipItem.value.slice(
      (page.value - 1) * pageNum,
      pageNum * page.value
    )

    shuffleItem.value.forEach((e) => getYoutubeTitle(e.brandYoutube[0]))
    currentYoutube.value = shuffleItem.value[0]
  } else {
    alert('브랜드 핫클립 요청 실패')
  }
}
getClipItem()

const getYoutubeTitle = async (youtube: BrandYoutube) => {
  const noEmbed = 'https://noembed.com/embed?url='
  const url = `https://www.youtube.com/watch?v=${youtube.youtubeId}`

  const { data } = await axios.get(noEmbed + url)

  youtube.youtubeTitle = data.title
}

const changeCurrentYoutube = (item: Brand) => {
  currentYoutube.value = item
}

const changePage = (type: string): void => {
  if (type === '+' && nextPage.value) {
    page.value++
    getClipItem()
  } else if (type === '+' && !nextPage.value) {
    page.value = 1
    getClipItem()
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #f8f8f8;
  height: 650px;
  margin-bottom: 60px;
  article {
    @include pc-container();
    .title {
      padding-top: 60px;
      font-size: 18px;
      font-weight: 500;
      color: $fontMainColor;
    }
    .clip-container {
      padding-top: 20px;
      display: flex;
      color: $fontMainColor;
      gap: 30px;
      .youtube-video {
        width: 684px;
        iframe {
          width: 684px;
          height: 393px;
        }
        .youtube-title {
          padding: 13px 0px 8px 0px;
          line-height: 24px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: normal;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: block-axis;
        }
        .brand-logo-name {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #777;
          img {
            width: 72px;
            height: 29px;
            padding-right: 10px;
          }
        }
      }
      .clip-list {
        display: flex;
        flex-direction: column;
        flex: 1;
        .thumbnail-list {
          .item {
            &.active {
              background-color: #ebebeb;
              border-radius: 10px;
            }
            .thumbnail-info {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              .youtube-thumbnail {
                img {
                  border-radius: 10px;
                  width: 174px;
                  height: 100px;
                }
              }
              .youtube-brand-info {
                padding-left: 10px;
                .list-title {
                  line-height: 24px;
                  margin-bottom: 6px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: normal;
                  word-wrap: break-word;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: block-axis;
                }
                .brand-name {
                  font-size: 14px;
                  color: #777;
                }
              }
            }
          }
        }
        .clip-more {
          color: $mainColor;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $mainColor;
          background-color: #fff;
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
            padding-right: 10px;
          }
        }
      }
    }
  }
}

@include tablet {
  section {
    height: 100%;
    height: 480px;
    margin-bottom: 50px;
    article {
      @include tablet-container();
      .title {
        padding-top: 43px;
      }
      .clip-container {
        gap: 24px;
        .youtube-video {
          width: 328px;
          iframe {
            width: 100%;
            height: 189px;
          }
          .youtube-title {
            font-size: 14px;
            padding: 17px 0px 6px 0px;
          }
          .brand-logo-name {
            font-size: 13px;
          }
        }
        .clip-list {
          .thumbnail-list {
            .thumbnail-info {
              .youtube-thumbnail {
                img {
                  width: 152px;
                  height: 87px;
                }
              }
              .youtube-brand-info {
                .brand-name {
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    height: 756px;
    article {
      @include mobile-container();
      .title {
        padding-top: 30px;
        font-size: 16px;
      }

      .clip-container {
        display: block;
        .youtube-video {
          width: 100%;
          iframe {
            width: 100%;
            height: 188px;
          }
          .youtube-title {
            margin: 10px 0px 8px 0px;
            padding: 0;
          }
          .brand-logo-name {
            font-size: 11px;
          }
        }
      }
      .clip-list {
        margin-top: 30px;
        padding: 0;
        .thumbnail-list {
          .thumbnail-info {
            margin-bottom: 8px;
            .youtube-thumbnail {
              img {
                height: 92px !important;
              }
            }
            .youtube-brand-info {
              padding-left: 10px;
              .list-title {
                font-size: 14px;
                margin-bottom: 6px;
              }
              .brand-name {
                font-size: 13px !important;
              }
            }
          }
        }
        .clip-more {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
