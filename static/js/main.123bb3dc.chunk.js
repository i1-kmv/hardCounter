(this["webpackJsonphard-counter"]=this["webpackJsonphard-counter"]||[]).push([[0],[,,,,function(e,a,t){e.exports={settings:"Settings_settings__2XT_P",wrapper:"Settings_wrapper__3i-Cd"}},function(e,a,t){e.exports={counter:"Counter_counter__10jrF",wrapper:"Counter_wrapper__2DaZI"}},,,,function(e,a,t){e.exports={area:"InputArea_area__2X5DT"}},function(e,a,t){e.exports={areas:"inputAreas_areas__1LJNs"}},function(e,a,t){e.exports={visual:"Visual_visual__3c286",visualNumber:"Visual_visualNumber__2Y-uH",visualNumberMax:"Visual_visualNumberMax__2bv8n",visualError:"Visual_visualError__1YWfJ"}},function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(7),u=t.n(n),l=(t(17),t(1)),o=t(8),c=t(2),p=t(3),i=(t(18),t(19),t(9)),v=t.n(i),m=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).render=function(){return s.a.createElement("div",{className:v.a.area},s.a.createElement("span",null,e.props.areaItem),s.a.createElement("input",{className:e.props.inputClass(),onChangeCapture:e.props.setValue,onFocus:e.props.onFocusActive,type:"number",placeholder:e.props.holderValue,value:e.props.value,onChange:e.props.onFocusActiveError}))},e}return t}(s.a.Component),V=t(10),f=t.n(V),d=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).state={placeholderStartValue:"enter start value",placeholderMaxValue:"enter max value"},e.render=function(){return s.a.createElement("div",{className:f.a.areas},s.a.createElement(m,{inputClass:e.props.inputClass,holderValue:e.state.placeholderMaxValue,value:e.props.maxValue,maxValue:e.props.maxValue,areaItem:e.props.areaItem[0],setValue:e.props.setMaxValue,onFocusActive:e.props.onFocusActive}),s.a.createElement(m,{inputClass:e.props.inputClass,holderValue:e.state.placeholderStartValue,value:e.props.startValue,startValue:e.props.startValue,setValue:e.props.setStartValue,areaItem:e.props.areaItem[1],onFocusActive:e.props.onFocusActive}))},e}return t}(s.a.Component),h=(t(20),function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).render=function(){return s.a.createElement("button",{onClick:function(){"inc"===e.props.name?e.props.counterInc():"reset"===e.props.name?e.props.counterReset():"set"===e.props.name&&e.props.setStart()},disabled:"enter values and press 'set'"===e.props.valueVisual&&"inc"===e.props.name||"enter values and press 'set'"===e.props.valueVisual&&"reset"===e.props.name||"Incorrect value"===e.props.valueVisual&&"reset"===e.props.name||"Incorrect value"===e.props.valueVisual&&"inc"===e.props.name||e.props.valueVisual===e.props.maxValue&&"inc"===e.props.name||"set"===e.props.name&&"enter values and press 'set'"!==e.props.valueVisual||""===e.props.startValue||""===e.props.maxValue?"disabled":void 0}," ",e.props.name," ")},e}return t}(s.a.Component)),x=t(4),b=t.n(x),S=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).render=function(){return s.a.createElement("div",{className:b.a.settings},s.a.createElement(d,{inputClass:e.props.inputClass,maxValue:e.props.maxValue,startValue:e.props.startValue,setStartValue:e.props.setStartValue,setMaxValue:e.props.setMaxValue,areaItem:e.props.areaItem,onFocusActive:e.props.onFocusActive}),s.a.createElement("div",{className:b.a.wrapper},s.a.createElement(h,{valueVisual:e.props.valueVisual,setStart:e.props.setStart,startValue:e.props.startValue,name:e.props.settingButtons,maxValue:e.props.maxValue})))},e}return t}(s.a.Component),g=t(11),_=t.n(g),E=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).render=function(){return s.a.createElement("div",{className:_.a["enter values and press 'set'"===e.props.valueVisual?"visual":e.props.valueVisual==e.props.maxValue?"visualNumberMax":"Incorrect value"===e.props.valueVisual?"visualError":"visualNumber"]},s.a.createElement("span",null,e.props.valueVisual))},e}return t}(s.a.Component),N=t(5),C=t.n(N),I=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).render=function(){return s.a.createElement("div",{className:C.a.counter},s.a.createElement(E,{valueVisual:e.props.valueVisual,maxValue:e.props.maxValue}),s.a.createElement("div",{className:C.a.wrapper},s.a.createElement(h,{valueVisual:e.props.valueVisual,counterInc:e.props.counterInc,name:e.props.counterButtons[0],maxValue:e.props.maxValue}),s.a.createElement(h,{valueVisual:e.props.valueVisual,counterReset:e.props.counterReset,name:e.props.counterButtons[1]})))},e}return t}(s.a.Component),O=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=a.call.apply(a,[this].concat(n))).state={settingButtons:"set",counterButtons:["inc","reset"],areaItem:["max value","start value"],valueVisual:"enter values and press 'set'",startValue:"",maxValue:"",inputClassGood:"good",inputClassBad:"bad"},e.componentDidMount=function(){e.restoreState()},e.saveState=function(){var a=JSON.stringify(e.state);localStorage.setItem("state",a)},e.restoreState=function(){var a=localStorage.getItem("state"),t=JSON.parse(a);e.setState(t)},e.counterReset=function(){var a=e.state.startValue;e.setState({valueVisual:a})},e.counterInc=function(){var a=++e.state.valueVisual;if(!(e.state.valueVisual>=e.state.startValue&&e.state.valueVisual<=e.state.maxValue))return!1;e.setState({valueVisual:a})},e.setStart=function(){Number(e.state.startValue)>0&&Number(e.state.startValue)<Number(e.state.maxValue)?e.setState({valueVisual:e.state.startValue},(function(){e.saveState()})):e.setState({valueVisual:"Incorrect value"},(function(){e.saveState()}))},e.setStartValue=function(a){var t=a.currentTarget.value;e.setState({startValue:t},(function(){e.saveState()}))},e.setMaxValue=function(a){var t=a.currentTarget.value;e.setState({maxValue:t},(function(){e.saveState()}))},e.onFocusActive=function(){(Number(e.state.startValue>0)||Number(e.state.startValue)<Number(e.state.maxValue))&&e.setState({valueVisual:"enter values and press 'set'"},(function(){e.saveState()}))},e.render=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S,{setStartValue:e.setStartValue,setMaxValue:e.setMaxValue,setStart:e.setStart,startValue:e.state.startValue,maxValue:e.state.maxValue,settingButtons:e.state.settingButtons,areaItem:e.state.areaItem,onFocusActive:e.onFocusActive,inputClass:function(a){return Number(e.state.startValue)>0&&Number(e.state.startValue)<Number(e.state.maxValue)||""===e.state.startValue||""===e.state.maxValue?e.state.inputClassGood:e.state.inputClassBad},valueVisual:e.state.valueVisual}),s.a.createElement(I,{counterInc:e.counterInc,counterReset:e.counterReset,counterButtons:e.state.counterButtons,valueVisual:e.state.valueVisual,startValue:e.state.startValue,maxValue:e.state.maxValue}))},e}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,a,t){var r=this,s=+this.state.maxValue,n=+this.state.startValue;n>=s&&a.startValue!==this.state.startValue?this.setState({valueVisual:"Incorrect value"},(function(){r.saveState()})):n<s&&a.startValue!==this.state.startValue&&this.setState({valueVisual:"enter values and press 'set'"},(function(){r.saveState()}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.123bb3dc.chunk.js.map