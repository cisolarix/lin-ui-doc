(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{413:function(t,a,s){"use strict";s.r(a);var v=s(26),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"导航栏-tabbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏-tabbar"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 导航栏 TabBar")],1),t._v(" "),s("blockquote",[s("p",[t._v("导航栏适用场景：需要动态控制标签种类、数量，以及对样式自定义程度高的场景")])]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("导航栏使用微信小程序的"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 自定义 TabBar "),s("OutboundLink")],1),t._v("实现。"),s("strong",[t._v("在初次切换页面时，会发生闪烁")]),t._v("，该问题是微信小程序自定义 TabBar 底层实现方式导致，不属于 Lin UI 的问题。")]),t._v(" "),s("h2",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/tab-bar/1.png",alt:"height=100"}})])]),s("p",[t._v("根据"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序官方要求"),s("OutboundLink")],1),t._v("，要使用自定义 TabBar ，需进行如下配置：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在"),s("code",[t._v("app.json")]),t._v("中将"),s("code",[t._v("tabBar")]),t._v("的"),s("code",[t._v("custom")]),t._v("字段指定为"),s("code",[t._v("true")]),t._v("，具体参考"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此链接"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("在对应的"),s("strong",[t._v("每个")]),s("code",[t._v("tab")]),t._v("页面中引入"),s("code",[t._v("TabBar")]),t._v("组件并在页面中使用，同时指定"),s("code",[t._v("list")]),t._v("属性（"),s("strong",[t._v("该"),s("code",[t._v("list")]),t._v("会生效")]),t._v("）")])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面 json 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-tab-bar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/tab-bar/index"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 页面 wxml 文件 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tab-bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{list}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面 js 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                pagePath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/index/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"首页"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                unselectedIconPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/icons/tab-bar/index.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                selectedIconPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/icons/tab-bar/index-selected.png"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义背景图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义背景图片"}},[t._v("#")]),t._v(" 自定义背景图片")]),t._v(" "),s("p",[t._v("导航栏支持使用"),s("code",[t._v("bg-img")]),t._v("属性自定义背景图片，"),s("strong",[t._v("但不支持本地路径，请使用 https 开头的网络路径")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tab-bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bg-img")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://imgchr.com/i/Dj7f6P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{taobaoTabBar}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/tab-bar/2.png",alt:"height=100"}})])]),s("h2",{attrs:{id:"显示红点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示红点"}},[t._v("#")]),t._v(" 显示红点")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("list")]),t._v("数组中传入"),s("code",[t._v("redDot")]),t._v("属性，可以控制导航栏标签是否显示红点或者显示徽标。")]),t._v(" "),s("p",[t._v("redDot 支持传入"),s("code",[t._v("Boolean/Number")]),t._v("的值。"),s("strong",[t._v("当 redDot 为 false 时，不显示红点；为 true 时，显示红点；为数字时，显示徽标。默认为 false。")])]),t._v(" "),s("p",[t._v("下图中"),s("strong",[t._v("发现标签为红点,购物车标签为带数字的徽标")])]),t._v(" "),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/tab-bar/1.png",alt:"height=100"}})])]),s("h2",{attrs:{id:"导航栏属性-tabbar-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏属性-tabbar-attributes"}},[t._v("#")]),t._v(" 导航栏属性（TabBar Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("list")]),t._v(" "),s("td",[t._v("TabBar 绑定的页面路径")]),t._v(" "),s("td",[t._v("Array<Object>")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("bg-color")]),t._v(" "),s("td",[t._v("TabBar 背景色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("CSS 支持的颜色")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("white")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("bg-img")]),t._v(" "),s("td",[t._v("TabBar 背景图")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("图片网络路径")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("text-selected-color")]),t._v(" "),s("td",[t._v("TabBar 文字选中时的颜色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("CSS 支持的颜色")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("主题色")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("text-unselected-color")]),t._v(" "),s("td",[t._v("TabBar 文字未选中时的颜色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("CSS 支持的颜色")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("#666666")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"页面列表属性-list-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面列表属性-list-attributes"}},[t._v("#")]),t._v(" 页面列表属性（List Attributes）")]),t._v(" "),s("p",[s("code",[t._v("list")]),t._v("接收一个数组，数组中的每项都是一个对象，对象可配置属性如下表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pagePath")]),t._v(" "),s("td",[t._v("标签对应页面路径")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("0.8.12")])]),t._v(" "),s("tr",[s("td",[t._v("text")]),t._v(" "),s("td",[t._v("标签文字")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("0.8.12")])]),t._v(" "),s("tr",[s("td",[t._v("unselectedIconPath")]),t._v(" "),s("td",[t._v("未选中状态图标路径")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("0.8.12")])]),t._v(" "),s("tr",[s("td",[t._v("selectedIconPath")]),t._v(" "),s("td",[t._v("选中状态图标路径")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("0.8.12")])]),t._v(" "),s("tr",[s("td",[t._v("redDot")]),t._v(" "),s("td",[t._v("是否显示红点")]),t._v(" "),s("td",[t._v("Boolean/Number")]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v("/"),s("code",[t._v("false")]),t._v("/数字")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("0.8.12")])])])]),t._v(" "),s("h2",{attrs:{id:"导航栏事件-tabbar-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏事件-tabbar-events"}},[t._v("#")]),t._v(" 导航栏事件（TabBar Events）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bind:linchange")]),t._v(" "),s("td",[t._v("标签切换时触发")]),t._v(" "),s("td",[t._v("当前标签信息")]),t._v(" "),s("td")])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=_.exports}}]);