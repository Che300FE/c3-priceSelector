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
        <li class="default-price__item" v-for="(price, $index) in priceList" :key="$index" @click="choosePirce(price)">
          <span class="default-price__value">{{ price.title }}</span>
          <span class="default-price__select-icon"
                v-show="selectedPrice.value === price.value && !selectedPrice.isDefine">
            <img src="https://fezz.che300.com/pics/priceSelect/city_selected_single@3x.png">
          </span>
        </li>
      </ul>

      <div class="define-price">
        <div class="define-price__header">
          <span class="define-price__header-title">自定义价格</span>
          <span class="define-price__header-confirm" @click="confirm">确定</span>
        </div>
        <div class="define-price__content">
          <div class="define-price__input-wrapper">
            <input type="number" class="define-price__input" v-model="definePirce.min" @input="definePriceChange">
            <span class="define-price__input—unit">万</span>
          </div>
          <span class="define-price__line"></span>
          <div class="define-price__input-wrapper">
            <input type="number" class="define-price__input" v-model="definePirce.max" @input="definePriceChange">
            <span class="define-price__input—unit">万</span>
            <div class="error__tip" v-show="definePriceError">
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
  // 默认可以选择的价格列表值
  const DEFAULT_PRICES = [
    {
      value: "",
      title: "不限"
    },
    {
      value: "0-3",
      title: "3万以下"
    },
    {
      value: "3-5",
      title: "3-5万"
    },
    {
      value: "5-10",
      title: "5-10万"
    },
    {
      value: "10-15",
      title: "10-15万"
    },
    {
      value: "15-20",
      title: "15-20万"
    },
    {
      value: "20-25",
      title: "20-25万"
    },
    {
      value: "25-30",
      title: "25-30万"
    },
    {
      value: "30-9999",
      title: "30万以上"
    }
  ];

  export default {
    name: PLUGIN_NAME,
    props: {
      // 组件是否显示的标识
      isVisiable: {
        type: Boolean,
        default: false
      },
      // 非自定义价格列表
      prices: {
        type: Array,
        default: () => []
      },
      initPrice: {
        type: Object,
        default: function () {
          return {}
        }
      },
      confirmCb: {
        type: Function,
        default: function () {},
      },
      goBack: {
        type: Function,
        default: function () {}
      }
    },
    data() {
      return {
        priceList: [],
        selectedPrice: {
          title: '',
          value: '',
          isDefine: false
        },
        definePirce: {
          min: '0',
          max: '0',
        },
        definePriceError: false,
      }
    },
    watch: {
      initPrice: {
        handler (newPrice) {
          console.log('价格属性发生改变，重新渲染价格组件');
          this.initPrice = newPrice;
          this.init();
        },
        deep: true
      }
    },
    created() {
      this.init();
    },
    methods: {
      // 初始化方法
	    init() {
        // 可自定义扩展的价格列表
        this.priceList = this.prices.length ? this.prices : DEFAULT_PRICES;
        // 初始化已经选择的价格
        this.selectedPrice = Object.assign(this.selectedPrice, this.initPrice);
        // 如果是自定义的数据
        this.selectedPrice.isDefine && this.setDefinePriceInterval(this.selectedPrice);
      },

      /**
       * 比较区间最小值和最大值是否合法
       * @param  {[Number,String]} minVal 区间最小值
       * @param  {[Number,String]} maxVal 区间最大值
       * @return {[Boolean]}       是否合法
       */
      testIntervalQualified (minVal, maxVal) {
        minVal = typeof minVal === 'number' ? minVal : Number(minVal);
        maxVal = typeof maxVal === 'number' ? maxVal : Number(maxVal);

        if (isNaN(minVal)) {
          throw new Error('自定义最小值非数字');
        }

        if (isNaN(maxVal)) {
          throw new Error('自定义最大值非数字');
        }

        if (minVal > maxVal) {
          throw new Error('自定义最小值大于最大值');
        }

        return true;
      },

      /**
       * 设置自定义价格区间到数据上
       * @param {[String]} definePrice 自定义的价格区间字符串
       */
      setDefinePriceInterval (definePrice) {
        var priceInterval = definePrice.value.split('-');
        var min = Number(priceInterval[0]) || 0;
        var max = Number(priceInterval[1]) || 0;

        try {
          // 满足测试条件对传入的自定义区间赋值
          if (this.testIntervalQualified(min, max)) {
            this.definePirce = {
              min, max
            };
          }
        }
        catch (e) {
          console.error(e);
        }
      },

      // 选择一个价格
      choosePirce(priceItem) {
        this.selectedPrice = Object.assign(this.selectedPrice, priceItem, {isDefine: false});
      },

      // 自定义价格值发生改变
      definePriceChange() {
        var _min = Number(this.definePirce.min);
        var _max = Number(this.definePirce.max);

        this.definePriceError = isNaN(_min) || isNaN(_max) || _min > _max;
        // 输入的值是正确大小的自定义价格
        if (!this.definePriceError) {
          this.selectedPrice = {
            title: `${_min}-${_max}万`,
            value: `${_min}-${_max}`,
            isDefine: true,
          };
        }
      },
      confirm() {
        if (!this.definePriceError) {
          this.confirmCb(this.selectedPrice);
        }
      }
    },

  }
</script>

<style scoped lang="scss">

  $baseFontSize: 37.5; // 默认基准font-size
  $white: #ffffff; // 白色
  $cheColor: #ff6600; // 车三百橙色

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

  .c3-price-selector {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #f5f5f5;
    z-index: 998;

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

    .price__content {
      position: absolute;
      top: 45px;
      left: 0;
      bottom: 0;
      width: 100%;
      overflow-y: scroll;

      .default-price__list {
        background-color: $white;

        .default-price__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          @include px2rem(height, 45);
          @include px2rem(margin-left, 15);
          @include px2rem(margin-right, 0);
          @include border(1px, solid, #f0f0f0, bottom);
          @include px2rem(font-size, 16);
          background-color: $white;

          .default-price__select-icon {
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

      .define-price {
        box-sizing: border-box;
        @include px2rem(padding, 15);
        @include px2rem(margin-top, 10);
        background-color: $white;

        .define-price__header {
          display: flex;
          justify-content: space-between;
          @include px2rem(font-size, 16);

          .define-price__header-confirm {
            color: $cheColor;
          }
        }

        .define-price__content {
          display: flex;
          justify-content: center;
          align-items: center;
          @include px2rem(margin-top, 20);

          .define-price__input-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 47%;
            @include px2rem(height, 40);
            border-radius: 4px;
            background-color: #f5f5f5;

            .define-price__input {
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

            .define-price__input—unit {
              @include px2rem(margin-right, 10);
              @include px2rem(font-size, 16);
            }

            .error__tip {
              position: absolute;
              height: 22px;
              line-height: 22px;
              top: -30px;
              left: 0;
              padding: 0 5px;
              background-color: #333333;
              color: $white;

              &::before {
                content: '';
                position: absolute;
                left: 10px;
                bottom: 0;
                transform: translate(0, 90%);
                width: 0;
                height: 0;
                border-top: solid 8px #333333;
                border-left: solid 8px transparent;
                border-right: solid 8px transparent;
                border-bottom: solid 8px transparent;
              }
            }
          }

          .define-price__line {
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
