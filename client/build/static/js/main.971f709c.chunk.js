(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=(a(103),a(104),a(13)),i=a(14),s=a(16),d=a(15),u=a(17),m=a(196),h=a(19),p=a(4),g=a(179),f=a(136),b=a(177),v=a(181),E=a(180),O=a(197),j=a(24),C=a.n(j),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={loggedIn:!0},e.handleLogOut=e.handleLogOut.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleLogOut",value:function(e){var t=this;C.a.post("/logOut",{}).then(function(e){200===e.status&&(t.setState({loggedIn:!1}),console.log("Logged Out!"))}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return this.state.loggedIn?l.a.createElement("div",{className:e.root},l.a.createElement(b.a,{position:"fixed"},l.a.createElement(g.a,null,l.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu"},l.a.createElement(O.a,{onClick:this.props.handleAddOpen})),l.a.createElement(f.a,{variant:"h6",className:e.title},"Grocery List"),l.a.createElement(v.a,{color:"inherit",onClick:this.handleLogOut},"Log Out")))):l.a.createElement(m.a,{to:"/"})}}]),t}(n.Component),w=Object(p.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})(y),k=a(182),N=a(186),I=a(185),A=a(183),S=a(184),x=a(194),U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement(k.a,{className:t.table,"aria-labelledby":"tableTitle",size:"medium"},l.a.createElement(A.a,null,l.a.createElement(S.a,null,l.a.createElement(I.a,null,"Purchased?"),l.a.createElement(I.a,null,"Item"),l.a.createElement(I.a,{align:"right"},"Cost"),l.a.createElement(I.a,{align:"right"},"Purchased by Who"),l.a.createElement(I.a,{align:"right"},"Date of Purchase"))),l.a.createElement(N.a,null,this.props.data.map(function(t,a){return l.a.createElement(S.a,{hover:!0,role:"checkbox"},l.a.createElement(I.a,{padding:"checkbox"},l.a.createElement(x.a,{onClick:e.handleItemClick,id:t.id,checked:t.purchased})),l.a.createElement(I.a,{component:"th",scope:"row",padding:"none"},t.item),l.a.createElement(I.a,{align:"right"},t.cost),l.a.createElement(I.a,{align:"right"},t.userId),l.a.createElement(I.a,{align:"right"},t.purchasedDate))})))}}]),t}(n.Component),D=Object(p.a)(function(e){return{}})(U),F=a(192),L=a(195),P=a(190),T=a(188),B=a(187),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(L.a,{open:this.props.open,"aria-labelledby":"form-dialog-title"},l.a.createElement("form",{onSubmit:this.props.handleAddClose},l.a.createElement(B.a,{id:"form-dialog-title"},"Add an Item"),l.a.createElement(T.a,null,l.a.createElement(F.a,{autoFocus:!0,margin:"dense",id:"item",label:"Item description",fullWidth:!0}),l.a.createElement(F.a,{autoFocus:!0,margin:"dense",id:"cost",label:"Cost of item",fullWidth:!0})),l.a.createElement(P.a,null,l.a.createElement(v.a,{onClick:this.props.handleAddCancel,id:"cancel",color:"primary"},"Cancel"),l.a.createElement(v.a,{type:"submit",color:"primary"},"Add")))))}}]),t}(n.Component),R=Object(p.a)(function(e){return{}})(z),W=a(135),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={loggedIn:!0,data:null,addOpen:!1},e.handleItemClick=e.handleItemClick.bind(Object(h.a)(e)),e.handleAddOpen=e.handleAddOpen.bind(Object(h.a)(e)),e.handleAddClose=e.handleAddClose.bind(Object(h.a)(e)),e.handleAddCancel=e.handleAddCancel.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/isAuth").then(function(t){console.log("Authorized!"),C.a.get("/getItems").then(function(t){console.log(t.data);var a=t.data.map(function(t){return e.createData(t.id,t.cost,t.item,t.purchasedDate,t.purchased,t.userId)});console.log(a),e.setState({data:a})}).catch(function(e){console.log("Error getting items")})}).catch(function(t){console.log("Not Authorized!"),e.setState({loggedIn:!1})})}},{key:"createData",value:function(e,t,a,n,l,r){return{id:e,cost:null===t?null:t.toFixed(2).toString(),item:a,purchaseDate:n,purchased:!0===l,userId:r}}},{key:"handleItemClick",value:function(e,t){for(var a=0;a<this.state.data.length;a++)if(this.state.data[a].id==t){var n=this.state.data;n[a].purchased=e.target[t].value,console.log(n),this.setState({data:n})}}},{key:"handleAddOpen",value:function(){this.setState({addOpen:!0})}},{key:"handleAddClose",value:function(e){var t=this;e.preventDefault();var a={item:e.target.item.value,cost:e.target.cost.value};C.a.post("/item/add",a).then(function(e){console.log(e.data);var a=t.state.data;a.push(t.createData(e.data.id,e.data.cost,e.data.item,e.data.purchasedDate,e.data.purchased,e.data.userId)),t.setState({data:a})}).catch(function(e){console.log("Error adding item")}),this.setState({addOpen:!1})}},{key:"handleAddCancel",value:function(){this.setState({addOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=[this.createData(null,null,null,null,null,null)];return this.state.loggedIn?l.a.createElement("div",{className:t.root},l.a.createElement(w,{handleAddOpen:function(){return e.handleAddOpen()}}),l.a.createElement(W.a,{className:t.paper},l.a.createElement(R,{open:this.state.addOpen,handleAddCancel:function(){return e.handleAddCancel()},handleAddClose:function(t){return e.handleAddClose(t)}}),l.a.createElement(D,{table:this.props.table,data:null===this.state.data?a:this.state.data}))):l.a.createElement(m.a,{to:"/"})}}]),t}(n.Component),M=Object(p.a)(function(e){return{root:{textalign:"center",width:"100%",paddingTop:e.spacing(10),flexGrow:1},table:{margin:"auto",width:"70%"},item:{height:"100%"},textField:{text:"#ffffff"},input:{color:"#ffffff"}}})(G),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.classes;return l.a.createElement("p",null," Testing ")}}]),t}(n.Component),H=Object(p.a)(function(e){return{root:{padding:4*e.spacing.unit},item:{height:"100%"}}})(J),$=a(189),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={completed:!1},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target;console.log("test");var n={email:a.email.value,password:a.password.value};C.a.post("/logIn",n).then(function(){t.setState({completed:!0}),console.log("Logged In!")}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return!0===this.state.completed?l.a.createElement(m.a,{to:"/dashboard"}):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement($.a,null,l.a.createElement(F.a,{id:"email",label:"Email",className:e.textField,InputProps:{className:e.input},type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled"}),l.a.createElement(F.a,{id:"password",label:"Password",className:e.textField,InputProps:{className:e.input},type:"password",autoComplete:"current-password",margin:"normal",variant:"filled"}),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",type:"submit"},"Log In")))}}]),t}(n.Component),K=Object(p.a)(function(e){return{root:{padding:e.spacing(4)}}})(q),Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={completed:!1},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target;console.log("test");var n={firstname:a.firstname.value,lastname:a.lastname.value,email:a.email.value,password:a.password.value};C.a.post("/signUp",n).then(function(){t.setState({completed:!0}),console.log("Created!")}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return!0===this.state.completed?l.a.createElement(m.a,{to:"/dashboard"}):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement($.a,null,l.a.createElement(F.a,{id:"firstname",label:"First Name",className:e.textField,InputProps:{className:e.input},name:"firstname",margin:"normal",variant:"filled"}),l.a.createElement(F.a,{id:"lastname",label:"Last Name",className:e.textField,InputProps:{className:e.input},name:"lastname",margin:"normal",variant:"filled"}),l.a.createElement(F.a,{id:"email",label:"Email",className:e.textField,InputProps:{className:e.input},type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled"}),l.a.createElement(F.a,{id:"password",label:"Password",className:e.textField,InputProps:{className:e.input},type:"password",autoComplete:"current-password",margin:"normal",variant:"filled"}),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",type:"submit"},"Sign Up")))}}]),t}(n.Component),V=Object(p.a)(function(e){return{root:{padding:e.spacing(4)}}})(Q),X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={newUser:!1,returningUser:!1,loggedIn:!1},e.changeToNewUser=e.changeToNewUser.bind(Object(h.a)(e)),e.changeToReturningUser=e.changeToReturningUser.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"changeToNewUser",value:function(e){this.setState({newUser:!0})}},{key:"changeToReturningUser",value:function(e){this.setState({returningUser:!0})}},{key:"componentDidMount",value:function(){var e=this;C.a.get("/isAuth").then(function(t){console.log("Authorized!"),e.setState({loggedIn:!0})}).catch(function(t){console.log("Not Authorized!"),e.setState({loggedIn:!1})})}},{key:"render",value:function(){var e=this.props.classes;return this.state.loggedIn?l.a.createElement(m.a,{to:"/dashboard"}):!0===this.state.returningUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement(K,null))):!0===this.state.newUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement(V,null))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement($.a,null,l.a.createElement(v.a,{className:e.submitButton,variant:"contained",onClick:this.changeToReturningUser},"Log In"),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",onClick:this.changeToNewUser},"Sign Up"))))}}]),t}(n.Component),Y=Object(p.a)(function(e){return{root:{padding:e.spacing(4)},item:{height:"100%"},textField:{text:"#ffffff"},input:{color:"#ffffff"},submitButton:{margin:e.spacing(2)}}})(X),Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{component:Y,exact:!0,path:"/"}),l.a.createElement(m.b,{component:M,exact:!0,path:"/dashboard"}),l.a.createElement(m.b,{component:H,exact:!0,path:"/not-found"}),l.a.createElement(m.a,{to:"/not-found"}))}}]),t}(n.Component),_=a(29),ee=a(89),te=a(191),ae=Object(ee.a)({palette:{type:"light",primary1Color:"#607d8b",primary2Color:"#90a4ae",accent1Color:"#ff7043",accent2Color:"#fafafa",canvasColor:"rgba(255, 255, 255, 0.87)",pickerHeaderColor:"#607d8b"}}),ne=Object(_.a)();var le=Object(p.a)({textField:{text:"#ffffff"},input:{color:"#ffffff"}})(function(e){return e.classes,l.a.createElement(te.a,{theme:ae},l.a.createElement(m.c,{history:ne},l.a.createElement(Z,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(134)}},[[98,1,2]]]);
//# sourceMappingURL=main.971f709c.chunk.js.map