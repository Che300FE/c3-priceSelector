<template>
  <div
    v-if="isVisiable"
    class="c3-price-selector">

    <!-- 顶部的bar条开始 -->
    <div class="title-bar">
      <div class="go-back__arrow" @click.stop="goBack">
        <img class="back-img" src="https://ssl-assets.che300.com/feimg/bapp/substitution/left-arrow.png">
      </div>
      <h2 class="title-name">价格选择</h2>
    </div>
    <!-- 顶部bar条结束 -->

    <div class="price__content">
      <ul class="default-price__list">
        <li class="default-price__item">
          <span class="default-price__value">不限</span>
          <span class="default-price__select-icon">
            <img src="../assets/imgs/city_selected_single@3x.png">
          </span>
        </li>
        <li class="default-price__item">
          <span class="default-price__value">3万以下</span>
          <span class="default-price__select-icon">
            <img src="../assets/imgs/city_selected_single@3x.png">
          </span>
        </li>
      </ul>

      <div class="define-price">
        <div class="define-price__header">
          <span class="define-price__header-title">自定义价格</span>
          <span class="define-price__header-confirm">确定</span>
        </div>
        <div class="define-price__content">
          <div class="define-price__input-wrapper">
            <input type="number" class="define-price__input">
            <span class="define-price__input—unit">万</span>
          </div>
          <span class="define-price__line"></span>
          <div class="define-price__input-wrapper">
            <input type="number" class="define-price__input">
            <span class="define-price__input—unit">万</span>
            <div class="error__tip">
              请从低到高输入
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  const PLUGIN_NAME = "price-selector";

  export default {
    name: PLUGIN_NAME,
    props: {
      // 组件是否显示的标识
      isVisiable: {
        type: Boolean,
        default: true
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">

  $baseFontSize: 37.5; // 默认基准font-size
  $white: #ffffff;     // 白色
  $cheColor: #ff6600;  // 车三百橙色

  // px2rem 方法
  @mixin px2rem($name, $px) {
    #{$name}: $px / $baseFontSize * 1rem;
  }

  // 设置边框
  @mixin border($width: 1px, $type: solid, $color: #f0f0f0, $position:false) {
    @if not ($position) {
      border: $width $type $color;
    } @else {
      border-#{$position}: $width $type $color;
    }
  }

  .c3-price-selector{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #f5f5f5;

    .title-bar {
      position: relative;
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: .51rem;
      background-color: #ffffff;
      border-bottom: 1px solid #f0f0f0;

      .go-back__arrow {
        position: absolute;
        left: 0;
        top: 0;
        height: 45px;
        width: 50px;
        .back-img {
          width: .24rem;
          height: .48rem;
        }
      }
      .title-name {
        margin: 0;
        padding: 0;
      }
    }

    .price__content{
      position: absolute;
      top: 45px;
      left: 0;
      bottom: 0;
      width: 100%;
      overflow-y: scroll;

      .default-price__list{
        background-color: $white;

        .default-price__item{
          display: flex;
          align-items: center;
          justify-content: space-between;
          @include px2rem(height, 45);
          @include px2rem(margin-left, 15);
          @include px2rem(margin-right, 0);
          @include border(1px, solid, #f0f0f0, bottom);
          @include px2rem(font-size, 16);
          background-color: $white;

          .default-price__select-icon{
            @include px2rem(width, 20);
            @include px2rem(height, 20);
            @include px2rem(margin-right, 10);
            font-size: 0;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .define-price{
        box-sizing: border-box;
        @include px2rem(padding, 15);
        @include px2rem(margin-top, 10);
        background-color: $white;

        .define-price__header{
          display: flex;
          justify-content: space-between;
          @include px2rem(font-size, 16);

          .define-price__header-confirm{
            color: $cheColor;
          }
        }

        .define-price__content{
          display: flex;
          justify-content: center;
          align-items: center;
          @include px2rem(margin-top, 20);

          .define-price__input-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 47%;
            @include px2rem(height, 40);
            border-radius: 4px;
            background-color: #f5f5f5;

            .define-price__input{
              width: 80%;
              box-sizing: border-box;
              @include px2rem(height, 20);
              @include px2rem(padding-left, 10);
              @include px2rem(line-height, 20);
              @include px2rem(font-size, 16);
              background-color: #f5f5f5;
              border: none;
              outline: none;
            }

            .define-price__input—unit{
              @include px2rem(margin-right, 10);
              @include px2rem(font-size, 16);
            }

            .error__tip{
              position: absolute;
              height: 22px;
              line-height: 22px;
              top: -30px;
              padding: 0 5px;
              background-color: #333333;
              color: $white;

              &:before{
                content: '';
                position: absolute;
                left: 10px;
                bottom: 0;
                transform: translate(0,90%);
                width: 0;
                height: 0;
                border-top:solid 8px #333333;
                border-left:solid 8px transparent;
                border-right:solid 8px transparent;
                border-bottom:solid 8px transparent;
              }
            }
          }

          .define-price__line{
            @include px2rem(width, 8);
            height: 1px;
            margin: 0 6px;
            background-color: #333333;
          }
        }
      }
    }
  }
</style>
