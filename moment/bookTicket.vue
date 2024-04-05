<template>
  <view class="template-index tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar
      :style="{ paddingTop: vuex_custom_bar_height + 'px' }"
      :beforeBack="beforeBack"
      >门票预订</tn-nav-bar
    >

    <!-- 商家商品 start-->
    <view
      :style="{ paddingTop: vuex_custom_bar_height + 40 + 'rpx' }"
      class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs"
    >
      <block v-for="(item, index) in content" :key="index">
        <view class="" style="width: 50%" @click="tn('/moment/ticketDetail')">
          <view class="tn-blogger-content__wrap">
            <view
              class="image-picbook"
              :style="'background-image:url(' + item.mainImage + ')'"
            >
              <view class="image-book"> </view>
            </view>

            <view
              class="tn-blogger-content__label tn-text-justify tn-padding-sm"
            >
              <text class="tn-blogger-content__label__desc">{{
                item.desc
              }}</text>
            </view>

            <view
              class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"
            >
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view>
                  <view class="">
                    <text
                      class="tn-blogger-content__count-icon tn-color-purplered"
                      style="font-size: 24rpx"
                      >￥</text
                    >
                    <text
                      class="tn-padding-right-sm tn-text-bold tn-color-purplered"
                      style="font-size: 38rpx"
                      >{{ item.collectionCount }}</text
                    >
                    <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                      <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                    <text
                      class="tn-color-gray tn-text-sm"
                      style="font-size: 24rpx"
                      >{{ item.likeCount }} 人购买</text
                    >
                  </view>
                </view>
              </view>
              <!-- <view class="justify-content-item tn-text-center">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                  </view>
                </view> -->
            </view>

            <!-- 图标logo/头像 -->
            <!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center">
              <view
                class="justify-content-item tn-padding-left-sm tn-padding-bottom-sm"
              >
                <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                  <view class="logo-pic tn-shadow">
                    <view class="logo-image">
                      <view
                        class="tn-shadow-blur"
                        :style="
                          'background-image:url(' +
                          item.userAvatar +
                          ');width: 40rpx;height: 40rpx;background-size: cover;'
                        "
                      >
                      </view>
                    </view>
                  </view>
                  <view class="tn-padding-xs tn-text-sm tn-color-black">
                    {{ item.userName }}
                  </view>
                </view>
              </view>
            </view> -->
          </view>
        </view>
      </block>
    </view>
    <!-- 商品 end-->

    <view class="tn-tabbar-height"></view>
  </view>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      cardCur: 0,
      isAndroid: true,
      swiperList: [
        {
          id: 0,
          type: "image",
          title: "",
          name: "",
          text: "",
          url: "/static/banner/m1.jpeg",
        },
        {
          id: 1,
          type: "image",
          title: "",
          name: "",
          text: "",
          url: "/static/banner/m2.jpeg",
        },
        {
          id: 2,
          type: "image",
          title: "海量分享",
          name: "总有你想不到的创意",
          text: "",
          url: "/static/banner/b2.jpeg",
        },
      ],
      cardCur2: 0,
      resumeList: [
        {
          id: 0,
          type: "image",
          title: "李家庄",
          name: "生态庄园",
          hot: "1.29W",
          share: "216",
          love: "962",
          avatar: "/static/avator.jpg",
          url: "/static/ticket/t1.jpg",
        },
        {
          id: 1,
          type: "image",
          title: "高老屯",
          name: "你的梦中情屯",
          hot: "964",
          share: "94",
          love: "186",
          avatar: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          url: "/static/ticket/t2.jpg",
        },
        {
          id: 2,
          type: "image",
          title: "高老屯",
          name: "你的梦中情屯",
          hot: "3.26K",
          share: "146",
          love: "379",
          avatar: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
          url: "/static/ticket/t3.jpg",
        },
        {
          id: 3,
          type: "image",
          title: "高老屯",
          name: "你的梦中情屯",
          hot: "6.32K",
          share: "133",
          love: "432",
          avatar: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
          url: "/static/ticket/t4.jpg",
        },
        {
          id: 4,
          type: "image",
          title: "高老屯",
          name: "你的梦中情屯",
          hot: "8.65K",
          share: "321",
          love: "886",
          avatar: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
          url: "/static/hotel/m5.jpeg",
        },
      ],

      content: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "香港迪士尼乐园1日门票成人票",
          mainImage: "/static/tickets/t1.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 816,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "太平山顶摩天台428门票成人票",
          mainImage: "/static/tickets/t2.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 63,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "香港海洋公园日间门票成人票",
          mainImage: "/static/tickets/t3.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 322,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "香港摩天轮门票成人票",
          mainImage: "/static/tickets/t4.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 28,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "香港故宫文化博物馆标准门票(展厅1-7)成人票",
          mainImage: "/static/tickets/t5.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 55,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "澳门塔观光层门票成人票",
          mainImage: "/static/tickets/t6.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 126,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "澳门塔观光层门票成人票",
          mainImage: "/static/tickets/t7.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 126,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "ww",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "台北故宫博物院门票+个人语音导览票成人票",
          mainImage: "/static/tickets/t8.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "/static/home/line2.jpg",
              },
              {
                src: "/static/home/line3.jpg",
              },
              {
                src: "/static/home/line4.jpg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 109,
          commentCount: 999,
          likeCount: 999,
        },
      ],

      tuniaoData: [],
    };
  },
  created() {
    const systemInfo = uni.getSystemInfoSync();
    if (systemInfo.system.toLocaleLowerCase().includes("ios")) {
      this.isAndroid = false;
    } else {
      this.isAndroid = true;
    }
  },
  methods: {
    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    // resume
    resume(e) {
      this.cardCur2 = e.detail.current;
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.template-index {
  max-height: 100vh;
}
.tn-tabbar-height {
  min-height: 100rpx;
  height: calc(120rpx + env(safe-area-inset-bottom) / 2);
}

/* 轮播视觉差 start */
.card-swiper {
  height: 540rpx !important;
}

.card-swiper swiper-item {
  width: 750rpx !important;
  left: 0rpx;
  box-sizing: border-box;
  // padding: 0rpx 30rpx 90rpx 30rpx;
  overflow: initial;
}

.card-swiper swiper-item .swiper-item {
  width: 100%;
  display: block;
  height: 100%;
  transform: scale(1);
  transition: all 0.2s ease-in 0s;
  will-change: transform;
  overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
  transform: none;
  transition: all 0.2s ease-in 0s;
  will-change: transform;
}

.card-swiper swiper-item .swiper-item-text {
  margin-top: -320rpx;
  text-align: center;
  width: 100%;
  display: block;
  height: 50%;
  border-radius: 10rpx;
  transform: translate(100rpx, 0rpx) scale(0.9, 0.9);
  transition: all 0.6s ease 0s;
  will-change: transform;
  overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
  margin-top: -320rpx;
  width: 100%;
  transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
  transition: all 0.6s ease 0s;
  will-change: transform;
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
  top: -60rpx;
  margin: 0 8rpx !important;
  position: relative;
}

.spot.active {
  opacity: 1;
  width: 30rpx;
  background-color: #ffffff;
}

/* 简历推荐 start */
.card-swiper2 {
  height: 420rpx !important;
  overflow: hidden;
}

.card-swiper2 swiper-item {
  width: 680rpx !important;
  left: 30rpx;
  box-sizing: border-box;
  overflow: initial;
  padding: 0 0rpx 40rpx 0;
}

.card-swiper2 swiper-item .swiper-item1 {
  width: 100%;
  display: block;
  height: 100%;
  transform: scale(0.97);
  transition: all 0.2s ease-in 0s;
  will-change: transform;
  background-color: #e7fafe;
}

.card-swiper2 swiper-item.cur .swiper-item1 {
  transform: none;
  transition: all 0.2s ease-in 0s;
  will-change: transform;
}

.card-swiper2 swiper-item .swiper-item2 {
  margin-top: -180rpx;
  width: 100%;
  display: block;
  height: 50%;
  border-radius: 50%;
  transform: translate(510rpx, -160rpx) scale(0.9, 0.9);
  transition: all 0.3s ease 0s;
  will-change: transform;
}

.card-swiper2 swiper-item.cur .swiper-item2 {
  margin-top: -180rpx;
  width: 100%;
  transform: translate(510rpx, -150rpx) scale(0.9, 0.9);
  transition: all 0.3s ease 0s;
  will-change: transform;
}

.card-swiper2 swiper-item .swiper-item-text {
  margin-top: -270rpx;
  width: 100%;
  display: block;
  height: 100%;
  border-radius: 10rpx;
  transform: translate(30rpx, -20rpx) scale(0.8, 0.8);
  transition: all 0.6s ease 0s;
  will-change: transform;
  overflow: hidden;
}

.card-swiper2 swiper-item.cur .swiper-item-text {
  margin-top: -270rpx;
  width: 100%;
  transform: translate(20rpx, 0rpx) scale(0.9, 0.9);
  transition: all 0.6s ease 0s;
  will-change: transform;
}

/* 底部tabbar假阴影 start*/
.bg-tabbar-shadow {
  background-image: repeating-linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1) 10rpx,
    #ffffff,
    #ffffff
  );
  position: fixed;
  bottom: 0;
  height: 450rpx;
  width: 100vw;
  z-index: -1;
}

