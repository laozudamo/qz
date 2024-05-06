<template>
	<view class="template-circle tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<swiper class="card-swiper" @click="tn('/homePages/navigation')" :circular="true" :autoplay="true"
			duration="500" interval="8000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
				<view class="swiper-item-text">
					<view class="tn-text-bold tn-color-white" style="font-size: 90rpx">{{
            item.title
          }}</view>
					<view class="tn-color-white tn-padding-top" style="font-size: 30rpx">{{ item.name }}</view>
					<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">
						{{ item.text }}</view>
				</view>
			</swiper-item>
		</swiper>

		<view class="" v-if="true">
			<view :style="{ vuex_custom_bar_height: 0 + 'px' }">
				<view class="tn-flex tn-flex-row-between tn-bg-yellow tn-round tn-padding-xs tn-margin">
					<view class="justify-content-item tn-text-center tn-flex" style="padding: 25rpx 30rpx">
						<tn-avatar-group :lists="latestUserAvatar" size="sm"></tn-avatar-group>
						<text class="tn-padding-xs">1629 人</text>
					</view>
					<view class="justify-content-item tn-text-right tn-padding-top-sm">
						<view class="tn-text-bold"> 高老庄 </view>
						<view class="tn-text-xs tn-color-gray--dark tn-padding-top-xs">
							欢迎加入我们
						</view>
					</view>
					<view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
					</view>
				</view>
			</view>

			<view class="tn-padding-lg tn-text-center tn-margin-xs tn-border-solids">
				TIPS TIPS TIPS
				<br />
				今天晚上村口音乐会
				<br />
				阿根廷，别再为我哭泣
				<br />
				克罗地亚狂想曲
				<br />
				.....
			</view>

			<view class="tn-flex tn-margin-xs tn-padding-top-sm">
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/moment/moment')">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-indigo--light tn-color-indigo">
							<view class="tn-icon-moments"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">动态</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/circlePages/chat')">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purplered--light tn-color-purplered">
							<view class="tn-icon-wechat"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">聊天室</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/moment/bookHotel')">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purple--light tn-color-purple">
							<view class="tn-icon-identity-fill"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">民宿</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/preferredPages/classify')">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-orange--light tn-color-orange">
							<view class="tn-icon-shop"></view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">集市</text>
						</view>
					</view>
				</view>
			</view>
			<view class="tn-tabbar-height"></view>
		</view>

		<tn-landscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">
			<view class="tn-flex" style="margin-bottom: 100rpx; padding-top: 46vh">
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navEdit">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
							<view class="tn-icon-camera-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发布动态</text>
						</view>
					</view>
				</view>
			</view>
		</tn-landscape>

		<view class="edit tnxuanfu" @tap="showLandscape">
			<view class="bg0 pa">
				<view class="bg1">
					<image src="https://resource.tuniaokj.com/images/my/my6.png" class="button-shop shadow"></image>
				</view>
			</view>

			<view class="hx-box pa">
				<view class="pr">
					<view class="hx-k1 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k2 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k3 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k4 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k5 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k6 pa0">
						<view class="span"></view>
					</view>
				</view>
			</view>
		</view>

	</view>
	</view>
</template>

