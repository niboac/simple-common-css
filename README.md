# simple-common-css
一个简单易用的 css 基础库

## 安装
```
npm install sinple-common-css
```
或者
```
pnpm add sinple-common-css 
```

## 使用
```
<style>
  @import "simple-common-css/layout.css"
</style>
```
```
<div class="flex-middle">
  <div
    class="fcc"
    style="width: 7.5rem; height: 1rem; background-color: aqua"
  >
    <div>width: 750px;height: 100px;</div>
  </div>
</div>
```

## layout.css
### 对齐
- text-left: 左对齐
- text-center: 居中
- text-right: 右对齐
- inline-block: 行内块状元素

### flex
- flex: flex 布局
- flex-v, flex-column: 子元素竖向排列

- flex-center: 子元素在主轴上居中排列
- flex-between: 子元素在主轴上平均分布，首尾两端不留空间
- flex-around： 子元素在主轴上平均分布，每个子元素周围都留有相等的空间
- flex-evenly： 子元素在主轴上平均分布，包括首尾两端

- flex-start: 子元素在主轴上从起始位置开始排列
- flex-end: 子元素在主轴上从结束位置开始排列

- flex-middle: 子元素竖向居中排列
- fcc: 子元素横向和竖向都居中排列
- fcb: 子元素在竖向居中，横向平均分布，首尾两端不留空间

### position
- relative: 相对定位, 为 absolute 提供相对位置
- position: 绝对定位
- fixed: 相对于视口（浏览器窗口）进行定位

### display
- hide, hidden: 隐藏元素
- mute: 文字颜色淡化

### 换行
- nowrap: 禁止换行
- wrap: 换行
- ellipsis: 单行超出后显示...
- two-ellipsis: 2 行超出后显示...
- three-ellipsis: 3 行超出后显示...

### 其他
- mask: 遮罩层
- toast: toast 层
- disable-scroll: 禁止滚动
- bold: 粗体

## responsive.css
- 如果移动端设计稿使用宽度为 750, 在<html>标签上使用class="size750", 长度单位一律用 rem, 长度值一律使用设计稿 px 单位除以 100
- only-wap: 只在移动端显示, pc 端隐藏
- only-pc: 只在 pc 端显示, 移动端隐藏