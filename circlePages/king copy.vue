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
              background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377641839-assets/web-upload/8a247704-9256-4c88-836a-90fee5aee611.jpeg');
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

        <!-- <view class="king-icon">
          <text
            class="tn-icon-company tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">教育背景</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view>
            <view class="resume tn-text-lg">
              <view class="">2014-09 ~ 2018-06</view>
              <view class="">软件开发</view>
            </view>
            <view class="resume2">
              <text>广州大学华软软件学院</text>
            </view>
            <view class="resume2">
              <text
                >学习课程：数据结构与算法、嵌入式系统设计与实践Ⅱ、内核驱动程序开发、Illustrator软件应用、移动互联网UI设计、复变函数与积分变换、日语Ⅱ等</text
              >
            </view>
          </view>
        </view> -->

        <!-- <view class="king-icon">
          <text
            class="tn-icon-trophy tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">技能证书</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view>
            <view class="resume2">
              <text>操作系统：Windows、Linux</text>
            </view>
            <view class="resume2">
              <text>计算机语言：C、HTML5、CSS3、Java web、Uniapp</text>
            </view>
            <view class="resume2">
              <text>编程软件：HbuilderX、微信web、MyEclipse、keil4、Mysql</text>
            </view>
            <view class="resume2">
              <text>设计软件：PS、Ai、Pr、xiaopiu、Axure、蓝湖、墨刀</text>
            </view>
            <view class="resume2">
              <text>其他工具：Xmind、Visio、iconfont、语雀</text>
            </view>
            <view class="resume2">
              <text
                >证书：Photoshop二级、网页设计二级、高级办公软件二级、计算机等级证书一级、英语四级</text
              >
            </view>
          </view>
        </view> -->

        <!-- <view class="king-icon">
          <text
            class="tn-icon-footprint tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">工作经历</text>
        </view> -->
        <!-- <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2020-11 ~ 至今</text>
            <text class="fr">产品经理</text>
          </view>
          <view class="resume2">
            <text>抓住那只猪科技</text>
          </view>
          <view class="resume2">
            <text
              >原型设计，交互设计，客户沟通；主要负责公司SaaS系统的搭建与上线，对需求进行梳理，为客户内部提供一个包含审批流、分佣等功能的SaaS系统</text
            >
          </view>
        </view> -->
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2019-10 ~ 2020-08</text>
            <text class="fr">软件工程师</text>
          </view>
          <view class="resume2">
            <text>真乐发科技</text>
          </view>
          <view class="resume2">
            <text
              >原型设计，交互设计，UI设计，前端界面编写；主要负责公司erp系统的搭建与上线，根据需求，深入、细致地为用户提供项目上的建议与解决办法，提供服务器代理服务，帮助同事使用erp项目</text
            >
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2018-05 ~ 2019-06</text>
            <text class="fr">UI工程师</text>
          </view>
          <view class="resume2">
            <text>长星光电科技</text>
          </view>
          <view class="resume2">
            <text
              >根据产品需求，对公司项目的整体美术风格、交互设计、界面结构、操作流程等做出设计；负责公司APPUI界面设计，网站官网的搭建以及维护，为公司新产品与新功能提供创意及设计方案；参与设计讨论，和开发团队共同创建用户界面，跟踪设计效果，提出设计优化方案</text
            >
          </view>
        </view>

        <view class="king-icon">
          <text
            class="tn-icon-honor tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">酷炫项目</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2022-05 ~ 2022-05</text>
            <text class="fr"> 模板</text>
          </view>
          <!-- <view class="resume2">
              <text>东东工作室</text>
            </view> -->
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://resource.tuniaokj.com/images/advertise/7.jpg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：基于酷炫UI的一套模板，更多详情可微信小程序搜索“ 模板”</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：想法的整理，原型设计，Ul设计，前端界面编程等等</text
            >
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2021-12 ~ 2022-03</text>
            <text class="fr"> UI</text>
          </view>
          <!-- <view class="resume2">
              <text>东东工作室</text>
            </view> -->
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://resource.tuniaokj.com/images/advertise/8.jpg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：酷炫UI组件库，更多详情可微信小程序搜索“ UI”</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：想法的整理，原型设计，Ul设计，前端界面编程等等</text
            >
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2019-10 ~ 2020-12</text>
            <text class="fr"> 官网</text>
          </view>
          <!-- <view class="resume2">
              <text>东东工作室</text>
            </view> -->
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629527289065-assets/web-upload/422cb1af-62b6-4574-8bc3-e2d0d9f023ea.jpeg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：科技类小程序官网，更多详情可微信小程序搜索“ ”</text
            >
          </view>
          <view class="resume2">
            <text>职责描述：想法的整理，原型设计，Ul设计，前端界面编程</text>
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2018-12 ~ 2018-12</text>
            <text class="fr">简历王者</text>
          </view>
          <!-- <view class="resume2">
              <text>东东工作室</text>
            </view> -->
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629527293232-assets/web-upload/c4e46812-9aab-4d4b-b6c2-8d2d6f1c4662.jpeg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：简历王者小程序，能够实现职业模板的选择，简历的创建，简历的收藏，应聘求职的推送，简历的分享，海报的生成，简历码的保存等七大功能；其中，简历王者为个人开发应用，为用户提供免费酷炫的简历创建</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：想法的整理，原型设计，Ul设计，到前后端代码的一行行敲出来</text
            >
          </view>
        </view>

        <view class="king-icon">
          <text
            class="tn-icon-brand tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">工作项目</text>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2021-03 ~ 2021-04</text>
            <text class="fr">【娃哈哈】哈Tea乐园</text>
          </view>
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629527293242-assets/web-upload/b2fee5b4-8ec9-4a42-b101-fc93975298cd.jpeg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：拼图小程序，拼图成功则领取娃哈哈点单小程序的优惠券，为娃哈哈点单小程序引流</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：在这个作品里面负责产品一职，为客户提供引流方案，更多详情可搜索“哈Tea乐园”，可长按小程序码识别前往</text
            >
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2020-11 ~ 2021-01</text>
            <text class="fr">【腾讯】Hi S3</text>
          </view>
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629561731672-assets/web-upload/b881af63-a893-4474-8ae7-cb823a5c1fea.jpeg);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：腾讯招聘部文化小程序，腾讯S3内部打卡小程序，功能包括：S3历史时间轴，S3老照片（朋友圈社区），S3价值观，新人融入（地图打卡，如上图），默契度测试（答题），S3词典（词典互动卡片），员工大会（抽奖，直播，领取红包封面等功能）</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：在这个作品里面负责产品一职，没有更多详情，因为只能腾讯内部员工访问</text
            >
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2020-02 ~ 2020-02</text>
            <text class="fr">微信红包封面</text>
          </view>
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/png/280373/1629527289054-assets/web-upload/a3699c34-1997-4da5-b358-351858099617.png);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：微信红包封面为群里小伙伴举行的一次红包封面活动，创意与配色拉满的设计</text
            >
          </view>
          <view class="resume2">
            <text>职责描述：活动的发起和组织，设计微信红包封面，发放封面</text>
          </view>
        </view>
        <view class="king-item tn-color-red tn-icon-circle-fill">
          <view class="resume text-lg">
            <text>2020-07 ~ 2020-07</text>
            <text class="fr">蜗趣找房</text>
          </view>
          <view
            class="bg-img-cont img-solid"
            style="
              background-image: url(https://cdn.nlark.com/yuque/0/2021/png/280373/1629527289059-assets/web-upload/b22b89de-4a93-4e4e-a51b-54fa0c624d83.png);
            "
          >
          </view>
          <view class="resume2">
            <text
              >项目介绍：房源管理小程序，截至2020年8月，在广州天河车陂，已上传300+套房源，可长按小程序码识别前往</text
            >
          </view>
          <view class="resume2">
            <text
              >职责描述：与客户沟通需求，需求分析，负责产品的功能规划，编写产品需求文档，对产品的长期发展战略提出建议性意见，进行相关市场调查，为客户需求提供相应依据；负责原型图逻辑设计，以及Uniapp前端界面编程</text
            >
          </view>
        </view>

        <view class="king-icon">
          <text
            class="tn-icon-tag tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">个性标签</text>
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
