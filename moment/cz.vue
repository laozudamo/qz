<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->

    <tn-nav-bar
      :style="{ paddingTop: vuex_custom_bar_height + 'px' }"
      >精选</tn-nav-bar
    >

    <view
      class="tn-margin-top tn-margin-bottom"
      :style="{ paddingTop: vuex_custom_bar_height + 'px' }"
    >
    </view>

    <view class="tn-padding-bottom-xl">
      <view class="">
        <view class="tn-margin" v-for="(item, index) in 10" :key="index">
          <view
            class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding website-shadow"
            @click="tn('/preferredPages/shop')"
          >
            <view class="justify-content-item">
              <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                <view class="logo-pic">
                  <view class="logo-image">
                    <view
                      class="tn-shadow-blur"
                      style="
                        background-image: url('/static/avator.jpg');
                        width: 110rpx;
                        height: 110rpx;
                        background-size: cover;
                      "
                    >
                    </view>
                  </view>
                </view>
                <view class="tn-padding-right tn-color-black">
                  <view
                    class="tn-padding-right tn-padding-left-sm tn-text-lg tn-text-bold"
                  >
                    测试村庄
                  </view>
                  <view
                    class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm"
                  >
                    <text
                      class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
                    ></text>
                    <text
                      class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
                    ></text>
                    <text
                      class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
                    ></text>
                    <text
                      class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
                    ></text>
                    <text
                      class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
                    ></text>
                    <text class="tn-color-brown tn-padding-left-xs tn-text-bold"
                      >5.0</text
                    >
                  </view>
                </view>
              </view>
            </view>
            <view class="justify-content-item tn-flex-row-center">
              <view
                class="tn-cool-bg-color-15 tn-padding-xs tn-color-white tn-round tn-shadow-blur"
              >
                <text class="tn-padding-left-xs">查看</text>
                <text class="tn-icon-send-fill tn-padding-xs"></text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 边距间隔 -->
    </view>
  </view>
</template>

<script>
import template_page_mixin from "@/libs/mixin/template_page_mixin.js";
export default {
  name: "TemplateProduct",
  mixins: [template_page_mixin],
  data() {
    return {
      cardCur: 0,
      swiperList: [
        {
          id: 0,
          type: "image",
          title: "免费 开心",
          name: "商业合作请联系作者",
          text: "微信：tnkewo",
          url: "https://resource.tuniaokj.com/images/swiper/ad1.jpg",
        },
        {
          id: 1,
          type: "image",
          title: " 南南",
          name: "欢迎加入东东们",
          text: "如果你也有不错的作品",
          url: "https://resource.tuniaokj.com/images/swiper/ad2.jpg",
        },
        {
          id: 2,
          type: "image",
          title: " 西西",
          name: "一起玩转scss",
          text: "用最少的代码做最骚的效果",
          url: "https://resource.tuniaokj.com/images/swiper/ad3.jpg",
        },
        {
          id: 3,
          type: "image",
          title: " 北北",
          name: "乡村游",
          text: "商业合作请联系作者",
          url: "https://resource.tuniaokj.com/images/swiper/ad4.jpg",
        },
      ],
      current: 0,
      fixedList: [
        { name: "综合排序" },
        { name: "上新排序" },
        { name: "销量排序" },
        { name: "价格排序" },
      ],
      content: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/prototype2.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 129,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["炸串", "火锅"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/prototype1.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/computer2.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/phonecase1.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/phonecase2.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "我们都是好孩子",
          mainImage: "https://resource.tuniaokj.com/images/shop/watch1.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/sticker.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费 开心",
          mainImage: "https://resource.tuniaokj.com/images/shop/card.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
      ],
      countOptions: [
        {
          icon: "star",
          text: "收藏",
        },
        {
          icon: "share-circle",
          text: "分享",
        },
      ],
      customButtonGroups: [
        {
          text: "咨询客服",
          backgroundColor: "tn-cool-bg-color-5",
          color: "#FFFFFF",
        },
        {
          text: "立即购买",
          backgroundColor: "tn-cool-bg-color-15--reverse",
          color: "#FFFFFF",
        },
      ],
      tagList: [
        {
          color: "red",
          title: "酷炫",
        },
        {
          color: "cyan",
          title: "设计",
        },
        {
          color: "blue",
          title: " ",
        },
        {
          color: "green",
          title: "互联网",
        },
        {
          color: "orange",
          title: "免费",
        },
        {
          color: "purplered",
          title: "配色",
        },
        {
          color: "purple",
          title: "软件开发",
        },
        {
          color: "brown",
          title: "插画",
        },
        {
          color: "yellowgreen",
          title: "C4D",
        },
        {
          color: "grey",
          title: "海报",
        },
      ],
    };
  },
  methods: {
    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
    // tab选项卡切换
    tabChange(index) {
      this.current = index;
    },
    getRandomCoolBg() {
      return this.$t.colorUtils.getRandomCoolBgClass();
    },
  },
};
</script>

