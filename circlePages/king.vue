<template>
  <view class="template-king tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
        <text class="icon tn-icon-left"></text>
        <text class="icon tn-icon-home-capsule-fill"></text>
      </view>
    </tn-nav-bar>

    <!-- 顶部 -->
    <view>
      <view class="tn-strip-bottom">
        <view class="slideshow">
          <!-- <view class="slideshow-image" style="background-image: url('/static/avator.jpg')">
          </view> -->
          <!-- <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377642486-assets/web-upload/4cb7d03d-4873-433e-9a9c-774ffdc490d8.jpeg')">
          </view>
          <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377643739-assets/web-upload/5f08a35e-241e-4825-8a7b-f9c7db14a7ed.jpeg')">
          </view>
          <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377641839-assets/web-upload/8a247704-9256-4c88-836a-90fee5aee611.jpeg')">
          </view> -->
        </view>
        <view class="beibei">
          <view
            class="beibei2"
            style="
              background-image: url(/static/king/k1.jpg);
            "
          ></view>
        </view>
        <view class="tn-margin tn-padding-top-sm">
          <view class="tn-text-bold">
            <text class="tn-text-xxl tn-padding-right">李家庄</text>
            <text class="tn-text-lg tn-color-gray">生态庄园</text>
          </view>
          <view class="tn-margin-top-lg">
            <text class="tn-text-lg">地址: 贵州省黔东南州雷山县西江镇</text>
          </view>
          <view class="tn-margin-top-xs">
            <text class="tn-text-lg">评分： 4.9</text>
          </view>
        </view>
      </view>

      <view class="king-list tn-margin-top-sm">
        <view class="king-icon">
          <text
            class="tn-icon-creative tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">村庄介绍</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume2">
            <text class="">
              西江千户苗寨，地处贵州省黔东南州雷山县西江镇，是中国历史文化名镇、中国景观村落、国家4A级旅游景区。景区占地面积5.5平方公里，距雷山县城25km，距离黔东南州州府凯里市35km，距离省会贵阳市约260km，紧邻沪昆高速公路、凯雷高速公路，开通了贵阳、荔波、凯里高铁南站、都匀东高铁站、镇远古城等地直达西江千户苗寨景区直通车，交通十分便捷。
              西江千户苗寨，是一座露天博物馆，展览着一部苗族发展的史诗，成为观赏和研究苗族传统文化的大看台。全寨共有1400余户、6000余人，苗族人口占99.5％，是目前中国乃至全世界最大的苗族聚居村寨。西江牯藏节、苗年，闻名四海，苗族农耕、节日、银饰、服饰、饮食、歌舞等民风民俗世代相传。西江千户苗寨在半山建造独具特色的木结构吊脚楼，千余户吊脚楼随着地形的起伏变化，层峦叠嶂，成为全世界典型的苗族吊脚楼村寨，西江千户苗寨吊脚楼被列入首批国家级非物质文化遗产名录。西江是一个保存苗族“原始生态”文化完整的地方，是领略和认识中国苗族漫长历史与发展的首选之地，被中外人类学家和民俗学者认为保存苗族“原始生态”文化比较完整的地方。著名的作家、学者余秋雨先生点赞这座苗寨风情——“以美丽回答一切”。
              西江千户苗寨先后获得国家文化产业示范基地、全国农业旅游示范点、中国文化生态景区、国家级夜间文化和旅游消费集聚区、中国文化旅游新地标、中国最美的100风情小镇、十佳旅游镇（村）最美“原生态”露天博物馆、中国优秀国际乡村旅游目的地和中国文明生态景区、世界十大乡村度假胜地、贵州十大魅力旅游景区、贵州十佳提升样板景区、贵州十佳夜游地标、2019年“一带一路”国际旅游新商机最受海外游客欢迎的内地旅游目的地等殊荣。
              近年来，雷山县坚持保护和开发并重、传承和创新齐抓，用好一系列金字招牌，把民族文化旅游产业为战略性主导产业来抓，以西江千户苗寨为龙头全力推进全域旅游化“雷山模式”，先后被评为“全国休闲农业与乡村旅游示范县”“国家全域旅游示范区”。西江千户苗寨被列入全国“景区带村”旅游扶贫示范项目，“乡村旅游+”产业扶贫模式连续两年在贵州省旅发大会上作了经验介绍，“西江模式”被列为贵州改革开放40年40事典型案例，雷山县发展乡村旅游助推脱贫攻坚入选世界旅游联盟旅游扶贫优秀案例。
            </text>
          </view>
        </view>


        <view class="king-icon">
          <text
            class="tn-icon-honor tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">发展过程</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2022-05 ~ 2022-05</text>
            <text class="fr">千户苗族</text>
          </view>
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(/static/king/k1.jpg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >千户苗寨距离雷山县城大约36千米，距离黔东南州州府凯里大约35千米，距离省会贵阳市约260千米。这是一个大规模的苗族聚居地，以其独特的吊脚楼建筑和丰富的苗族文化而闻名。</text
            >
          </view>
          <!-- <view class="resume2">
            <text
              >职责描述：想法的整理，原型设计，Ul设计，前端界面编程等等</text
            >
          </view> -->
        </view>
    

        <view class="king-icon">
          <text
            class="tn-icon-tag tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">热评标签</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume">
            <view class="tn-tag-content tn-text-justify">
              <view
                v-for="(item, index) in tagList"
                :key="index"
                class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
                :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]"
              >
                <text class="tn-tag-content__item--prefix">#</text>
                {{ item.title }}
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="tn-margin-top tn-padding-top-sm tn-margin-bottom">
        <view class="see">
          <view class="justify-content-item tn-flex tn-flex-col-center">
            <view style="margin-right: 10rpx; margin-left: 30rpx">
              <tn-avatar-group :lists="groupList" size="sm"></tn-avatar-group>
            </view>
          </view>
          <view class="tn-margin-right">
            <text class="tn-color-grey tn-text-df tn-margin-right-sm"
              >12.9W 查看
            </text>
            <text class="tn-color-grey tn-text-df"> 3.2K 分享</text>
          </view>
        </view>
      </view>

      <!-- <view class="action cf" bindtap="showModal" data-target="bottomModal">
        <image src='/static/images/admin.jpg' class='edit' mode='aspectFit'></image>
      </view> -->
      <!-- <button class='' open-type="contact">
        <image src='/static/images/admin.jpg' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
        </image>
      </button> -->
    </view>
  </view>
