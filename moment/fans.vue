<template>
  <view class="focus">
    <tn-nav-bar fixed>粉丝列表</tn-nav-bar>
    <view style="padding-top: 80rpx"></view>
    <view class="item" v-for="(item, index) in list" :key="index">
      <view class="image">
        <image :src="item.img"></image>
      </view>
      <view class="cent">
        <text class="nick">{{ item.nick }}</text>
        <text class="text">{{ item.text }}</text>
      </view>
      <!-- <view :class="item.status === 0 ? 'follow' : 'active'" @click="click(index)">
        <text>{{ item.status === 0 ? '关注' : '取消关注' }}</text>
      </view> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "/static/image/travel/focus/Avatar.png",
          nick: "赛珍珠",
          text: "美貌与才华于一身的女子",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar1.png",
          nick: "海伦",
          text: "照片有更新",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar2.png",
          nick: "米谢",
          text: "内蒙古自治区",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar.png",
          nick: "赛珍珠",
          text: "美貌与才华于一身的女子",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar1.png",
          nick: "海伦",
          text: "照片有更新",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar2.png",
          nick: "米谢",
          text: "内蒙古自治区",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar.png",
          nick: "赛珍珠",
          text: "美貌与才华于一身的女子",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar1.png",
          nick: "海伦",
          text: "照片有更新",
          status: 0,
        },
        {
          img: "/static/image/travel/focus/Avatar2.png",
          nick: "米谢",
          text: "内蒙古自治区",
          status: 0,
        },
      ],
    };
  },
  created() {},
  methods: {
    click(index) {
      const status = this.list[index].status;
      if (status === 0) {
        this.list[index].status = 1;
      } else {
        this.list[index].status = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.focus {
  height: 100%;
  background-color: #ffffff;
  padding: 40rpx 32rpx;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 52rpx;
    .image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
      > image {
        width: 120rpx;
        height: 120rpx;
      }
    }
    .cent {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 32rpx;
      .nick {
        font-family: OpenSans-Bold;
        font-size: 28rpx;
        font-weight: bold;
        line-height: 40rpx;
        letter-spacing: 0rpx;
        color: #0d0e15;
      }
      .text {
        font-family: OpenSans;
        font-size: 24rpx;
        font-weight: normal;
        line-height: 38rpx;
        letter-spacing: 0rpx;
        color: #768196;
      }
    }
    .follow {
      width: 198rpx;
      height: 60rpx;
      text-align: center;
      border-radius: 12rpx;
      background: linear-gradient(
        287deg,
        #dc4dce 0%,
        #dc4dce 0%,
        #ff8b8b 100%,
        #ff8b8b 100%
      );
      > text {
        font-family: OpenSans-Bold;
        font-size: 12rpx;
        font-weight: bold;
        line-height: 56rpx;
        letter-spacing: 0rpx;
        color: #ffffff;
      }
      &:active {
        opacity: 0.7;
      }
    }
    .active {
      width: 198rpx;
      height: 60rpx;
      text-align: center;
      border-radius: 12rpx;
      background: #e0e2e7;
      > text {
        font-family: OpenSans-Bold;
        font-size: 12rpx;
        font-weight: bold;
        line-height: 56rpx;
        letter-spacing: 0rpx;
        color: #0d0e15;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