<script>
	import {
		villageSwiper
	} from "@/api/swipper.js";
	export default {
		name: "CirclePage",
		data() {
			return {
				cardCur: 0,
				swiperList: [],
				current: 0,
				scrollList: [{
						name: "村庄"
					},
					// { name: "视频" },
					// { name: "世界", count: "" },
				],
				latestUserAvatar: [{
						src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"
					},
					{
						src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"
					},
					{
						src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"
					},
					{
						src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"
					},
				],
				bloggerList: [{
						id: 0,
						type: "image",
						name: "UI设计",
						text: "629人关注",
						url: "/static/avator.jpg",
					},
					{
						id: 1,
						type: "image",
						name: "前端开发",
						text: "688人关注",
						url: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
					},
					{
						id: 2,
						type: "image",
						name: "校园生活",
						text: "552人关注",
						url: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
					},
					{
						id: 3,
						type: "image",
						name: "户外摄影",
						text: "105人关注",
						url: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
					},
					{
						id: 4,
						type: "image",
						name: "电影点评",
						text: "387人关注",
						url: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
					},
					{
						id: 5,
						type: "image",
						name: "热血动漫",
						text: "643人关注",
						url: "https://resource.tuniaokj.com/images/blogger/content_1.jpeg",
					},
				],
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,

				adList: [{
						image: "https://resource.tuniaokj.com/images/swiper/ad1.jpg"
					},
					{
						image: "https://resource.tuniaokj.com/images/swiper/ad2.jpg"
					},
					{
						image: "https://resource.tuniaokj.com/images/swiper/ad3.jpg"
					},
					{
						image: "https://resource.tuniaokj.com/images/swiper/ad4.jpg"
					},
					{
						image: "https://resource.tuniaokj.com/images/swiper/ad5.jpg"
					},
				],
				adAutoplay: false,

				/* 压屏窗*/
				show2: false,
				maskCloseable: true,
			};
		},
		onLoad() {
			this.initContentData();
			this.contentHideShowHeight = uni.upx2px(56) * 3;
		},
		onReady() {
			// this.$nextTick(() => {
			//   this.getContentRectInfo()
			// })
		},
		created() {
			console.log("2222")
			this.getData();
		},
		onShow() {
			this.adAutoplay = true;
		},
		onHide() {
			this.adAutoplay = false;
		},
		methods: {
			getData() {
				villageSwiper().then((res) => {
					console.log(res);
					this.swiperList = res;
				});
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
				for (let i = 0; i < this.swiperList.length; i++) {
					const videoContext = uni.createVideoContext(
						`video-${this.swiperList[i]["id"]}`,
						this
					);
					if (i === this.cardCur) {
						// #ifdef H5
						videoContext.play();
						// #endif
						// #ifndef H5
						videoContext.play();
						// #endif
					} else {
						// #ifdef MP-WEIXIN
						videoContext.stop();
						// #endif
						// #ifndef MP-WEIXIN
						videoContext.pause();
						// #endif
					}
				}
			},
			// 暂停所有视频
			stopAllVideo() {
				this.current = 0;
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index;
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 震动跳转
			navEdit(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: "/circlePages/edit",
				});
			},
			// 震动跳转
			navCreate(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: "/circlePages/create",
				});
			},
			// 震动跳转
			navBuild(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: "/circlePages/build",
				});
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false;
					// 显示所有内容
					item.showAllContent = false;
					// 内容容器的实际高度
					item.contentContainerHeight = 0;
					// 内容容器是否初始化完成
					item.contentContainerInit = false;
					this.$set(this.content, index, item);
				});
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {};
				const query = uni.createSelectorQuery().in(this);
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect();
						contentRect[index] = item;
					}
				});
				// 获取所有内容的宽高信息
				query.exec((res) => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo();
						}, 10);
						return;
					}
					// console.log(res);
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id;
						const idIndex = /blogger__content--(\d)/.exec(id)[1];
						let contentItem = this.content[idIndex];
						contentItem.hideContent = item.height > this.contentHideShowHeight;
						contentItem.showAllContent = false;
						contentItem.contentContainerHeight = item.height;
						contentItem.contentContainerInit = true;
						this.$set(this.content, idIndex, contentItem);

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					});
				});
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index];
				contentItem.showAllContent = !contentItem.showAllContent;
				this.$set(this.content, index, contentItem);
			},

			// 弹出压屏窗
			showLandscape() {
				this.openLandscape();
			},
			// 打开压屏窗
			openLandscape() {
				// wx.vibrateLong();
				this.show2 = true;
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show2 = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.template-circle {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
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
				color: #aaaaaa;
			}
		}
	}

	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		margin-top: -15rpx;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
	/* 博主头像 start*/
	.image-circle {
		// padding: 95rpx;
		width: 190rpx;
		height: 190rpx;
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

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00ffc8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;
			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82b2ff;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
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
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */

	/* 全屏轮播  start*/
	.card-swiper {
		height: 100vh !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100vh;
		border-radius: 0rpx;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-png {
		margin-top: -50vh;
		width: 100%;
		display: block;
		border-radius: 0rpx;
		transform: translate(1040rpx, 20rpx) scale(0.5, 0.5);
		transition: all 0.6s ease 0s;
		// overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-png {
		margin-top: -100vh;
		width: 900rpx;
		transform: translate(-80rpx, 0rpx) scale(1, 1);
		transition: all 0.6s ease 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: fixed;
		// display:flex;
		display: block;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #000;
		opacity: 0.3;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 !important;
		left: 95vw;
		top: -60vh;
		position: relative;
	}

	.spot.active {
		opacity: 0.6;
		height: 30rpx;
		background-color: #000;
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #f8f7f8;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			padding: 5rpx 25rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}



</style>