</template>

<script>
import template_page_mixin from "@/libs/mixin/template_page_mixin.js";
export default {
  name: "TemplateKing",
  mixins: [template_page_mixin],
  data() {
    return {
      tagList: [
        {
          color: "red",
          title: "不错鸭",
        },
        {
          color: "cyan",
          title: "环境很好",
        },
        {
          color: "blue",
          title: "还会再来",
        },
        {
          color: "green",
          title: "风景好看",
        },
        {
          color: "orange",
          title: "兄弟萌 真的推荐",
        },
        // {
        //   color: "purplered",
        //   title: "健身女王",
        // },
        // {
        //   color: "purple",
        //   title: "创意设计",
        // },
        // {
        //   color: "brown",
        //   title: "腹黑",
        // },
        // {
        //   color: "yellowgreen",
        //   title: "水果控",
        // },
        // {
        //   color: "lime",
        //   title: "bug多多",
        // },
        // {
        //   color: "grey",
        //   title: "蠢萌蠢萌",
        // },
      ],
      groupList: [
        { src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg" },
        { src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg" },
        { src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg" },
        { src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg" },
        {
          src: "/static/avator.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
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

/* 主图固定 */
.beibei {
  width: 100%;
  height: 1000upx;
}
.beibei2 {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center center;
  background-size: cover;
}
/* 相册 */
.slideshow {
  top: 0;
  position: absolute;
  width: 100vw;
  height: 1000upx;
  overflow: hidden;
}

.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  -webkit-animation-name: kenburns;
  animation-name: kenburns;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  opacity: 1;
  transform: scale(1.2);
}

.slideshow-image:nth-child(1) {
  -webkit-animation-name: kenburns-1;
  animation-name: kenburns-1;
  z-index: 3;
}

.slideshow-image:nth-child(2) {
  -webkit-animation-name: kenburns-2;
  animation-name: kenburns-2;
  z-index: 2;
}

.slideshow-image:nth-child(3) {
  -webkit-animation-name: kenburns-3;
  animation-name: kenburns-3;
  z-index: 1;
}

.slideshow-image:nth-child(4) {
  -webkit-animation-name: kenburns-4;
  animation-name: kenburns-4;
  z-index: 0;
}

@-webkit-keyframes kenburns-1 {
  0% {
    opacity: 1;
    transform: scale(1.2);
  }

  1.5625% {
    opacity: 1;
  }

  23.4375% {
    opacity: 1;
  }

  26.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }

  98.4375% {
    opacity: 0;
    transform: scale(1.2117647059);
  }

  100% {
    opacity: 1;
  }
}

@keyframes kenburns-1 {
  0% {
    opacity: 1;
    transform: scale(1.2);
  }

  1.5625% {
    opacity: 1;
  }

  23.4375% {
    opacity: 1;
  }

  26.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }

  98.4375% {
    opacity: 0;
    transform: scale(1.2117647059);
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  26.5625% {
    opacity: 1;
  }

  48.4375% {
    opacity: 1;
  }

  51.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

@keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  26.5625% {
    opacity: 1;
  }

  48.4375% {
    opacity: 1;
  }

  51.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

@-webkit-keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  51.5625% {
    opacity: 1;
  }

  73.4375% {
    opacity: 1;
  }

  76.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

@keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  51.5625% {
    opacity: 1;
  }

  73.4375% {
    opacity: 1;
  }

  76.5625% {
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

@-webkit-keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  76.5625% {
    opacity: 1;
  }

  98.4375% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}

@keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    transform: scale(1.2);
  }

  76.5625% {
    opacity: 1;
  }

  98.4375% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}

/* 简历内容 */
.king-list {
  display: block;
  background-color: #ffffff;
}

.king-list .king-icon {
  width: 100%;
  text-align: left;
  padding: 20rpx 0 20rpx 37rpx;
  font-size: 26rpx;
  color: #888;
  display: block;
}

.king-list > .king-item {
  padding: 30rpx 30rpx 30rpx 120rpx;
  position: relative;
  display: block;
  z-index: 0;
}

.king-list > .king-item::after {
  content: "";
  display: block;
  position: absolute;
  width: 1rpx;
  background-color: #e6e6e6;
  left: 60rpx;
  height: 100%;
  top: 0;
  z-index: 8;
}

.king-list > .king-item::before {
  display: block;
  position: absolute;
  top: 36rpx;
  z-index: 9;
  background-color: #ffffff;
  width: 50rpx;
  height: 50rpx;
  text-align: center;
  border: none;
  line-height: 50rpx;
  left: 36rpx;
}

/* 名片微调 */
.img-solid {
  border: 2rpx solid #eee;
}

.share-img {
  position: fixed;
  /* padding: 10rpx; */
  width: 100rpx;
  height: 100rpx;
  /* top: 680rpx; */
  bottom: 200rpx;
  right: 20rpx;
  z-index: 1024;
  opacity: 0.8;
  box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
  border: none;
  border: 6rpx solid rgba(255, 255, 255, 0);
}

.resume {
  display: flex;
  justify-content: space-between;
  padding-top: 10rpx;
  border-radius: 6rpx;
  color: #666;
  line-height: 1.6;
}

.resume + .resume {
  margin-top: 20rpx;
}

.resume2 {
  padding-top: 10rpx;
  border-radius: 6rpx;
  display: block;
  color: #666;
  line-height: 1.6;
  text-align: justify;
}

/* 间隔线 start*/
.tn-strip-bottom {
  width: 100%;
  border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
}
/* 间隔线 end*/

.bg-img-cont {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350rpx;
  margin: 20rpx 0;
  border-radius: 8rpx;
}

// .button-no {
//   border: none;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0);
// }

/* 标签内容 start*/
.tn-tag-content {
  &__item {
    display: inline-block;
    line-height: 45rpx;
    padding: 10rpx 30rpx;
    margin: 0rpx 20rpx 25rpx 0rpx;

    &--prefix {
      padding-right: 10rpx;
    }
  }
}
/* 标签内容 end*/

.see {
  display: flex;
  justify-content: space-between;
  padding-top: 10rpx;
  border-radius: 6rpx;
  color: #666;
  line-height: 1.6;
}
</style>
