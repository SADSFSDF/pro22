(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-fb"],{"0f66":function(t,e,a){"use strict";var i=a("f2ad"),n=a.n(i);n.a},2068:function(t,e,a){"use strict";a.r(e);var i=a("7e1b"),n=a("7eab");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("0f66");var r,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"d854eaf2",null,!1,i["a"],r);e["default"]=u.exports},2901:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{overFlag:0}},onLoad:function(){},methods:{back:function(){uni.navigateBack()}}};e.default=i},"377d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.messageWrap[data-v-d854eaf2]{background:#fff;margin-top:%?22?%}.backBtn[data-v-d854eaf2]{width:%?20?%;height:%?38?%;position:absolute;top:%?35?%;left:%?30?%}.content[data-v-d854eaf2]{width:100%;height:100%;background:#f3f3f3;font-family:Helvetica Neue,Helvetica,sans-serif}.headerContent[data-v-d854eaf2]{padding-top:%?28?%;padding-bottom:%?30?%;padding-left:%?28?%;padding-right:%?28?%;background:#fff;color:#0a0a0a;text-align:center;font-weight:700;font-size:%?36?%;position:relative}.messageNoticeList[data-v-d854eaf2]{padding-top:%?40?%;margin-left:%?35?%;margin-right:%?35?%;border-bottom:1px solid #f5f5f5}.messageNoticeList uni-view[data-v-d854eaf2]{font-size:%?26?%;color:#333;font-weight:700;margin-bottom:%?5?%}.messageNoticeList uni-input[data-v-d854eaf2]{width:100%;border:none;color:grey;margin-bottom:%?5?%;font-size:%?24?%;padding-bottom:%?15?%;padding-top:%?4?%}.messageNoticeList uni-textarea[data-v-d854eaf2]{height:%?150?%;border:1px solid #dbdbdb;margin-top:%?20?%;margin-bottom:%?20?%;width:100%}.extraMessage[data-v-d854eaf2]{padding-bottom:%?40?%;padding-top:%?10?%}.fbBtn[data-v-d854eaf2]{width:86%;height:%?80?%;line-height:%?80?%;margin:0 auto;font-size:%?32?%;background:#3995ff;color:#fff;margin-top:%?30?%;border-radius:%?80?%;text-align:center}.fbBtnWrap[data-v-d854eaf2]{background:#f5f5f5;padding-bottom:%?30?%}',""]),t.exports=e},"7e1b":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content",class:{overhiddens:1==t.overFlag}},[i("v-uni-view",{staticClass:"headerContent"},[i("v-uni-image",{staticClass:"backBtn",attrs:{src:a("cb13"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-text",[t._v("信息发布")])],1),i("v-uni-view",{staticClass:"messageWrap"},[i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("需求标题")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入需求标题"}})],1),i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("薪酬范围")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入薪酬范围"}})],1),i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("工作周期")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入工作周期"}})],1),i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("技能要求")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入技能要求"}})],1),i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("经验要求")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入经验要求"}})],1),i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("详情描述")]),i("v-uni-textarea",{attrs:{value:"",placeholder:""}})],1)],1),i("v-uni-view",{staticClass:"messageWrap"},[i("v-uni-view",{staticClass:"messageNoticeList"},[i("v-uni-view",[t._v("免费声明")]),i("v-uni-view",{staticClass:"extraMessage"},[t._v("北京时间地区免责声明表示工程服务各项合格")])],1)],1),i("v-uni-view",{staticClass:"fbBtnWrap"},[i("v-uni-view",{staticClass:"fbBtn"},[t._v("发布需求")])],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},"7eab":function(t,e,a){"use strict";a.r(e);var i=a("2901"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},cb13:function(t,e){t.exports="data:image/png;base64,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"},f2ad:function(t,e,a){var i=a("377d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7c03fbd4",i,!0,{sourceMap:!1,shadowMode:!1})}}]);