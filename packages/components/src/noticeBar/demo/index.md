# 通知栏 noticeBar

## 何时使用

需要在页面顶部滚动提示时，如果需要静态展示那么直接使用Alert组件的banner属性顶部公告形态即可，NoticeBar也是基于Alert组件实现的。

<demo src="./demos/basic.vue" />

## Tips

大部分Props和事件与ant-design-vue一致。修改了banner属性默认为true，通知栏基础样式基于此属性，closeable属性默认为true，通知栏消息滚动播放后，用户会关掉它不占用界面。

```diff
-- | banner | 是否用作顶部公告 | boolean | false |
-- | closable | 默认不显示关闭按钮 | boolean | 无 |
++ | banner | 是否用作顶部公告 | boolean | true |
++ | closable | 默认显示关闭按钮 | boolean | true |
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 自定义操作项 | slot | - |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |
| banner | 是否用作顶部公告 | boolean | true |
| closable | 默认不显示关闭按钮 | boolean | true |
| closeIcon | 自定义关闭 Icon | slot | `<CloseOutlined />` |
| closeText | 自定义关闭按钮 | string\|slot | 无 |
| description | 警告提示的辅助性文字介绍 | string\|slot | 无 |
| icon | 自定义图标，`showIcon` 为 `true` 时有效 | vnode\|slot | - |
| message | 警告提示内容 | string\|slot | 无 |
| showIcon | 是否显示辅助图标 | boolean | false,`banner` 模式下默认值为 true |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`,`banner` 模式下默认值为 `warning` |

### 事件

| 事件名称 | 说明                 | 回调参数                |
| -------- | -------------------- | --------------------- |
| close    | 关闭时触发的回调函数 | (e: MouseEvent) => void |
