"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[847],{847:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),u=n(791),i=n(87),c=n(689),s=n(596),a=n(184);function o(e){var t=e.onSubmit,n=(0,u.useState)(""),i=(0,r.Z)(n,2),c=i[0],s=i[1];return(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),s("")},children:[(0,a.jsx)("input",{type:"text",name:"query",value:c,onChange:function(e){s(e.currentTarget.value)},placeholder:"Search movies..."}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})}var l=n(156);function f(){var e=(0,u.useState)(null),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,i.lr)(),m=(0,r.Z)(h,2),v=m[0],d=m[1],p=(0,c.TH)(),x=v.get("query");(0,u.useEffect)((function(){x&&(0,l.qF)(x).then(f).catch((function(e){return s.Am.error(e.message)}))}),[x]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(o,{onSubmit:function(e){d(e?{query:e}:{})}}),n&&(0,a.jsx)("ul",{children:n.results.map((function(e){var t=e.id,n=e.title;return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"".concat(t),state:{from:p},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=847.0a2e3baf.chunk.js.map