/* 图标容器12 start */
.tn-three {
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-38rpx, -20rpx) rotateX(20deg) rotateY(10deg)
    rotateZ(-20deg);
  text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0,
    -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
}
.icon12 {
  &__item {
    width: 30%;
    background-color: #ffffff;
    border-radius: 10rpx;
    padding: 30rpx;
    margin: 20rpx 10rpx;
    transform: scale(1);
    transition: transform 0.3s linear;
    transform-origin: center center;

    &--icon {
      width: 100rpx;
      height: 100rpx;
      font-size: 60rpx;
      border-radius: 50%;
      margin-bottom: 18rpx;
      position: relative;
      z-index: 1;

      &::after {
        content: " ";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: inherit;
        opacity: 1;
        transform: scale(1, 1);
        background-size: 100% 100%;
        background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);
      }
    }
  }
}

/* 自定义导航栏内容 start */
.custom-nav {
  height: 100%;

  &__back {
    margin: auto 5rpx;
    font-size: 40rpx;
    margin-right: 10rpx;
    margin-left: 30rpx;
    flex-basis: 5%;
  }

  &__search {
    flex-basis: 60%;
    width: 100%;
    height: 100%;

    &__box {
      width: 100%;
      height: 70%;
      padding: 10rpx 0;
      margin: 0 30rpx;
      border-radius: 60rpx 60rpx 0 60rpx;
      font-size: 24rpx;
    }

    &__icon {
      padding-right: 10rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
    }

    &__text {
      // color: #AAAAAA;
    }
  }
}
.logo-image {
  width: 65rpx;
  height: 65rpx;
  position: relative;
}
.logo-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 50%;
}
/* 自定义导航栏内容 end */

