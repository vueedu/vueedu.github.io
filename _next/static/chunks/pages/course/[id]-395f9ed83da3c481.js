(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{5694:function(e,n,t){"use strict";var s=t(59499),r=t(89552),c=t(85893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,s)}return t}n.Z=function(e){return(0,c.jsx)("div",{className:"loading-container",children:(0,c.jsx)(r.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach(function(n){(0,s.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({tip:"数据加载中...",size:"small"},e))})}},23100:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return W},default:function(){return Y}});var s=t(62443),r=t(50029),c=t(59499),a=t(87794),i=t.n(a),l=t(67294),o=t(96486),d=t(89250),u=t(1653),m=t(4497),h=t(85893),j=function(e){var n=e.items,t=(0,l.useState)(n[0].key),s=t[0],r=t[1],c=function(e){r(e)};return(0,h.jsxs)("div",{className:"tabs",children:[(0,h.jsx)("div",{className:"tab-nav-list",children:n.map(function(e){var n=e.title,t=e.key;return(0,h.jsx)("div",{className:"tabs-tab ".concat(t===s?"tabs-tab-active":""),onClick:function(){return c(t)},children:n},t)})}),(0,h.jsx)("div",{className:"tabs-content-list",children:n.map(function(e){var n=e.key,t=e.content;return(0,h.jsx)("div",{className:"tabs-content-item ".concat(n===s?"":"tabs-content-item-hidden"),children:t},n)})})]})},p=t(5694),f=t(63828),x=t(56697),v=t(65400),b=t(64749),g=t(64713),y=t(51024),N=t(97538),O=t(72640),I=t(82897),w=t(3306),k=t(90886);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,s)}return t}var Z=["大一","大二","大三","大四","硕士研究生","博士研究生","大学老师","公司技术工程师","其他"],S=[{value:"未订阅通知",label:"不订阅通知"},{value:"已订阅短信通知",label:"订阅短信通知"},{value:"已订阅电话通知",label:"订阅电话通知"},{value:"已订阅全部通知",label:"订阅全部通知"}],_=function(e){var n,t=N.Z.useForm(),s=(0,O.Z)(t,1)[0],a=(n=(0,r.Z)(i().mark(function n(t){var s,r;return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return 2!=(s=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},t)).status||s.name.endsWith("老师")||(s.name=s.name+"老师"),s.status=s.status||1,s.phone=localStorage.getItem(I.VY),s.clientId=e.courseInfo.clientId,s.courseId=e.courseInfo.courseId,s.uniCourseId=e.courseInfo.id,s.course=e.courseInfo.title,s.verify="1",s.classId=1,n.next=12,(0,w.L0)(s);case 12:r=n.sent,e.onSubmit(r);case 14:case"end":return n.stop()}},n)})),function(e){return n.apply(this,arguments)});return(0,h.jsxs)(N.Z,{form:s,className:"normal-form",onFinish:a,autoComplete:"off",size:"large",labelCol:{span:4},wrapperCol:{span:20},initialValues:{gender:"男",tag:S[1].value},children:[(0,h.jsx)("h3",{children:"报名"}),(0,h.jsx)(N.Z.Item,{label:"姓名",name:"name",rules:[{required:!0,message:"请输入姓名"}],children:(0,h.jsx)(y.Z,{placeholder:"请输入姓名"})}),(0,h.jsx)(N.Z.Item,{label:"性别",name:"gender",children:(0,h.jsxs)(g.ZP.Group,{children:[(0,h.jsx)(g.ZP,{value:"男",children:"男"}),(0,h.jsx)(g.ZP,{value:"女",children:"女"})]})}),(0,h.jsx)(N.Z.Item,{label:"年级",name:"age",children:(0,h.jsx)(b.Z,{children:Z.map(function(e){return(0,h.jsx)(b.Z.Option,{value:e,children:e},e)})})}),(0,h.jsx)(N.Z.Item,{label:"备注",name:"tag",children:(0,h.jsx)(b.Z,{children:S.map(function(e){var n=e.label,t=e.value;return(0,h.jsx)(b.Z.Option,{value:t,children:n},t)})})}),(0,h.jsx)(N.Z.Item,{wrapperCol:{span:24},children:(0,h.jsx)(v.default,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"确认"})})]})},C=function(e){var n=(0,l.useState)(e.defaultVisible),t=n[0],s=n[1],r=(0,k.mr)(),c=r.state.myRegisters,a=r.dispatch;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"btn",onClick:function(){return s(!0)},children:"立即报名"}),(0,h.jsx)(x.Z,{width:350,open:t,footer:null,onCancel:function(){return s(!1)},maskClosable:!1,children:(0,h.jsx)(_,{onSubmit:function(n){var t;a({type:"UPDATE_MY_COURSES",payload:(c||[]).concat(n)}),null===(t=e.onRegisterCourse)||void 0===t||t.call(e,n),s(!1)},courseInfo:e.courseInfo})})]})},E=t(50563),D=t(36671),R={2:"status-teacher.png",4:"status-ta.png",5:"status-admin.png"},T=function(e){var n=(0,k.dD)();return(0,o.isEmpty)(e.data)?(0,h.jsx)("div",{className:"studentlist-wrap",children:(0,h.jsx)(D.default,{})}):null!=n&&n.mobile()?(0,h.jsx)("div",{className:"list-mobile",children:(0,o.map)(e.data,function(e,n){return(0,h.jsxs)("div",{className:"list-item",children:[(0,h.jsx)("div",{className:"list-item-index",children:n+1}),(0,h.jsxs)("div",{className:"list-item-main-info",children:[(0,h.jsxs)("div",{className:"info-name",children:[e.name,e.status!==m.d.STUDENT&&(0,h.jsx)("img",{height:"14",src:"img/".concat(R[e.status]),alt:"student-status-png"})]}),(0,h.jsx)("div",{className:"info-other",children:(0,h.jsxs)("span",{className:"current-bg",children:[(0,h.jsx)("span",{className:"list-item-label",children:"职业:"})," ",e.age]})})]}),(0,h.jsx)("div",{className:"list-item-gender ".concat("女"===e.gender?"woman":"man"),children:"女"===e.gender?(0,h.jsx)(f.Z,{symbol:"icon-nv"}):(0,h.jsx)(f.Z,{symbol:"icon-xingbienan"})}),(0,h.jsx)("div",{className:"list-item-tag",children:e.tag})]},e.id)})}):(0,h.jsx)("div",{className:"list-wrap",children:(0,h.jsxs)("table",{cellSpacing:"0",cellPadding:"0",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:(0,h.jsx)("span",{children:"昵称"})}),(0,h.jsx)("th",{children:(0,h.jsx)("span",{children:"年级"})}),(0,h.jsx)("th",{children:(0,h.jsx)("span",{children:"性别"})}),(0,h.jsx)("th",{children:(0,h.jsx)("span",{children:"备注"})})]})}),(0,h.jsx)("tbody",{children:(0,o.map)(e.data,function(e,n){return(0,h.jsxs)("tr",{children:[(0,h.jsxs)("td",{className:"lalign",children:[(0,h.jsx)("span",{className:"index",children:n+1}),(0,h.jsxs)("span",{className:"student-name",children:[e.name,e.status!==m.d.STUDENT&&(0,h.jsx)("img",{height:"14",src:"img/".concat(R[e.status]),alt:"student-status-png"})]})]}),(0,h.jsx)("td",{children:e.age}),(0,h.jsx)("td",{children:e.gender}),(0,h.jsx)("td",{children:e.tag})]},e.id)})})]})})},U=t(2898),L=t(11163),A=t(74842),M=["教室号","课程名称","开始时间","上课地点","备注","课堂回放"],F=function(e){var n,t=(0,k.dD)(),s=(0,L.useRouter)(),c=(0,k.mr)(),a=c.state,l=a.currentUser,u=a.myRegisters,m=c.dispatch,j=(0,d.UO)().id,p=(n=(0,r.Z)(i().mark(function e(n){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.push("replay/".concat(n.id)));case 1:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),f=function(e){if(null!=l&&l.phone){var n=(0,o.find)(u,function(e){return e.courseId===j});n?"1"===n.verify?p(e):U.u_.alert({content:"报名信息审核通过即可观看",closeOnMaskClick:!0}):U.u_.alert({content:"请报名课程后观看",closeOnMaskClick:!0})}else m({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:!0})};return null!=t&&t.mobile()?(0,h.jsx)("div",{className:"list-mobile",children:(0,o.map)(e.data,function(e){return(0,h.jsxs)("div",{className:"list-item",onClick:function(){return f(e)},children:[(0,h.jsxs)("div",{className:"list-item-main-info",children:[(0,h.jsxs)("div",{className:"info-name",children:[e.className,(0,h.jsx)("span",{className:"location-tag",children:e.location})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"list-item-label",children:"教室号:"})," ",e.roomId]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"list-item-label",children:"开始时间:"})," ",e.startAt]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"list-item-label",children:"备注:"})," ",e.remark]})]}),(0,h.jsx)("div",{className:"list-item-actions",children:(0,h.jsx)(A.Z,{})})]},e.id)})}):(0,h.jsx)("div",{className:"list-wrap",children:(0,h.jsxs)("table",{cellSpacing:"0",cellPadding:"0",children:[(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:M.map(function(e){return(0,h.jsx)("th",{children:(0,h.jsx)("span",{children:e})},e)})})}),(0,h.jsx)("tbody",{children:(0,o.map)(e.data,function(e,n){return(0,h.jsxs)("tr",{children:[(0,h.jsxs)("td",{className:"lalign",children:[(0,h.jsx)("span",{className:"index",children:n+1}),e.roomId]}),(0,h.jsx)("td",{children:e.className}),(0,h.jsx)("td",{children:e.startAt}),(0,h.jsx)("td",{children:e.location}),(0,h.jsx)("td",{children:e.remark}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"player-btn",onClick:function(){return f(e)},children:(0,h.jsx)(A.Z,{})})})]},e.id)})})]})})};function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,s)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var V=function(e){var n=(0,k.mr)(),t=n.state,s=t.currentUser,r=t.myRegisters;n.dispatch;var c=(0,d.UO)().id,a=(0,l.useRef)(null),i=(0,l.useRef)(null),m="";if(null!=s&&s.phone){var j=(0,o.find)(r,function(e){return e.courseId===c});if(j){var p=encodeURIComponent("pages/room/room?userId=".concat(j.phone,"-m&roomId=").concat(e.courseInfo.roomId,"&role=").concat(I.sJ[j.status]||"student","&username=").concat(j.name,"-m"));m="".concat(E._,"/seller/api/room/path.jpg?path=").concat(p)}else{var x=encodeURIComponent("pages/index/index?roomId=".concat(e.courseInfo.roomId));m="".concat(E._,"/seller/api/room/path.jpg?path=").concat(x)}}return(0,l.useEffect)(function(){if(i.current){var e=i.current,n=new XMLSerializer().serializeToString(e);a.current.src="data:image/svg+xml;base64,".concat(btoa(n))}},[i.current]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Z,{ref:i,style:{display:"none",height:"auto",maxWidth:"100%",width:"100%"},value:window.location.href,fgColor:"#3db477",viewBox:"0 0 256 256"}),(0,h.jsxs)("div",{className:"share-box",children:[(0,h.jsxs)("span",{children:[(0,h.jsx)(f.Z,{symbol:"icon-share"}),"分享二维码"]}),(0,h.jsx)("span",{style:{marginBottom:10},children:"邀请好友加入课堂"}),(0,h.jsxs)("div",{className:"share-imgs ".concat(e.isMobile?"share-imgs-mobile":""),children:[(0,h.jsx)("img",{ref:a,alt:"share-course",className:"qr-code"}),m&&(0,h.jsx)("img",{src:m,alt:"mini"})]})]})]})},q=function(e){var n=(0,k.mr)(),t=n.state,s=t.currentUser,r=t.myRegisters,c=n.dispatch,a=(0,d.UO)().id,i=function(e){e.name,e.phone,e.status};if(null!=s&&s.phone){var l=(0,o.find)(r,function(e){return e.courseId===a});return l?(0,h.jsx)("button",{className:"btn",onClick:function(){"1"===l.verify?i(l):U.u_.alert({content:"报名信息审核通过即可进入教室",closeOnMaskClick:!0})},children:"已报名，进入教室"}):(0,h.jsx)(C,G({},e))}return(0,h.jsx)("button",{className:"btn",onClick:function(){c({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:!0})},children:"登录"})},z=function(e){var n,t,c,a,d,u=e.data,x=(0,l.useState)(G({},u)),v=x[0],b=x[1],g=(0,l.useState)([]),y=g[0],N=g[1],O=(0,k.dD)(),I=(0,l.useRef)({}),P=(0,l.useState)(!0),Z=P[0],S=P[1],_=(0,l.useCallback)((0,r.Z)(i().mark(function e(){var n,t,s,r,c,a,l;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("开始加载"),e.next=3,(0,w.mU)(u.courseId);case 3:return n=e.sent,s=(t=(0,o.groupBy)(n,"status"))[m.d.TEACHER]||[],r=t[m.d.TUTOR]||[],c=t[m.d.ADMIN]||[],a=[],(0,o.keys)(t).filter(function(e){return![m.d.TEACHER,m.d.TUTOR,m.d.ADMIN].includes(e)}).forEach(function(e){a=a.concat(t[e])}),I.current.applyStudents=a,I.current.teacher=(0,o.last)(s),N(s.concat(r,c,a)),I.current.if_teacher=!I.current.teacher,e.next=17,(0,w.Rj)(u.courseId);case 17:l=e.sent,I.current.replayList=l,I.current.validReplayList=(0,o.sortBy)(l.filter(function(e){return 1==e.status})||[],function(e){return e.startAt}),b(v),S(!1);case 22:case"end":return e.stop()}},e)})),[]);if((0,l.useEffect)(function(){_()},[_]),Z)return(0,h.jsx)(p.Z,{});var C=[{key:"intro",title:"课程介绍",content:(0,h.jsx)("div",{className:"ql-snow ql-editor",dangerouslySetInnerHTML:{__html:v.introduction}})},{key:"student",title:"报名成员(".concat((null==y?void 0:y.length)||0,")"),content:(0,h.jsx)(T,{data:y})},{key:"replay",title:"课堂回放(".concat(null===(n=I.current.validReplayList)||void 0===n?void 0:n.length,")"),content:(0,h.jsx)(F,{data:I.current.validReplayList})}],E=function(e){N((y||[]).concat(e)),I.current.applyStudents=(I.current.applyStudents||[]).concat(e)};return(0,h.jsxs)("div",{className:"course-detail-wrapper",children:[(0,h.jsxs)("section",{className:"main-content",children:[(0,h.jsx)("img",{src:v.coverUrl,alt:"coverUrl",className:"course-cover"}),(0,h.jsx)("div",{className:"course-main-info",children:null!=O&&O.mobile()?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"course-title",children:v.title}),(0,h.jsxs)("div",{className:"course-info",children:[(0,h.jsxs)("div",{className:"course-info-item",children:[(0,h.jsx)("span",{className:"course-info-item-label",children:"任课教师: "}),null===(t=I.current.teacher)||void 0===t?void 0:t.name]}),(0,h.jsxs)("div",{className:"course-info-item",children:[(0,h.jsx)("span",{className:"course-info-item-label",children:"学生人数: "}),null===(c=I.current.applyStudents)||void 0===c?void 0:c.length," 人"]}),(0,h.jsxs)("span",{className:"course-actions",children:[(0,h.jsx)("span",{className:"course-price",children:"\xa5"+v.price}),(0,h.jsx)(s.Z,{placement:"leftTop",content:(0,h.jsx)(V,{courseInfo:v,isMobile:!0}),trigger:"click",children:(0,h.jsx)("span",{className:"share-icon",children:(0,h.jsx)(f.Z,{symbol:"icon-share"})})})]})]}),(0,h.jsx)(q,{courseInfo:v,onRegisterCourse:E})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"course-title",children:v.title}),(0,h.jsxs)("div",{className:"course-info",children:[(0,h.jsxs)("div",{className:"course-info-item",children:[(0,h.jsx)("span",{className:"course-info-item-label",children:"任课教师: "}),null===(a=I.current.teacher)||void 0===a?void 0:a.name]}),(0,h.jsxs)("div",{className:"course-info-item",children:[(0,h.jsx)("span",{className:"course-info-item-label",children:"学生人数: "}),null===(d=I.current.applyStudents)||void 0===d?void 0:d.length," 人"]})]}),(0,h.jsxs)("div",{className:"course-actions",children:[(0,h.jsxs)("div",{className:"course-price",children:[" ","\xa5"+v.price]}),(0,h.jsx)(q,{courseInfo:v,onRegisterCourse:E})]}),(0,h.jsx)("div",{className:"share-area",children:(0,h.jsx)(V,{courseInfo:v})})]})})]}),(0,h.jsx)("section",{className:"course-intro",children:(0,h.jsx)(j,{items:C})})]})},H=t(9008),X=t.n(H),W=!0;function Y(e){var n=e.data;return(0,l.useEffect)(function(){console.log(n)},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(X(),{children:[(0,h.jsx)("title",{children:"Vue开发工程师培训 - "+n.title+" - 阿图教育"}),(0,h.jsx)("meta",{name:"description",content:n.summary}),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,h.jsx)("link",{rel:"stylesheet",href:"../_next/static/style.css"}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsx)(z,{data:n})]})}},38429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/[id]",function(){return t(23100)}])}},function(e){e.O(0,[115,622,774,888,179],function(){return e(e.s=38429)}),_N_E=e.O()}]);