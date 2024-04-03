<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
        <text class="icon tn-icon-left"></text>
        <text class="icon tn-icon-home-capsule-fill"></text>
      </view>
    </tn-nav-bar>

    <swiper
      class="card-swiper"
      :circular="true"
      :autoplay="true"
      duration="500"
      interval="5000"
      @change="cardSwiper"
    >
      <swiper-item
        v-for="(item, index) in swiperList"
        :key="index"
        :class="cardCur == index ? 'cur' : ''"
      >
        <view class="swiper-item image-banner">
          <image
            :src="item.url"
            mode="aspectFill"
            v-if="item.type == 'image'"
          ></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
      <block v-for="(item, index) in swiperList" :key="index">
        <view class="spot" :class="cardCur == index ? 'active' : ''"></view>
      </block>
    </view>

    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xxl">
          游在黄姚 ｜ 7天6晚 ｜ 广西三月三
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-text-bold tn-color-purplered">
          <text class="tn-text-sm">￥</text>
          <text class="" style="font-size: 50rpx">118 / 人</text>
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
            >1999 元</view
          >
        </view>
      </tn-list-cell>

      <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
        <view class="tn-flex tn-flex-col-center">
          <view class="tn-flex-1">活动时长</view>
          <view class="tn-margin-left-sm" style="font-size: 28rpx">7天6晚</view>
        </view>
      </tn-list-cell>
      <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
        <view class="tn-flex tn-flex-col-center">
          <view class="tn-flex-1">路程</view>
          <view class="tn-margin-left-sm" style="font-size: 28rpx"
            >1800 km</view
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

    <!-- <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          内容详情
        </view>
      </view>
    </view>
    
    <view class="content-backgroup tn-margin">
      <image src='https://resource.tuniaokj.com/images/content/rodion.jpg' mode='widthFix' class='backgroud-image'></image>
    </view> -->

    <!-- 边距间隔 -->
    <!-- <view class="tn-strip-bottom"></view> -->

    <!-- 图标logo/头像 -->
    <!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin" @click="tn('/preferredPages/shop')">
      <view class="justify-content-item">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="logo-pic tn-shadow">
            <view class="logo-image">
              <view class="tn-shadow-blur" style="background-image:url('/static/avator.jpg');width: 110rpx;height: 110rpx;background-size: cover;">
              </view>
            </view>
          </view>
          <view class="tn-padding-right tn-color-black">
            <view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
              抓住那只高产母猪
            </view>
            <view class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm">
              <text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
              <text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
              <text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
              <text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
              <text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
              <text class="tn-color-brown tn-padding-left-xs tn-text-bold">5.0</text>
            </view>
          </view>
        </view>
      </view>
      <view class="justify-content-item tn-flex-row-center">
        <view class="tn-cool-bg-color-15 tn-padding-xs tn-color-white tn-round tn-shadow-blur">
          <text class="tn-padding-left-xs">进店看看</text>
          <text class="tn-icon-send-fill tn-padding-xs"></text>
        </view>
      </view>
    </view>
     -->

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
            《中国国旅官方直营》本行程已超过2000多人的选择，销量对比证明，国旅直营产品更受消费者的厚爱！
            中国国旅产品承诺：真纯玩+不进任何购物店+餐标全面升级，不是每个产品都可如此承诺
            《纯玩产品 杜绝山寨 高质/高性价比 贵州精选热门线路》
            贴心周到的软性的服务！出游有保障！有对比才知道好坏！请游客仔细识别!
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
            《中国国旅官方直营》本行程已超过2000多人的选择，销量对比证明，国旅直营产品更受消费者的厚爱！
            中国国旅产品承诺：真纯玩+不进任何购物店+餐标全面升级，不是每个产品都可如此承诺
            《纯玩产品 杜绝山寨 高质/高性价比 贵州精选热门线路》
            贴心周到的软性的服务！出游有保障！有对比才知道好坏！请游客仔细识别!
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
            温馨提示：由于贵州旅游淡旺季差异较大，以及天气、人数、气候、道路交通状况和不可抗力因素等其他原因，行程游览顺序可能临时出现调整改变，行程披露游览顺序仅供参考。行程游览顺序会根据实际情况临时调整景区游览顺序。具体游览顺序只能以出发前1天客服或上团导游告知的游览顺序为准。除游览顺序可能临时调整，景区游览时间和服务标准均保持不变。客人购买本产品及表示客人知晓并同意旅行社可能临时调整游览顺序，不能因为游览顺序改变而进行后续投诉或临时取消。当然行程也可能按原网页顺序进行安排。所以是否调整游览顺序均不影响游客对景区的游览参观时间和服务标准
          </text>
        </view>
      </view>
    </view>

    <!-- 爆款 -->
    <view class="" v-if="current == 3">
      <view class="king-item tn-icon-circle-fill">
        <view class="resume2" style="padding: 20rpx">
          <text class="">
            1、行程中所列出发与到达时间只能做参考，不能做承诺要约；如遇节假日，堵车以及突发状况，以及季节变化时间会有所调整和改变，具体可以详询客服。
            其他贵阳当地出发产品推荐：
            1、贵阳出发：黄果树+西江千户苗寨+荔波小七孔纯玩3日游；点击或收索预定产品编号：18179206
            2、贵阳出发：贵阳+黄果树2日纯玩游；点击或收索预定产品编号：18542604
            3、贵阳出发：西江千户苗寨+荔波小七孔2日纯玩游；点击或收索预定产品编号：18542497
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
          title: "",
          name: "",
          text: "",
          url: "/static/banner/b1.jpeg",
        },
        {
          id: 1,
          type: "image",
          title: "",
          name: "",
          text: "",
          url: "/static/banner/b1.jpeg",
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
      current: 0,
      fixedList: [
        { name: "行程特色" },
        { name: "行程简介" },
        { name: "费用说明" },
        { name: "行前必看" },
      ],
      content: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
      content2: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["炸串", "火锅"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
      ],
      content3: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          label: ["炸串", "火锅"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
      ],
      content4: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          label: ["炸串", "火锅"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
          label: ["烤肉", "烤肉"],
          desc: "免费开源可商用组件",
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
          desc: "免费开源可商用组件",
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
