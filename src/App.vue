<template>
  <div id="app">
    <price-selector
      :isVisiable="true"
      :init-price="initPrice"
    ></price-selector>
  </div>
</template>

<script>

  import priceSelector from "./components/price-selector";

  export default {
    name: 'app',
    components: {
      priceSelector
    },
    data() {
      return {
        initPrice: {
          title: '10-15万',
          value: '10-15',
          isDefine: true
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.initPrice =  Object.assign(
          {},
          {
            title: '15-20万',
            value: '15-20',
            isDefine: false
          }
        );
      }, 3000);
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
