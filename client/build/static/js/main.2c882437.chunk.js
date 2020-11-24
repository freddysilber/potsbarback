(this.webpackJsonppotsbarback=this.webpackJsonppotsbarback||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),l=a(59),o=a.n(l),i=(a(99),a(24)),c=a(3),m=a(60),u=a(54),d=a.n(u),f=function(e){e?d.a.defaults.headers.common.Authorization=e:delete d.a.defaults.headers.common.Authorization};!function(e){e.about="/",e.login="/login",e.portal="/portal",e.signup="/portal/admin/signup",e.staff="/portal/staff",e.management="/portal/management",e.checkout="/portal/checkout",e.verification="/portal/verification",e.thankyou="/portal/thankyou"}(n||(n={}));var p=function(e){return{type:"SET_CURRENT_USER",payload:e}},h=function(){return function(e){localStorage.removeItem("jwtToken"),f(!1),e(p({}))}},E=a(30),v=a(25),b=a(89),N=a(57),g=a(122),k={isAuthenticated:!1,user:{},loading:!1},y={},_=Object(v.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(N.a)(Object(N.a)({},e),{},{isAuthenticated:!g(t.payload),user:t.payload});case"USER_LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return console.log(t.payload),t.payload;default:return e}}}),w=[b.a],S=Object(v.e)(_,{},Object(v.d)(v.a.apply(void 0,w),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||v.d)),O=(a(123),a(124),a(39)),C=a(40),j=a(53),R=a(51),P=a(11),T=a(10),x=(a(125),{email:"",password:""}),U=T.a().shape({email:T.c().email("Invalid email").required("Required"),password:T.c().min(2,"Your password is too short!").max(50,"Your password is too long").required("Required")}),B=function(e){Object(j.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(O.a)(this,a),n=t.call(this,e),console.log(n.props),n.state={errors:{}},n}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push(n.staff)}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push(n.about),e.errors&&this.setState({errors:e.errors})}},{key:"handleSubmit",value:function(e){var t=e.actions,a=e.values;t.setSubmitting(!1),this.props.loginUser(a),this.props.history.push(n.staff)}},{key:"render",value:function(){var e=this;return s.a.createElement(P.c,{initialValues:x,validationSchema:U,onSubmit:function(t,a){var n={actions:a,values:t};e.handleSubmit(n)}},(function(e){var t=e.errors,a=e.touched,n=e.isSubmitting;return s.a.createElement("div",{className:"card login-input-form"},s.a.createElement(P.b,null,s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement(P.a,{className:"input login-input is-medium is-black",id:"email",name:"email",type:"email",placeholder:"Enter your email",autoComplete:"username"}),a.email&&t.email&&s.a.createElement("p",{className:"fieldError"},t.email),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement(P.a,{className:"input login-input is-medium is-black",id:"password",name:"password",type:"password",placeholder:"Enter your password",autoComplete:"current-password"}),t.password&&a.password?s.a.createElement("p",{className:"fieldError"},t.password):null,s.a.createElement("div",{className:"login-button-div"},s.a.createElement("button",{className:"button is-danger login-button",type:"submit",disabled:n},"Submit"))))}))}}]),a}(s.a.Component),D=Object(E.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){d.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),f(a);var n=Object(m.a)(a);t(p(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(B),F=(a(126),{firstName:"",lastName:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),A=T.a().shape({firstName:T.c().required("First name cannot be empty"),lastName:T.c().required("Last name cannot be empty"),email:T.c().email("Invalid email").required("Required"),confirmEmail:T.c().oneOf([T.b("email"),""],"Emails must match!").required("Confirm Email is required"),password:T.c().min(2,"Your password is too short!").max(50,"Your password is too long").required("Required"),confirmPassword:T.c().oneOf([T.b("password"),""],"Passwords must match!").max(50,"Your password is too long").required("Required")}),M=function(e){Object(j.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(O.a)(this,a),n=t.call(this,e),console.log("Signup props --\x3e ",e),n.state={errors:{}},n}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push(n.portal)}},{key:"componentWillReceiveProps",value:function(e){console.log("nextProps",e),e.errors&&this.setState({errors:e.errors})}},{key:"handleSubmit",value:function(e){var t=e.values;console.log("This is the user object from #handleSubmit",t),this.props.registerUser(t,this.props.history)}},{key:"render",value:function(){var e=this;return s.a.createElement(P.c,{initialValues:F,validationSchema:A,onSubmit:function(t,a){var n={actions:a,values:t};e.handleSubmit(n)}},(function(e){var t=e.errors,a=e.touched,n=e.isSubmitting;return s.a.createElement("div",{className:"card login-input-form"},s.a.createElement(P.b,null,s.a.createElement("label",{htmlFor:"firstName"},"First Name"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"firstName",name:"firstName",type:"firstName",placeholder:"Enter your first name"}),a.firstName&&t.firstName&&s.a.createElement("p",{className:"fieldError"},t.firstName),s.a.createElement("label",{htmlFor:"lastName"},"Last Name"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"lastName",name:"lastName",type:"lastName",placeholder:"Enter your last name"}),a.lastName&&t.lastName&&s.a.createElement("p",{className:"fieldError"},t.lastName),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"email",name:"email",type:"email",placeholder:"Enter your email",autoComplete:"username"}),a.email&&t.email&&s.a.createElement("p",{className:"fieldError"},t.email),s.a.createElement("label",{htmlFor:"confirmEmail"},"Confirm Email"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"confirmEmail",name:"confirmEmail",type:"email",placeholder:"Enter your confirmEmail"}),a.confirmEmail&&t.confirmEmail&&s.a.createElement("p",{className:"fieldError"},t.confirmEmail),s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"password",name:"password",type:"password",placeholder:"Enter your password",autoComplete:"new-password"}),t.password&&a.password?s.a.createElement("p",{className:"fieldError"},t.password):null,s.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),s.a.createElement(P.a,{className:"input login-input is-primary is-medium",id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Enter your confirmPassword",autoComplete:"new-password"}),t.confirmPassword&&a.confirmPassword?s.a.createElement("p",{className:"fieldError"},t.confirmPassword):null,s.a.createElement("div",{className:"login-button-div"},s.a.createElement("button",{className:"button login-button is-primary",type:"submit",disabled:n},"Submit"))))}))}}]),a}(s.a.Component),q=Object(E.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){d.a.post("/api/users/register",e).then((function(e){console.log("AUTH ACTIONS - REGISTER USER ",e),t.push(n.login)})).catch((function(e){console.error("AUTH ACTIONS - REGISTER USER ",e),a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(c.f)(M)),I=(a(130),function(){return s.a.createElement("div",{className:"buttonContainer"},s.a.createElement(i.b,{to:n.login},s.a.createElement("button",{className:"button is-ghost is-small"},"Login")),s.a.createElement(i.b,{to:n.signup},s.a.createElement("button",{className:"button is-ghost is-small"},"Sign-up")))}),H=a(21),L=(a(131),a(93),a(69)),V=a.n(L),Y=function(){return s.a.createElement("img",{src:V.a,width:"400",height:"200",alt:"logo"})},G=function(e){return s.a.createElement("select",{defaultValue:e.default},e.values.map((function(e){return s.a.createElement("option",{key:e},e)})))},$=["Select..","Wait Staff","Bar Back","Security","Bartender"],W=["Select..","Main Bar","Garden","Main Door","Side Door"],X=function(){var e=Object(r.useState)(!1),t=Object(H.a)(e,2),a=t[0],n=t[1];return s.a.createElement("div",null,a?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"card staff-input-form"},s.a.createElement("div",{className:"staff-title"},"Your shift has been started."),s.a.createElement("span",{className:"staff-form-head"},"To End your workday complete the task below:"),s.a.createElement("ul",{className:"staff-list"},s.a.createElement("li",null,"1. Perform checkout @ Cost Center"),s.a.createElement("li",null,"2. Perform checkout in Bak||Bar"),s.a.createElement("li",null,"3. Have Manager verify both checkouts"),s.a.createElement("li",null,"4. Deliver funds to comptroller for verification")),s.a.createElement("a",{href:"/portal/checkout"},s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:function(){return console.log("REROUTE")}},"Daily Checkout"))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"card staff-input-form"},s.a.createElement("div",{className:"staff-title"},"Hello [user.name]!"),s.a.createElement("div",{className:"staff-form-head"},'Please verify your postition, cost center, and starting cash to "Start Shift".'),s.a.createElement("div",{className:"staff-form-head mt-4"},"Position:"),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select is-black"},s.a.createElement(G,{default:"0",values:$}))),s.a.createElement("span",{className:"staff-form-head"},"Cost Center:"),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select is-black"},s.a.createElement(G,{default:"0",values:W}))))),s.a.createElement("span",{className:"staff-form-head"},"Starting Cash:"),s.a.createElement("input",{className:"input staff-input is-black is-medium mt-0",type:"text",placeholder:"$250.00"}),s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:function(){console.log("Employee Shift Started"),n(!0)}},"Start Shift")))))},z=(a(132),[{id:0,first_name:"Andrew",last_name:"Pedersen",phone:"9705313993",is_active:!0,job_role:0,active_shift:!0,check_out:{cash_sales:476.98,credit_sales:9889,credit_tips:976.89,is_closed:!0,is_verified:!0,is_recieved:!0,cost_center:0,starting_cash:250}},{id:1,first_name:"Chauncey",last_name:"Phillips",phone:"9705354553",is_active:!0,job_role:1,active_shift:!0,check_out:{cash_sales:276.98,credit_sales:999,credit_tips:56.89,is_closed:!0,is_verified:!0,is_recieved:!0,cost_center:0,starting_cash:250}},{id:2,first_name:"Terrance",last_name:"Harvey",phone:"9705312343",is_active:!0,job_role:1,active_shift:!0,check_out:{cash_sales:446.98,credit_sales:1289,credit_tips:76.89,is_closed:!0,is_verified:!0,is_recieved:!0,cost_center:0,starting_cash:120}},{id:3,first_name:"Andrew",last_name:"Pedersen",phone:"9705313993",is_active:!0,job_role:1,active_shift:!0,check_out:{cash_sales:676.98,credit_sales:389,credit_tips:276.89,is_closed:!0,is_verified:!0,is_recieved:!0,cost_center:0,starting_cash:100}}]),J=function(){var e=Object(r.useState)(0),t=Object(H.a)(e,2),a=t[0];t[1];return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:V.a,width:"400",height:"200",alt:"logo"})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"card staff-input-form"},s.a.createElement("div",{className:"staff-title"},"Employee Checkout"),s.a.createElement("span",{className:"staff-form-head"},"Filter By Position:"),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select is-black"},s.a.createElement("select",null,s.a.createElement("option",null,"Position"),s.a.createElement("option",{id:"1"},"Wait Staff"),s.a.createElement("option",null,"Bar Back"),s.a.createElement("option",null,"Security"),s.a.createElement("option",null,"Bartender"))))),s.a.createElement("span",{className:"staff-form-head"},"Name:"),s.a.createElement("ul",{className:"staff-list"},z.map((function(e){return e.job_role===a?s.a.createElement("li",{key:e.id},s.a.createElement("div",null,e.last_name,", ",e.first_name)):null}))),s.a.createElement("a",{href:"/portal/checkout"},s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:function(){return console.log("REROUTE")}},"Daily Checkout"))))))},K=a(61),Q=(a(133),function(e){Object(j.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={modalState:!1},n.toggleModal=n.toggleModal.bind(Object(K.a)(n)),n}return Object(C.a)(a,[{key:"toggleModal",value:function(){this.setState((function(e,t){}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"card checkout-input-form"},s.a.createElement("div",{className:"checkout-user-static"},s.a.createElement("div",{className:"checkout-title"},"[user.name], please complete this form for your checkout process."),s.a.createElement("div",{className:"checkout-form-head"},"[user.position]"),s.a.createElement("div",{className:"checkout-form-head"},"[user.cashcenter]"),s.a.createElement("div",{className:"checkout-form-head"},"[user.startingcash]")),s.a.createElement("div",{className:"checkout-form-head"},"Daily Cash Sales:"),s.a.createElement("input",{className:"input checkout-input is-black is-medium mt-0",type:"text",placeholder:"$250.00"}),s.a.createElement("div",{className:"checkout-form-head"},"Daily Credit Sales:"),s.a.createElement("input",{className:"input checkout-input is-black is-medium mt-0",type:"text",placeholder:"$250.00"}),s.a.createElement("div",{className:"checkout-form-head"},"Cash Owed to House:"),s.a.createElement("input",{className:"input is-black is-medium mt-0",type:"text",placeholder:"$250.00"}),s.a.createElement("span",{className:"exerptText mt-1"},'Use "-xx.xx" to denote if cash is owed to you (ex: -26.00)'),s.a.createElement("div",{className:"checkout-form-head mt-4"},"Verify to complete Checkout:"),s.a.createElement("a",{href:"/portal/verification"},s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:this.toggleModal},"Verify")))))}}]),a}(s.a.Component)),Z=(a(134),function(){var e=Object(r.useState)(!0),t=Object(H.a)(e,2),a=t[0],l=(t[1],Object(r.useState)(!1)),o=Object(H.a)(l,2),i=o[0],c=o[1],m=Object(r.useState)(!1),u=Object(H.a)(m,2),d=u[0],f=u[1],p=Object(r.useState)(!1),h=Object(H.a)(p,2),E=h[0],v=h[1];return s.a.createElement("div",{className:"card staff-input-form"},s.a.createElement("div",{className:"staff-title"},"Verification"),s.a.createElement("span",{className:"staff-form-head"},"Now that your check out is complete, next verify your paper and digital checkouts are correct by management. Then deliver any monies owed to the house."),s.a.createElement("ul",{className:"staff-list"},"Procedures to Complete",a?s.a.createElement("li",{className:"taskCompleted"}," 1. Preform checkout @ Cost Center"):s.a.createElement("li",{className:"taskNeeded has-text-danger"},"1. Preform checkout @ Cost Center"),a?s.a.createElement("li",{className:"taskCompleted"},"2. Preform checkout in Bak || Bar "):s.a.createElement("li",{className:"taskNeeded has-text-danger"},"2. Preform checkout in Bak || Bar "),i?s.a.createElement("li",{className:"taskCompleted"},"3. Have Manager verify both checkouts"):s.a.createElement("li",{className:"taskNeeded has-text-danger"},"3. Have manager verify both checkouts"),d?s.a.createElement("li",{className:"taskCompleted"},"4. Deliver funds to comptroller for verification"):s.a.createElement("li",{className:"taskNeeded has-text-danger"},"4. Deliver funds to comptroller for verification")),s.a.createElement("div",{className:"staff-button-div"},E?s.a.createElement("span",{className:"staff-form-head"},"All task have been completed."):s.a.createElement("span",{className:"staff-form-head"},"Have manager and comptroller to verify your submission to allow LogOut"),E?s.a.createElement("a",{href:n.thankyou},s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:function(){return console.log("REROUTE")}},"Log Out"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"has-text-danger  taskNeeded m-4"},"Verification needed."),s.a.createElement("button",{className:"button login-button is-black",onClick:function(){c(!0),f(!0),v(!0)}}," verify(state)"))))}),ee=(a(135),Object(E.b)((function(e){return{auth:e.auth}}),{logoutUser:h})((function(e){return s.a.createElement("div",{className:"card staff-input-form"},s.a.createElement("div",{className:"staff-title"},"Your shift has been completed."),s.a.createElement("span",{className:"staff-form-head"},"You have completed all task in Bak||Bar for the day!"),s.a.createElement("div",{className:"mt-4"},"You have been logged out for the day. Here is a summary:"),s.a.createElement("ul",{className:"staff-list"},s.a.createElement("li",null,"[user.name] [user.position]"),s.a.createElement("li",null,"[user.costcenter] ( starting$: [checkout.starting_cash])"),s.a.createElement("li",null,"Checkout completed: [checkout.is_closed]"),s.a.createElement("li",null,"Manager verified: [checkout.is_verified]"),s.a.createElement("li",null,"Monies recieved: [checkout.is_recieved]")),s.a.createElement("a",{href:"/portal/staff"},s.a.createElement("div",{className:"staff-button-div"},s.a.createElement("button",{className:"button login-button is-danger",onClick:function(t){t.preventDefault(),e.logoutUser(),window.location.href="/"}},"Good Bye."))))}))),te=(a(136),function(){return s.a.createElement(c.c,null,s.a.createElement(c.a,{path:n.staff,component:X}),s.a.createElement(c.a,{path:n.management,component:J}),s.a.createElement(c.a,{path:n.checkout,component:Q}),s.a.createElement(c.a,{path:n.verification,component:Z}),s.a.createElement(c.a,{path:n.thankyou,component:ee}))});if(localStorage.jwtToken){var ae=localStorage.jwtToken;f(ae);var ne=Object(m.a)(ae);S.dispatch(p(ne));var re=Date.now()/1e3;ne.exp<re&&(S.dispatch(h()),window.location.href="./login")}var se=function(){return s.a.createElement(E.a,{store:S},s.a.createElement(i.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(Y,null),s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:n.about,component:I}),s.a.createElement(c.a,{path:n.login,component:D}),s.a.createElement(c.a,{path:n.signup,component:q}),s.a.createElement(c.a,{path:n.portal,component:te})))))},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),s(e),l(e)}))};o.a.render(s.a.createElement(i.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(se,null))),document.getElementById("root")),le()},69:function(e,t,a){e.exports=a.p+"static/media/bakbar_white.baede7b0.png"},93:function(e,t,a){e.exports=a.p+"static/media/bakbar.222c078d.png"},94:function(e,t,a){e.exports=a(137)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.2c882437.chunk.js.map