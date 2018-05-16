# c3-price-selector

> 车300价格选择器  业务组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 0.0.6

增加了 initPirce 属性字段的监听

当通过如下代码可以自动修改组件内部价格显示的值

```js
 initPirce = Object.assign(
   {},
   initPirce,
   {
     title: '1-100万',
     value: '1-100',
     isDefine: false
   }
 );
```

### 0.0.8

1. 复了 initPrice 字段值修改修改失效的问题
2. 修改了字段名称
