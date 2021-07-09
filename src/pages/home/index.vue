<template>
  <view>
    <view class="home-tab">
      <view class="home-tab-title">
        <view class="title-inner">
          <uni-segmented-control
            :current="current"
            :values="items.map((v) => v.title)"
            @clickItem="onClickItem"
            styleType="text"
            activeColor="#de237a"
          ></uni-segmented-control>
        </view>
        <view class="iconfont iconsearch"></view>
      </view>
      <view class="home-tab-content">
        <view class="content">
          <view v-if="current === 0">

            <home-recommend></home-recommend>
          </view>
          <view v-if="current === 1">
            <home-category></home-category>
          </view>
          <view v-if="current === 2">
            <home-new></home-new>
          </view>
          <view v-if="current === 3">
            <home-album></home-album>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { uniSegmentedControl } from "@dcloudio/uni-ui";
import homeAlbum from "./home-album";
import homeNew from "./home-new";
import homeCategory from "./home-category";
import homeRecommend from "./home-recommend";

export default {
  components: {
    uniSegmentedControl,
    homeAlbum,
    homeNew,
    homeCategory,
    homeRecommend,
  },
  data() {
    return {
      title: "Hello",
      items: [
        { title: "推荐" },
        { title: "分类" },
        { title: "最新" },
        { title: "专辑" },
      ],
      current: 0,
    };
  },
  onLoad() {
    
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>

<style lang="scss">
.home-tab {
  .title-inner {
    width: 60%;
    margin: 0 auto;
  }

  .home-tab-title {
    position: relative;
    .iconsearch {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5%;
    }
  }
  .home-tab-content {
  }
}
</style>