<style lang="scss" scoped>
.template-product {
}
.tn-tabbar-height {
  min-height: 120rpx;
  height: calc(140rpx + env(safe-area-inset-bottom) / 2);
}

/* 用户头像 start */
.logo-image {
  width: 110rpx;
  height: 110rpx;
  position: relative;
}

.logo-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
  border-radius: 10rpx;
  overflow: hidden;
  // background-color: #FFFFFF;
}

/* 胶囊*/
.tn-custom-nav-bar__back {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1000rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  font-size: 18px;

  .icon {
    display: block;
    flex: 1;
    margin: auto;
    text-align: center;
  }

  &:before {
    content: " ";
    width: 1rpx;
    height: 110%;
    position: absolute;
    top: 22.5%;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    opacity: 0.7;
    background-color: #ffffff;
  }
}

/* 轮播视觉差 start */
.card-swiper {
  height: 160rpx !important;
}

.card-swiper swiper-item {
  width: 750rpx !important;
  left: 0rpx;
  box-sizing: border-box;
  padding: 0rpx 30rpx 0rpx 30rpx;
  overflow: initial;
}

.card-swiper swiper-item .swiper-item {
  width: 100%;
  display: block;
  height: 100%;
  transform: scale(1);
  transition: all 0.2s ease-in 0s;
  border-radius: 10rpx;
  overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
  transform: none;
  transition: all 0.2s ease-in 0s;
}

.image-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-banner image {
  width: 100%;
  height: 100%;
}

/* 轮播指示点 start*/
.indication {
  z-index: 9999;
  width: 100%;
  height: 36rpx;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.spot {
  background-color: #ffffff;
  opacity: 0.6;
  width: 10rpx;
  height: 10rpx;
  border-radius: 20rpx;
  top: -40rpx;
  margin: 0 8rpx !important;
  position: relative;
}

.spot.active {
  opacity: 0.8;
  width: 20rpx;
  background-color: #ffffff;
}

/* 间隔线 start*/
.tn-strip-bottom {
  width: 100%;
  border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
}
/* 间隔线 end*/
/* 标题 start */
.nav_title {
  -webkit-background-clip: text;
  color: transparent;

  &--wrap {
    position: relative;
    display: flex;
    height: 120rpx;
    font-size: 46rpx;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
    background-size: cover;
  }
}
/* 标题 end */

/* 标签内容 start*/
.tn-tag-content {
  &__item {
    display: inline-block;
    line-height: 45rpx;
    padding: 10rpx 30rpx;
    margin: 20rpx 20rpx 5rpx 0rpx;

    &--prefix {
      padding-right: 10rpx;
    }
  }
}
/* 标签内容 end*/

/* 内容图 start */
.content-backgroup {
  z-index: -1;

  .backgroud-image {
    border-radius: 15rpx;
    width: 100%;
  }
}
/* 内容图 end */

/* 商家商品 start*/
.tn-blogger-content {
  &__wrap {
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
    border-radius: 20rpx;
    margin: 15rpx;
  }

  &__info {
    &__btn {
      margin-right: -12rpx;
      opacity: 0.5;
    }
  }

  &__label {
    &__item {
      line-height: 45rpx;
      padding: 0 10rpx;
      margin: 5rpx 18rpx 0 0;

      &--prefix {
        color: #e83a30;
        padding-right: 10rpx;
      }
    }

    &__desc {
      line-height: 35rpx;
    }
  }

  &__main-image {
    border-radius: 16rpx 16rpx 0 0;

    &--1 {
      max-width: 690rpx;
      min-width: 690rpx;
      max-height: 400rpx;
      min-height: 400rpx;
    }

    &--2 {
      max-width: 260rpx;
      max-height: 260rpx;
    }

    &--3 {
      height: 212rpx;
      width: 100%;
    }
  }

  &__count-icon {
    font-size: 24rpx;
    padding-right: 5rpx;
  }
}

.image-book {
  padding: 150rpx 0rpx;
  font-size: 16rpx;
  font-weight: 300;
  position: relative;
}
.image-picbook {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 15rpx 15rpx 0 0;
}

.website-shadow {
  border-radius: 15rpx;
  box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}
</style>
