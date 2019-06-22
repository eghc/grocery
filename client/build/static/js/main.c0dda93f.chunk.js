(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(137)},105:function(e,t,a){},106:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(105),a(106),a(13)),o=a(14),s=a(16),d=a(15),u=a(17),m=a(199),h=a(18),p=a(4),g=a(182),f=a(139),b=a(180),v=a(184),E=a(183),O=a(200),j=a(21),N=a.n(j),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={loggedIn:!0},e.handleLogOut=e.handleLogOut.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleLogOut",value:function(e){var t=this;N.a.post("/logOut",{}).then(function(e){200===e.status&&(t.setState({loggedIn:!1}),console.log("Logged Out!"))}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return this.state.loggedIn?l.a.createElement("div",{className:e.root},l.a.createElement(b.a,{position:"fixed"},l.a.createElement(g.a,null,l.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu"},l.a.createElement(O.a,{onClick:this.props.handleAddOpen})),l.a.createElement(f.a,{variant:"h6",className:e.title},"Grocery List"),l.a.createElement(v.a,{color:"inherit",onClick:this.handleLogOut},"Log Out")))):l.a.createElement(m.a,{to:"/"})}}]),t}(n.Component),w=Object(p.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})(C),y=a(185),k=a(189),I=a(188),A=a(186),S=a(187),x=a(197),D=a(92),U=a.n(D),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={hover:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement(y.a,{className:t.table,"aria-labelledby":"tableTitle",size:"medium"},l.a.createElement(A.a,null,l.a.createElement(S.a,{className:t.row},l.a.createElement(I.a,null,"Purchased?"),l.a.createElement(I.a,null,"Item"),l.a.createElement(I.a,{align:"right",className:t.cell},"Cost"),l.a.createElement(I.a,{align:"right",className:t.cell},"Purchased by Who"),l.a.createElement(I.a,{align:"right",className:t.cell},"Date of Purchase"),l.a.createElement(I.a,{align:"right",className:t.cell}))),l.a.createElement(k.a,null,this.props.data.map(function(a,n){return l.a.createElement(S.a,{hover:!0,role:"checkbox",className:t.row},l.a.createElement(I.a,{padding:"checkbox"},l.a.createElement(x.a,{onChange:function(t){return e.props.handleItemClick(t,a.id)},checked:a.purchased,className:t.cell})),l.a.createElement(I.a,{component:"th",scope:"row",padding:"none"},a.item),l.a.createElement(I.a,{align:"right"},a.cost),l.a.createElement(I.a,{align:"right"},a.userName),l.a.createElement(I.a,{align:"right"},a.purchaseDate),l.a.createElement(I.a,{align:"right"},l.a.createElement(E.a,{"aria-label":"Delete",className:t.margin},l.a.createElement(U.a,{onClick:function(t){return e.props.handleDelete(t,a.id)}}))))})))}}]),t}(n.Component),L=Object(p.a)(function(e){return{table:{margin:"auto",width:"70%"},row:{width:"100%"},item:{height:"100%"},cell:{width:"20%",height:"50px"},margin:{margin:e.spacing(1)}}})(F),P=a(195),T=a(198),B=a(193),z=a(191),R=a(190),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.a,{open:this.props.open,"aria-labelledby":"form-dialog-title"},l.a.createElement("form",{onSubmit:this.props.handleAddClose,noValidate:!0},l.a.createElement(R.a,{id:"form-dialog-title"},"Add an Item"),l.a.createElement(z.a,null,l.a.createElement(P.a,{autoFocus:!0,margin:"dense",id:"item",label:"Item description",defaultValue:"Item",required:!0,fullWidth:!0}),l.a.createElement(P.a,{autoFocus:!0,margin:"dense",id:"cost",label:"Cost of item",defaultValue:"0.00",type:"number",fullWidth:!0})),l.a.createElement(B.a,null,l.a.createElement(v.a,{onClick:this.props.handleAddCancel,id:"cancel",color:"primary"},"Cancel"),l.a.createElement(v.a,{type:"submit",color:"primary"},"Add")))))}}]),t}(n.Component),G=Object(p.a)(function(e){return{}})(W),M=a(138),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={loggedIn:!0,data:null,addOpen:!1},e.handleItemClick=e.handleItemClick.bind(Object(h.a)(e)),e.handleAddOpen=e.handleAddOpen.bind(Object(h.a)(e)),e.handleAddClose=e.handleAddClose.bind(Object(h.a)(e)),e.handleAddCancel=e.handleAddCancel.bind(Object(h.a)(e)),e.handleDelete=e.handleDelete.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/isAuth").then(function(t){console.log("Authorized!"),N.a.get("/getItems").then(function(t){console.log(t.data);var a=t.data.map(function(t){return e.createData(t.id,t.cost,t.item,t.purchaseDate,t.purchased,t.userId,t.userName)});console.log(a),e.setState({data:a})}).catch(function(e){console.log("Error getting items")})}).catch(function(t){console.log("Not Authorized!"),e.setState({loggedIn:!1})})}},{key:"createData",value:function(e,t,a,n,l,r,c){return{id:e,cost:null===t?null:t.toFixed(2).toString(),item:a,purchaseDate:null===n?null:n.substring(0,10),purchased:!0===l,userId:r,userName:c}}},{key:"handleItemClick",value:function(e,t){var a=this;console.log(t);var n=e.target.checked,l=0;if(void 0!==t&&null!==t){for(var r=0;r<this.state.data.length;r++)if(this.state.data[r].id==t){var c=this.state.data;c[r].purchased=n,l=r,this.setState({data:c})}N.a.post("/item/update/"+t,{id:t,purchased:n}).then(function(e){var t=a.state.data;l>=0&&(console.log(t),t[l]=a.createData(e.data.id,e.data.cost,e.data.item,e.data.purchaseDate,e.data.purchased,e.data.userId,e.data.userName),a.setState({data:t}))}).catch(function(e){console.log("Error updating item")})}}},{key:"handleAddOpen",value:function(){this.setState({addOpen:!0})}},{key:"handleAddClose",value:function(e){var t=this;e.preventDefault();var a={item:e.target.item.value,cost:e.target.cost.value};console.log(a),N.a.post("/item/add",a).then(function(e){var a=t.state.data;a.push(t.createData(e.data.id,e.data.cost,e.data.item,e.data.purchaseDate,e.data.purchased,e.data.userId,e.data.userName)),t.setState({data:a})}).catch(function(e){console.log("Error adding item")}),this.setState({addOpen:!1})}},{key:"handleAddCancel",value:function(){this.setState({addOpen:!1})}},{key:"handleDelete",value:function(e,t){var a=this;if(t){for(var n=-1,l=0;l<this.state.data.length;l++)if(this.state.data[l].id==t){n=l;break}N.a.post("/item/delete/"+t).then(function(e){var t=a.state.data;t.splice(n,1),a.setState({data:t})}).catch(function(e){console.log("Error deleting item")})}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=[this.createData(null,null,null,null,null,null,null)];return this.state.loggedIn?l.a.createElement("div",{className:t.root},l.a.createElement(w,{handleAddOpen:function(){return e.handleAddOpen()}}),l.a.createElement(M.a,{className:t.paper},l.a.createElement(G,{open:this.state.addOpen,handleAddCancel:function(){return e.handleAddCancel()},handleAddClose:function(t){return e.handleAddClose(t)}}),l.a.createElement(L,{data:null===this.state.data?a:this.state.data,handleItemClick:this.handleItemClick,handleDelete:this.handleDelete}))):l.a.createElement(m.a,{to:"/"})}}]),t}(n.Component),J=Object(p.a)(function(e){return{root:{textalign:"center",width:"100%",paddingTop:e.spacing(10),flexGrow:1},textField:{text:"#ffffff"},input:{color:"#ffffff"},paper:{width:"100%"}}})(V),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.classes;return l.a.createElement("p",null," Testing ")}}]),t}(n.Component),H=Object(p.a)(function(e){return{root:{padding:4*e.spacing.unit},item:{height:"100%"}}})(q),$=a(192),K=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={completed:!1},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target;console.log("test");var n={email:a.email.value,password:a.password.value};N.a.post("/logIn",n).then(function(){t.setState({completed:!0}),console.log("Logged In!")}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return!0===this.state.completed?l.a.createElement(m.a,{to:"/dashboard"}):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement($.a,null,l.a.createElement(P.a,{id:"email",label:"Email",className:e.textField,InputProps:{className:e.input},type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled"}),l.a.createElement(P.a,{id:"password",label:"Password",className:e.textField,InputProps:{className:e.input},type:"password",autoComplete:"current-password",margin:"normal",variant:"filled"}),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",type:"submit"},"Log In")))}}]),t}(n.Component),Q=Object(p.a)(function(e){return{root:{padding:e.spacing(4)}}})(K),X=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={completed:!1},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target;console.log("test");var n={firstname:a.firstname.value,lastname:a.lastname.value,email:a.email.value,password:a.password.value};N.a.post("/signUp",n).then(function(){t.setState({completed:!0}),console.log("Created!")}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.classes;return!0===this.state.completed?l.a.createElement(m.a,{to:"/dashboard"}):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement($.a,null,l.a.createElement(P.a,{id:"firstname",label:"First Name",className:e.textField,InputProps:{className:e.input},name:"firstname",margin:"normal",variant:"filled"}),l.a.createElement(P.a,{id:"lastname",label:"Last Name",className:e.textField,InputProps:{className:e.input},name:"lastname",margin:"normal",variant:"filled"}),l.a.createElement(P.a,{id:"email",label:"Email",className:e.textField,InputProps:{className:e.input},type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled"}),l.a.createElement(P.a,{id:"password",label:"Password",className:e.textField,InputProps:{className:e.input},type:"password",autoComplete:"current-password",margin:"normal",variant:"filled"}),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",type:"submit"},"Sign Up")))}}]),t}(n.Component),Y=Object(p.a)(function(e){return{root:{padding:e.spacing(4)}}})(X),Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={newUser:!1,returningUser:!1,loggedIn:!1},e.changeToNewUser=e.changeToNewUser.bind(Object(h.a)(e)),e.changeToReturningUser=e.changeToReturningUser.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeToNewUser",value:function(e){this.setState({newUser:!0})}},{key:"changeToReturningUser",value:function(e){this.setState({returningUser:!0})}},{key:"componentDidMount",value:function(){var e=this;N.a.get("/isAuth").then(function(t){console.log("Authorized!"),e.setState({loggedIn:!0})}).catch(function(t){console.log("Not Authorized!"),e.setState({loggedIn:!1})})}},{key:"render",value:function(){var e=this.props.classes;return this.state.loggedIn?l.a.createElement(m.a,{to:"/dashboard"}):!0===this.state.returningUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement(Q,null))):!0===this.state.newUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement(Y,null))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{alt:"logo",src:"/shoppingcart.jpg",width:"100px"}),l.a.createElement($.a,null,l.a.createElement(v.a,{className:e.submitButton,variant:"contained",onClick:this.changeToReturningUser},"Log In"),l.a.createElement(v.a,{className:e.submitButton,variant:"contained",onClick:this.changeToNewUser},"Sign Up"))))}}]),t}(n.Component),_=Object(p.a)(function(e){return{root:{padding:e.spacing(4)},item:{height:"100%"},textField:{text:"#ffffff"},input:{color:"#ffffff"},submitButton:{margin:e.spacing(2)}}})(Z),ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{component:_,exact:!0,path:"/"}),l.a.createElement(m.b,{component:J,exact:!0,path:"/dashboard"}),l.a.createElement(m.b,{component:H,exact:!0,path:"/not-found"}),l.a.createElement(m.a,{to:"/not-found"}))}}]),t}(n.Component),te=a(29),ae=a(93),ne=a(194),le=Object(ae.a)({palette:{type:"light",primary1Color:"#607d8b",primary2Color:"#90a4ae",accent1Color:"#ff7043",accent2Color:"#fafafa",canvasColor:"rgba(255, 255, 255, 0.87)",pickerHeaderColor:"#607d8b"}}),re=Object(te.a)();var ce=Object(p.a)({textField:{text:"#ffffff"},input:{color:"#ffffff"}})(function(e){return e.classes,l.a.createElement(ne.a,{theme:le},l.a.createElement(m.c,{history:re},l.a.createElement(ee,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.c0dda93f.chunk.js.map