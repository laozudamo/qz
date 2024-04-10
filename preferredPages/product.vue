<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
        <text class="icon tn-icon-left"></text>
        <text class="icon tn-icon-home-capsule-fill"></text>
      </view>
    </tn-nav-bar>

    <img width="100%" height="200" :src="theData.image" />

    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xxl">
          {{ theData.itineraryFeature }}
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-text-bold tn-color-purplered">
          <text class="tn-text-sm">￥</text>
          <text class="" style="font-size: 50rpx">{{ theData.cost }} / 人</text>
        </view>
        <view class="justify-content-item tn-color-gray tn-padding-top-xs">
          <view class="">已售 729</view>
        </view>
      </view>
    </view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <!-- 更多信息-->
    <view class="tn-padding-top-sm tn-padding-bottom-sm">
      <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
        <view class="tn-flex tn-flex-col-center">
          <view class="tn-flex-1">费用</view>
          <view class="tn-margin-left-sm" style="font-size: 28rpx"
            >{{ theData.cost }} 元</view
          >
        </view>
      </tn-list-cell>

      <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
        <view class="tn-flex tn-flex-col-center">
          <view class="tn-flex-1">活动时长</view>
          <view class="tn-margin-left-sm" style="font-size: 28rpx"
            >{{ theData.activityDuration }} 天</view
          >
        </view>
      </tn-list-cell>
      <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
        <view class="tn-flex tn-flex-col-center">
          <view class="tn-flex-1">路程</view>
          <view class="tn-margin-left-sm" style="font-size: 28rpx"
            >{{ theData.distance }} km</view
          >
        </view>
      </tn-list-cell>
    </view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          产品特色
        </view>
      </view>
    </view>

    <view class="">
      <view class="tn-tag-content tn-margin tn-text-justify">
        <view
          v-for="(item, index) in tagList"
          :key="index"
          class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
          :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]"
        >
          <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
        </view>
      </view>
    </view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <view class="tn-margin-top-sm">
      <tn-sticky :offsetTop="10" :customNavHeight="vuex_custom_bar_height">
        <tn-tabs
          :list="fixedList"
          :current="current"
          :isScroll="false"
          activeColor="#000"
          bold="true"
          :fontSize="32"
          :badgeOffset="[20, 50]"
          @change="tabChange"
        ></tn-tabs>
      </tn-sticky>
    </view>

    <!-- 推荐 -->
    <view class="" v-if="current == 0">
      <!-- 商品1 start-->
      <view class="king-item tn-icon-circle-fill">
        <view class="resume2" style="padding: 20rpx">
          <text class="">
            {{ theData.productFeature }}
          </text>
        </view>
      </view>
      <!-- 商品1 end-->
    </view>

    <!-- 同款 -->
    <view class="" v-if="current == 1">
      <view class="king-item tn-icon-circle-fill">
        <view class="resume2" style="padding: 20rpx">
          <text class="">
            {{ theData.itineraryIntroduction }}
          </text>
        </view>
      </view>

      <!-- 商品1 start-->
      <!-- 商品1 end-->
    </view>

    <!-- 热卖 -->
    <view class="" v-if="current == 2">
      <view class="king-item tn-icon-circle-fill">
        <view class="resume2" style="padding: 20rpx">
          <text class="">
            {{ theData.costDescription }}
          </text>
        </view>
      </view>
    </view>

    <!-- 爆款 -->
    <view class="" v-if="current == 3">
      <view class="king-item tn-icon-circle-fill">
        <view class="resume2" style="padding: 20rpx">
          <text class="">
            {{ theData.preTripTips }}
          </text>
        </view>
      </view>
    </view>

    <view
      class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm"
    >
      <tn-goods-nav
        :options="countOptions"
        :buttonGroups="customButtonGroups"
        buttonType="round"
        :safeAreaInsetBottom="true"
        @optionClick="onOptionClick"
        @buttonClick="onButtonClick"
      ></tn-goods-nav>
    </view>

    <view class="tn-tabbar-height"></view>
  </view>
</template>

<script>
import { detailLine } from "@/api/line.js";
import { creat } from "@/api/order.js";
import template_page_mixin from "@/libs/mixin/template_page_mixin.js";

function getFormattedDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var day = String(currentDate.getDate()).padStart(2, "0");
  var hours = String(currentDate.getHours()).padStart(2, "0");
  var minutes = String(currentDate.getMinutes()).padStart(2, "0");
  var seconds = String(currentDate.getSeconds()).padStart(2, "0");

  var formattedDate =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return formattedDate;
}

export default {
  name: "TemplateProduct",
  mixins: [template_page_mixin],
  data() {
    return {
      theData: {},
      cardCur: 0,

      current: 0,
      fixedList: [
        { name: "行程特色" },
        { name: "行程简介" },
        { name: "费用说明" },
        { name: "行前必看" },
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
        // {
        //   text: "咨询客服",
        //   backgroundColor: "tn-cool-bg-color-5",
        //   color: "#FFFFFF",
        // },
        {
          text: "立即购买",
          backgroundColor: "tn-cool-bg-color-15--reverse",
          color: "#FFFFFF",
        },
      ],
      tagList: [
        {
          color: "red",
          title: "全程零购物",
        },
        {
          color: "cyan",
          title: "骑大象",
        },
        {
          color: "blue",
          title: "泼水节",
        },
        {
          color: "green",
          title: "壮丽山水",
        },
        {
          color: "orange",
          title: "北国风光",
        },
      ],
    };
  },
  onLoad(options) {
    if (options.id) {
      detailLine(options.id).then((res) => {
        this.theData = res;
        console.log(res);
      });
    }
  },
  methods: {
    onButtonClick() {
      let userInfo = uni.getStorageSync("userInfo");
      let date = getFormattedDate();
      let data = {
        customerId: userInfo.id,
        productId: this.theData.id,
        quantity: 1,
        orderDate: date,
        totalPrice: this.theData.cost,
        status: "success",
        orderType: "TRAVEL_ROUTE",
      };
      creat(data)
        .then((res) => {
          console.log(res);
          uni.showToast({
            title: "购买成功",
            duration: 2000,
            icon: "none",
          });

          setTimeout(() => {
            uni.navigateBack();
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
  height: 750rpx !important;
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
  top: -60rpx;
  margin: 0 8rpx !important;
  position: relative;
}

.spot.active {
  opacity: 1;
  width: 30rpx;
  background-color: #ffffff;
}

/* 间隔线 start*/
.tn-strip-bottom-min {
  width: 100%;
  border-bottom: 1rpx solid #f8f9fb;
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

/* 底部tabbar start*/
.footerfixed {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
}

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

/* 毛玻璃*/
.dd-glass {
  width: 100%;
  backdrop-filter: blur(20rpx);
  -webkit-backdrop-filter: blur(20rpx);
}
</style>
