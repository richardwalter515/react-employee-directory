(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),o=n(12),a=n.n(o),i=(n(23),n(24),n(13)),l=n(14),d=n(17),j=n(16),u=(n(25),n(15)),h=n.n(u),b=function(){return h.a.get("https://randomuser.me/api/?results=50")},m=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={foundEmployees:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){return e.setState({foundEmployees:t.data.results},(function(){console.log("foundemployeesStat",e.state.foundEmployees)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{class:"jumbotron jumbotron-fluid",id:"header",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("h1",{class:"display-4 text-center",children:Object(c.jsx)("u",{children:"Employee Directory"})})})}),Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",class:"tableHead",children:"Picture"}),Object(c.jsx)("th",{scope:"col",class:"tableHead",children:"Name"}),Object(c.jsx)("th",{scope:"col",class:"tableHead",children:"Phone"}),Object(c.jsx)("th",{scope:"col",class:"tableHead",children:"Email"})]})}),Object(c.jsxs)("tbody",{children:[this.state.foundEmployees.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{alt:"".concat(e.name.first," ").concat(e.name.last),src:e.picture.thumbnail})}),Object(c.jsx)("td",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email})]})})),";"]})]})}}]),n}(s.Component);var p=function(){return Object(c.jsx)(m,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};n(44);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.030a8246.chunk.js.map