/* 热门图片 start*/
.image-tuniao1 {
  padding: 165rpx 0rpx;
  font-size: 40rpx;
  font-weight: 300;
  position: relative;
}
.image-tuniao2 {
  padding: 75rpx 0rpx;
  font-size: 40rpx;
  font-weight: 300;
  position: relative;
}
.image-tuniao3 {
  padding: 90rpx 0rpx;
  font-size: 40rpx;
  font-weight: 300;
  position: relative;
}
.image-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 10rpx;
}
/* 胶囊banner*/
.image-capsule {
  padding: 100rpx 0rpx;
  font-size: 40rpx;
  font-weight: 300;
  position: relative;
}
.image-piccapsule {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 20rpx 20rpx 0 0;
}

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
    background-image: url(https://resource.tuniaokj.com/images/title_bg/title00.png);
    background-size: cover;
  }
}
/* 标题 end */

/* 业务展示 start */
.tn-info {
  &__container {
    margin-top: 10rpx;
    margin-bottom: 50rpx;
  }

  &__item {
    width: 47.7%;
    margin: 15rpx 0rpx 30rpx 0rpx;
    padding: 40rpx 30rpx;
    border-radius: 10rpx;

    position: relative;
    z-index: 1;

    &::after {
      content: " ";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      border-radius: inherit;
      opacity: 1;
      transform: scale(1, 1);
      background-size: 100% 100%;
      background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/2.png);
    }

    &__left {
      &--icon {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        font-size: 40rpx;
        margin-right: 20rpx;
        position: relative;
        z-index: 1;

        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png);
        }
      }

      &__content {
        font-size: 25rpx;

        &--data {
          color: rgba(255, 255, 255, 0.5);
          margin-top: 5rpx;
          // font-weight: bold;
        }
      }
    }

    &__right {
      &--icon {
        position: absolute;
        right: 0rpx;
        top: 50rpx;
        font-size: 100rpx;
        width: 108rpx;
        height: 108rpx;
        text-align: center;
        line-height: 60rpx;
        opacity: 0.15;
      }
    }
    &__bottom {
      box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.12);
      border-radius: 0 0 10rpx 10rpx;
      position: absolute;
      width: 85%;
      line-height: 15rpx;
      left: 50%;
      bottom: -15rpx;
      transform: translateX(-50%);
      z-index: -1;
      text-align: center;
    }
  }
}
/* 业务展示 end */

