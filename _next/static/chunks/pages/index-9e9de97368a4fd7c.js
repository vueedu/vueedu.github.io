(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9396)}])},4795:function(e,s,a){"use strict";a.d(s,{Nu:function(){return d},bZ:function(){return t}});var c,t,l=a(5893),n=a(7294),i=a(6170),r=a(3817),o=a(1664),m=a.n(o);(c=t||(t={})).LIST="LIST",c.GRID="GRID";let d="course-layout-type",u=e=>{let{courses:s}=e;(0,n.useRef)({popularCourses:!1,allCourses:!1});let[a,c]=(0,n.useState)(t.LIST);if(!s)return(0,l.jsx)(i.Z,{});let o=a===t.GRID,u=()=>{let e=o?t.LIST:t.GRID;c(e),localStorage.setItem(d,e)};return(0,l.jsxs)("div",{className:"course-list ".concat(o?"course-list-layout-grid":"course-list-layout-list"),children:[(0,l.jsx)("span",{className:"layout-icon",onClick:u,children:(0,l.jsx)(r.Z,{symbol:o?"icon-listgrid":"icon-list"})}),s.map(e=>(0,l.jsxs)(m(),{className:"course-item",href:"/course/".concat(e.courseId),children:[(0,l.jsx)("img",{className:"course-item-cover",src:e.coverUrl,alt:"coverUrl"}),(0,l.jsxs)("div",{className:"course-item-content",children:[(0,l.jsxs)("div",{className:"course-item-info",children:[(0,l.jsx)("div",{className:"info-title",children:e.title}),(0,l.jsx)("div",{className:"summary",children:e.summary})]}),(0,l.jsxs)("footer",{children:[(0,l.jsxs)("span",{className:"apply-num",children:[(0,l.jsx)("span",{className:"apply-num-person",children:e.applyCount})," ","人报名学习"]}),(0,l.jsx)("span",{className:"apply-price",children:"\xa5"+e.price})]})]})]},e.id))]})};s.ZP=u},6170:function(e,s,a){"use strict";var c=a(5893),t=a(1382);let l=e=>(0,c.jsx)("div",{className:"loading-container",children:(0,c.jsx)(t.Z,{tip:"数据加载中...",size:"small",...e})});s.Z=l},9396:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return v},default:function(){return f}});var c,t,l=a(5893),n=a(4795),i=a(7294),r=a(1534);let o=e=>{let{showAll:s}=e,[a,c]=(0,i.useState)([]),t=(0,i.useCallback)(async()=>{let e=await r.RG(),{teacherList:s}=e;c(s)},[]);(0,i.useEffect)(()=>{t()},[t]);let n=s?a:a.filter(e=>"star"===e.tag);return(0,l.jsx)("div",{className:"teachar-recommand",children:n.map(e=>(0,l.jsxs)("div",{className:"teachar-intro",children:[(0,l.jsx)("img",{src:e.avatarUrl,alt:"avatar",className:"avatar"}),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsxs)("div",{className:"teachar-title",children:[(0,l.jsxs)("div",{className:"teachar-name",children:[e.name,"老师"]}),(0,l.jsxs)("span",{className:"teachar-tag",children:["课程",(0,l.jsx)("span",{children:e.coursesCount}),"学生",(0,l.jsx)("span",{children:e.studentsCount})]})]}),(0,l.jsx)("div",{className:"teach-intro",children:e.info})]})]},e.name))})};var m=a(3019),d=a(7789),u=a(9008),h=a.n(u),x=a(6368),j=a(6170);(c=t||(t={})).INDEX="INDEX",c.COURSE="COURSE",c.TEACHAR="TEACHAR",c.ABOUT="ABOUT";let N=[{key:t.INDEX,title:"主页"},{key:t.COURSE,title:"课程"},{key:t.TEACHAR,title:"老师"},{key:t.ABOUT,title:"关于我们"}],p=e=>e?"tab-show":"";var v=!0,f=(0,x.Pi)(function(e){let{data:s}=e,a=(0,d.o)(),{courses_all:c,courses_popular:i,client:r}=s,u=e=>{a.homeTab.setHomeTab(e)},x=a.homeTab.homeTab,v=x===t.INDEX,{config:f,loading:g}=(0,m.Mj)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h(),{children:[(0,l.jsx)("title",{children:"".concat(r.name||"阿图教育"," - 致力于做中国最好的").concat(r.name||"教育培训","品牌 - 阿图教育")}),(0,l.jsx)("meta",{name:"description",content:"RISC-V培训 - 致力于做中国最好的RISC-V培训品牌 - 阿图教育"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("meta",{name:"keywords",content:"".concat(r.name,",").concat(r.clientName,",阿图教育,信创,培训,计算机,科技,技术,r2,edu")})]}),g?(0,l.jsx)(j.Z,{className:"home-loading"}):(0,l.jsxs)("div",{className:"home-wrapper",children:[(0,l.jsxs)("header",{className:"home-wrapper-header",children:[(0,l.jsx)("img",{className:"intro-cover",src:f.coverUrl,alt:"site-cover"}),(0,l.jsx)("img",{className:"logo-mark",src:f.consultUrl,alt:"logo-mark"}),(0,l.jsx)("ul",{className:"nav",children:N.map(e=>(0,l.jsx)("li",{className:"".concat(e.key===x?"active":""),onClick:()=>{u(e.key)},children:e.title},e.key))})]}),(0,l.jsxs)("main",{className:"home-wrapper-content",children:[(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("section",{className:p(x===t.INDEX||x===t.COURSE),children:[(0,l.jsx)("div",{className:"title",children:v?"热门课程":"全部课程"}),(0,l.jsx)(n.ZP,{courses:x===t.COURSE?c:i})]}),(0,l.jsxs)("section",{className:p(x===t.INDEX||x===t.TEACHAR),children:[(0,l.jsx)("div",{className:"title",children:v?"推荐名师":"全部名师"}),(0,l.jsx)(o,{showAll:x===t.TEACHAR})]})]}),(0,l.jsxs)("section",{className:p(v||x===t.ABOUT),children:[(0,l.jsx)("div",{className:"title",children:"机构介绍"}),(0,l.jsxs)("div",{className:"organize",children:[(0,l.jsx)("div",{className:"intro",children:f.aboutUsInfo}),(0,l.jsx)("img",{src:f.aboutUsImgUrl,alt:"organize-logo",className:"organize-logo"})]})]})]})]})]})})},9008:function(e,s,a){e.exports=a(3121)}},function(e){e.O(0,[382,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);