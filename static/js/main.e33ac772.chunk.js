(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(7),c=a(2),s=a(8),o=a(1),l=a(5),d=a.n(l),u=(a(14),a(0)),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed,r=t.id;return Object(u.jsxs)("article",{"data-id":r,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(u.jsx)(m,{user:a})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),f=function(){var e=Object(o.useState)(p),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),l=s[0],m=s[1],j=Object(o.useState)(!1),f=Object(c.a)(j,2),x=f[0],y=f[1],v=Object(o.useState)(0),S=Object(c.a)(v,2),N=S[0],I=S[1],g=Object(o.useState)(!1),k=Object(c.a)(g,2),C=k[0],_=k[1],D=Object(o.useState)(!1),T=Object(c.a)(D,2),w=T[0],M=T[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),l.trim()||(m(""),y(!0)),0===N&&_(!0),l.trim()&&0!==N&&N&&l.trim()&&(n([].concat(Object(r.a)(a),[{id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:l,completed:w,userId:N,user:O(N)}])),m(""),I(0),_(!1),M(!1))},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"",children:["Write your Todo task in the field",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",className:d()("input",{"is-danger":x}),placeholder:"type here",value:l,onChange:function(e){m(e.target.value),y(!1)}}),x&&Object(u.jsx)("span",{className:"error",children:" Please enter a title"})]})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"user-id",children:" Select user: "}),Object(u.jsxs)("select",{id:"user-id",value:N,"data-cy":"userSelect",required:!0,onChange:function(e){I(+e.target.value),_(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"",children:["Is your task completed?",Object(u.jsx)("input",{type:"checkbox",onChange:function(){return M(!w)},checked:w})]})}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e33ac772.chunk.js.map