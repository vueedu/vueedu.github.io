(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(40)}])},6170:function(e,s,a){"use strict";var c=a(5893),l=a(5606);let t=e=>(0,c.jsx)("div",{className:"loading-container",children:(0,c.jsx)(l.Z,{tip:"数据加载中...",size:"small",...e})});s.Z=t},40:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return z}});var c,l,t,r,n=a(5893),i=a(7294),o=a(1534),m=a(6170),d=a(1163),u=a(1413),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},v=a(7918),x=function(e,s){return i.createElement(v.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:s,icon:h}))};x.displayName="UnorderedListOutlined";var j=i.forwardRef(x),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"},N=function(e,s){return i.createElement(v.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:s,icon:p}))};N.displayName="AppstoreOutlined";var f=i.forwardRef(N);(c=t||(t={})).LIST="LIST",c.GRID="GRID";let g=e=>{let{showAll:s}=e,a=(0,d.useRouter)(),[c,l]=(0,i.useState)([]),[r,u]=(0,i.useState)([]),h=(0,i.useRef)({popularCourses:!1,allCourses:!1}),[v,x]=(0,i.useState)(t.LIST),p=s?"allCourses":"popularCourses",N=(0,i.useCallback)(async()=>{if(h.current[p])return;let e=await o.Ho(!s),{courseList:a}=e;s?l(a):u(a),h.current[p]=!0},[s,p]),g=(0,i.useCallback)(async()=>{N()},[N]);if((0,i.useEffect)(()=>{g()},[g]),!h.current[p])return(0,n.jsx)(m.Z,{});let C=v===t.GRID,E=()=>{let e=C?t.LIST:t.GRID;x(e),localStorage.setItem("course-layout-type",e)};return(0,n.jsxs)("div",{className:"course-list ".concat(C?"course-list-layout-grid":"course-list-layout-list"),children:[(0,n.jsx)("span",{className:"layout-icon",onClick:E,children:C?(0,n.jsx)(j,{}):(0,n.jsx)(f,{})}),(s?c:r).map(e=>(0,n.jsxs)("div",{className:"course-item",onClick:()=>a.push("/".concat(e.courseId)),children:[(0,n.jsx)("img",{className:"course-item-cover",src:e.coverUrl,alt:"coverUrl"}),(0,n.jsxs)("div",{className:"course-item-content",children:[(0,n.jsxs)("div",{className:"course-item-info",children:[(0,n.jsx)("div",{className:"info-title",children:e.title}),(0,n.jsx)("div",{className:"summary",children:e.summary})]}),(0,n.jsxs)("footer",{children:[(0,n.jsxs)("span",{className:"apply-num",children:[(0,n.jsx)("span",{className:"apply-num-person",children:e.applyCount})," ","人报名学习"]}),(0,n.jsx)("span",{className:"apply-price",children:"\xa5"+e.price})]})]})]},e.id))]})},C=e=>{let{showAll:s}=e,[a,c]=(0,i.useState)([]),l=(0,i.useCallback)(async()=>{let e=await o.RG(),{teacherList:s}=e;c(s)},[]);(0,i.useEffect)(()=>{l()},[l]);let t=s?a:a.filter(e=>"star"===e.tag);return(0,n.jsx)("div",{className:"teachar-recommand",children:t.map(e=>(0,n.jsxs)("div",{className:"teachar-intro",children:[(0,n.jsx)("img",{src:e.avatarUrl,alt:"avatar",className:"avatar"}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsxs)("div",{className:"teachar-title",children:[(0,n.jsxs)("div",{className:"teachar-name",children:[e.name,"老师"]}),(0,n.jsxs)("span",{className:"teachar-tag",children:["课程",(0,n.jsx)("span",{children:e.coursesCount}),"学生",(0,n.jsx)("span",{children:e.studentsCount})]})]}),(0,n.jsx)("div",{className:"teach-intro",children:e.info})]})]},e.name))})};var E=a(3019),y=a(5606),w=a(9008),k=a.n(w);(l=r||(r={})).INDEX="INDEX",l.COURSE="COURSE",l.TEACHAR="TEACHAR",l.ABOUT="ABOUT";let I=[{key:r.INDEX,title:"主页"},{key:r.COURSE,title:"课程"},{key:r.TEACHAR,title:"老师"},{key:r.ABOUT,title:"关于我们"}],R=e=>e?"tab-show":"";function z(){let{state:{homeTab:e,client:s,homepageInfo:a},dispatch:c}=(0,E.mr)(),l=e===r.INDEX,{config:t,loading:i}=(0,E.Mj)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k(),{children:[(0,n.jsx)("title",{children:"Vue培训 - 致力于做中国最好的Vue培训品牌 - 阿图教育"}),(0,n.jsx)("meta",{name:"description",content:"Vue培训 - 致力于做中国最好的Vue培训品牌 - 阿图教育"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"home-wrapper",children:(0,n.jsxs)(y.Z,{spinning:i,children:[(0,n.jsxs)("header",{className:"home-wrapper-header",children:[(0,n.jsx)("img",{className:"intro-cover",src:t.coverUrl,alt:"site-cover"}),(0,n.jsx)("img",{className:"logo-mark",src:t.consultUrl,alt:"logo-mark"}),(0,n.jsx)("ul",{className:"nav",children:I.map(l=>(0,n.jsx)("li",{className:"".concat(l.key===e?"active":""),onClick:()=>{c({type:"CLIENT",payload:{...s,clientName:"test"}}),console.log(e),console.log(s),console.log(a),console.log(l)},children:l.title},l.key))})]}),(0,n.jsxs)("main",{className:"home-wrapper-content",children:[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:R(e===r.INDEX||e===r.COURSE),children:[(0,n.jsx)("div",{className:"title",children:l?"热门课程":"全部课程"}),(0,n.jsx)(g,{showAll:e===r.COURSE})]}),(0,n.jsxs)("section",{className:R(e===r.INDEX||e===r.TEACHAR),children:[(0,n.jsx)("div",{className:"title",children:l?"推荐名师":"全部名师"}),(0,n.jsx)(C,{showAll:e===r.TEACHAR})]})]}),(0,n.jsxs)("section",{className:R(l||e===r.ABOUT),children:[(0,n.jsx)("div",{className:"title",children:"机构介绍"}),(0,n.jsxs)("div",{className:"organize",children:[(0,n.jsx)("div",{className:"intro",children:t.aboutUsInfo}),(0,n.jsx)("img",{src:t.aboutUsImgUrl,alt:"organize-logo",className:"organize-logo"})]})]})]})]})})]})}}},function(e){e.O(0,[59,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);