/* 底部tabbar start*/
.footerfixed {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
}

.tabbar {
  display: flex;
  align-items: center;
  min-height: 110rpx;
  justify-content: space-between;
  padding: 0;
  height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}

.tabbar .action {
  font-size: 22rpx;
  position: relative;
  flex: 1;
  text-align: center;
  padding: 0;
  display: block;
  height: auto;
  line-height: 1;
  margin: 0;
  overflow: initial;
}

.bar-center {
  animation: suspension 3s ease-in-out infinite;
}

@keyframes suspension {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.8rem);
  }
}

.tabbar .action .bar-icon {
  width: 100rpx;
  position: relative;
  display: block;
  height: auto;
  margin: 0 auto 10rpx;
  text-align: center;
  font-size: 42rpx;
  // line-height: 50rpx;
}

.tabbar .action .bar-icon image {
  width: 50rpx;
  height: 50rpx;
  display: inline-block;
}

.tabbar .action .bar-circle {
  position: relative;
  display: block;
  margin: 0rpx auto 0rpx;
  text-align: center;
  font-size: 52rpx;
  line-height: 90rpx;
  // background-color: #01BEFF;
  width: 100rpx !important;
  height: 100rpx !important;
  overflow: hidden;
  // border-radius: 50%;
  // box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
  //   0px -8px 40px rgba(255, 255, 255, 1),
  //   inset 0px -10px 10px rgba(70,23,129, 0.05),
  //   inset 0px 10px 20px rgba(255, 255, 255, 1);
  // box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
}

.tabbar .action .bar-circle image {
  width: 100rpx;
  height: 100rpx;
  display: inline-block;
  margin: 0rpx auto 0rpx;
}

/* 流星+悬浮 */
.nav-index-button {
  animation: suspension 3s ease-in-out infinite;
  z-index: 999999;

  &__content {
    position: absolute;
    width: 100rpx;
    height: 100rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--icon {
      width: 100rpx;
      height: 100rpx;
      font-size: 60rpx;
      border-radius: 50%;
      margin-bottom: 18rpx;
      position: relative;
      z-index: 1;
      transform: scale(0.85);

      &::after {
        content: " ";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: inherit;
        opacity: 1;
        transform: scale(1, 1);
        background-size: 100% 100%;
        // background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);
      }
    }
  }

  &__meteor {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100rpx;
    height: 100rpx;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);

    &__wrapper {
      width: 100rpx;
      height: 100rpx;
      transform-style: preserve-3d;
      animation: spin 20s linear infinite;
    }

    &__item {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      border-radius: 1000rpx;
      left: 0;
      top: 0;

      &--pic {
        display: block;
        width: 100%;
        height: 100%;
        background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc1.png)
          no-repeat center center;
        background-size: 100% 100%;
        animation: arc 4s linear infinite;
      }
    }
  }
}

@keyframes suspension {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.6rem);
  }
}

@keyframes spin {
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-360deg);
  }
}

@keyframes arc {
  to {
    transform: rotate(360deg);
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
.tn-blogger-content__wrap {
  padding: 10rpx;
}
</style>