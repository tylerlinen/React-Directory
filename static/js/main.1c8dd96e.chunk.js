(this["webpackJsonpreact-employee-tracker"]=this["webpackJsonpreact-employee-tracker"]||[]).push([[0],{27:function(e,t,r){},28:function(e,t,r){},46:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),a=r(13),c=r.n(a),i=(r(27),r(28),r(14)),l=r(15),j=r(20),o=r(19),h=r(16),d=r.n(h),u=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")},b=r(49);var O=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Employee"}),Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Phone Number"})]})})};r(46);var m=function(e){var t=e.users;return Object(n.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)(O,{}),Object(n.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,a=e.phone,c=e.email;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"align-middle",children:Object(n.jsx)("img",{src:s.thumbnail,alt:c,class:"image"})}),Object(n.jsxs)("td",{className:"firstName",children:[r.first," shaboy"]}),Object(n.jsx)("td",{className:"firstLast",children:r.last}),Object(n.jsx)("td",{className:"email",children:c}),Object(n.jsx)("td",{className:"phone",children:a})]},t.uuid)})):Object(n.jsx)(n.Fragment,{})})]})};var x=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{children:Object(n.jsx)("form",{children:Object(n.jsx)("input",{className:"form_control",type:"search",placeholder:"search",onChange:function(e){return t(e)}})})})};var f=function(e){var t=e.handleSearchChange;return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("h1",{children:"Employee Tracker"}),Object(n.jsx)(x,{handleSearchChange:t})]})},v=function(e){Object(j.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={users:[{}],filteredUsers:[{}]},e.handleSearchChange=function(t){console.log(t.target.value);var r=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(r.toLowerCase())}));console.log(n),e.setState({filteredUsers:n})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){console.log(t),e.setState({users:t.data.results,filteredUsers:t.data.results}),console.log(e.state.users)}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{handleSearchChange:this.handleSearchChange}),Object(n.jsx)(m,{users:this.state.filteredUsers})]})}}]),r}(s.Component);var g=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(v,{})})};var p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g,{})})};r(47);c.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1c8dd96e.chunk.js.map