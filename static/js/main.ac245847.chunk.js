(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){e.exports=a(47)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),s=a.n(c),o=a(3),l=a(5),u=a(18),i=a(1),m="ADD_STAGE",d="SUBSTRACT_STAGE",p="SET_STAGE",f="CONTROL_MAIL",g="CONTROL_PASS",_="CONTROL_CONFIRM",y="CHECK_MAIL",v="CHECK_PASS",b="CHECK_CONFIRM",E="CONTROL_COUNTRY",h="CONTROL_CITY",N="CONTROL_ADDRESS",O="CHECK_COUNTRY",S="CHECK_CITY",C="CHECK_ADDRESS",w="CONTROL_CATEGORY",j={stage:1};var k={mail:"",password:"",confirm:"",mailStatus:100,passwordStatus:100,confirmStatus:100};var L={country:"",city:"",address:"",countryStatus:100,cityStatus:100,addressStatus:100};var T=a(14),R={category1:"",category2:"",category3:""};var A=Object(o.b)({modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.stage<4?Object(i.a)({},e,{stage:e.stage+1}):e;case d:return e.stage>1?Object(i.a)({},e,{stage:e.stage-1}):e;case p:return Object(i.a)({},e,{stage:t.value});default:return e}},contactsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=t.value.replace(/[^.@-\w]/gi,"");return a=a||"",Object(i.a)({},e,{mail:a});case g:return Object(i.a)({},e,{password:t.value});case _:return Object(i.a)({},e,{confirm:t.value});case y:return t.typing?Object(i.a)({},e,{mailStatus:100}):e.mail&&e.mail.includes("@")&&e.mail.includes(".")&&e.mail.length>=6?Object(i.a)({},e,{mailStatus:200}):Object(i.a)({},e,{mailStatus:400});case v:return t.typing?Object(i.a)({},e,{passwordStatus:100}):e.password&&e.password.length>=6?Object(i.a)({},e,{passwordStatus:200}):Object(i.a)({},e,{passwordStatus:400});case b:return t.typing?Object(i.a)({},e,{confirmStatus:100}):e.password&&e.confirm&&e.password===e.confirm?Object(i.a)({},e,{confirmStatus:200}):Object(i.a)({},e,{confirmStatus:400});default:return e}},addressReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=t.value.replace(/[^-\w\s]/gi,"");return a=a||"",Object(i.a)({},e,{country:a});case h:var r=t.value.replace(/[^-\w\s]/gi,"");return r=r||"",Object(i.a)({},e,{city:r});case N:var n=t.value.replace(/[^,.\/""-\w\s]/gi,"");return n=n||"",Object(i.a)({},e,{address:n});case O:return t.typing?Object(i.a)({},e,{countryStatus:100}):e.country&&e.country.length>=2?Object(i.a)({},e,{countryStatus:200}):Object(i.a)({},e,{countryStatus:400});case S:return t.typing?Object(i.a)({},e,{cityStatus:100}):e.city&&e.city.length>=2?Object(i.a)({},e,{cityStatus:200}):Object(i.a)({},e,{cityStatus:400});case C:return t.typing?Object(i.a)({},e,{addressStatus:100}):e.address&&e.address.length>=6?Object(i.a)({},e,{addressStatus:200}):Object(i.a)({},e,{addressStatus:400});default:return e}},categoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(i.a)({},e,Object(T.a)({},t.category,t.value));default:return e}}}),F=a(26),W=a(27),x=a(30),H=a(28),I=a(31),M=a(10);a(42);var B=Object(l.b)(function(e){return{formStage:e.modalReducer.stage}})(function(e){var t=e.formStage,a=e.children,r=function(e){var a="progressLine__point progressLine__point--".concat(e);switch(e){case"contacts":a+=" progressLine__point--completed";break;case"address":t>2&&(a+=" progressLine__point--completed");break;case"categories":t>3&&(a+=" progressLine__point--completed")}return a};return n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"overlay__logoWrapper"},n.a.createElement("div",{className:"logo logo--rotate45"})),n.a.createElement("div",{className:"formWindow"},n.a.createElement("div",{className:"formWindow__formHeader"},n.a.createElement("div",{className:"formHeader"},n.a.createElement("div",{className:"formHeader__progressLine progressLine"},n.a.createElement("div",{className:r("contacts")}),n.a.createElement("div",{className:r("address")}),n.a.createElement("div",{className:r("categories")}),n.a.createElement("div",{className:r("success")}),n.a.createElement("div",{className:"progressLine__marker",style:1===t?{}:2===t?{animation:"markerToAddress 500ms linear forwards"}:3===t?{animation:"markerToCategories 500ms linear forwards"}:{animation:"markerToSuccess 500ms linear forwards"}}),n.a.createElement("div",{className:"progressLine__subscription progressLine__subscription--contacts"},"Contacts"),n.a.createElement("div",{className:"progressLine__subscription progressLine__subscription--address",style:t>=2?{color:"#bc8041"}:{}},"Address"),n.a.createElement("div",{className:"progressLine__subscription progressLine__subscription--categories",style:t>=3?{color:"#bc8041"}:{}},"Categories"),n.a.createElement("div",{className:"progressLine__subscription progressLine__subscription--success",style:t>=4?{color:"#bc8041"}:{}},"Success")),n.a.createElement("div",{className:"formHeader__doneLine",style:1===t?{}:2===t?{animation:"doneLineToAddress 500ms linear forwards"}:3===t?{animation:"doneLineToCategories 500ms linear forwards"}:{animation:"doneLineToSuccess 500ms linear forwards"}}))),n.a.createElement("div",{className:"formWindow__main"},a),n.a.createElement("div",{className:"formWindow__logoWrapper formWindow__logoWrapper--left"},n.a.createElement("div",{className:"logo logo--rotate315"})),n.a.createElement("div",{className:"formWindow__logoWrapper formWindow__logoWrapper--bottom"},n.a.createElement("div",{className:"logo logo--rotate45"}))))});function q(e){return{type:f,value:e}}function D(e){return{type:g,value:e}}function P(e){return{type:_,value:e}}function K(e){return{type:y,typing:e}}function Y(e){return{type:v,typing:e}}function X(e){return{type:b,typing:e}}function G(e){return{type:p,value:e}}a(17);var U=Object(l.b)(function(e){return{contacts:e.contactsReducer,stage:e.modalReducer.stage}},function(e){return Object(o.a)({controlMail:q,controlPassword:D,controlConfirm:P,checkMail:K,checkPassword:Y,checkConfirm:X,setStage:G},e)})(function(e){var t=e.contacts,a=e.stage,r=e.setStage,c=e.controlMail,s=e.controlPassword,o=e.controlConfirm,l=e.checkMail,u=e.checkPassword,i=e.checkConfirm,m=e.history,d=t.mail,p=t.password,f=t.confirm,g=t.mailStatus,_=t.passwordStatus,y=t.confirmStatus;return 1!==a&&r(1),n.a.createElement("form",{className:"form"},n.a.createElement("label",{className:"form__label",htmlFor:"email"},"email"),n.a.createElement("input",{id:"email",className:"form__input",type:"email",placeholder:"somebody@example.com",value:d,autoFocus:!0,required:!0,onChange:function(e){return c(e.target.value)},onFocus:function(){return l(!0)},onBlur:function(){return l()}}),n.a.createElement("label",{className:"form__label",htmlFor:"pwd"},"password"),n.a.createElement("input",{id:"password",className:"form__input",type:"password",placeholder:"6 symbols minimum",value:p,required:!0,onChange:function(e){return s(e.target.value)},onFocus:function(){return u(!0)},onBlur:function(){return u()}}),n.a.createElement("label",{className:"form__label",htmlFor:"confpwd"},"password confirm"),n.a.createElement("input",{id:"confpwd",className:"form__input",type:"password",placeholder:"Retype your password",value:f,required:!0,onChange:function(e){o(e.target.value),i()},onFocus:function(){return i(!0)},onBlur:function(){return i()}}),200!==g||200!==_||200!==y?n.a.createElement("input",{className:"form__button",type:"button",value:"NEXT",disabled:!0}):n.a.createElement("input",{className:"form__button",type:"button",value:"NEXT",tabIndex:"0",onClick:function(){return m.push("/address")}}))});function J(e){return{type:E,value:e}}function V(e){return{type:h,value:e}}function z(e){return{type:N,value:e}}function Q(e){return{type:O,typing:e}}function Z(e){return{type:S,typing:e}}function $(e){return{type:C,typing:e}}var ee=Object(l.b)(function(e){return{postal:e.addressReducer,stage:e.modalReducer.stage}},function(e){return Object(o.a)({controlCountry:J,controlCity:V,controlAddress:z,checkCountry:Q,checkCity:Z,checkAddress:$,setStage:G},e)})(function(e){var t=e.postal,a=e.stage,r=e.setStage,c=e.controlCountry,s=e.controlCity,o=e.controlAddress,l=e.checkCountry,u=e.checkCity,i=e.checkAddress,m=e.history,d=t.country,p=t.city,f=t.address,g=t.countryStatus,_=t.cityStatus,y=t.addressStatus;return 2!==a&&r(2),n.a.createElement("form",{className:"form"},n.a.createElement("label",{className:"form__label",htmlFor:"country"},"country"),n.a.createElement("input",{id:"country",className:"form__input",type:"text",placeholder:"",value:d,autoFocus:!0,required:!0,onChange:function(e){return c(e.target.value)},onFocus:function(){return l(!0)},onBlur:function(){return l()}}),n.a.createElement("label",{className:"form__label",htmlFor:"city"},"city"),n.a.createElement("input",{id:"city",className:"form__input",type:"text",placeholder:"",value:p,required:!0,onChange:function(e){return s(e.target.value)},onFocus:function(){return u(!0)},onBlur:function(){return u()}}),n.a.createElement("label",{className:"form__label",htmlFor:"address"},"address"),n.a.createElement("input",{id:"address",className:"form__input",type:"text",placeholder:"",value:f,required:!0,onChange:function(e){o(e.target.value),i()},onFocus:function(){return i(!0)},onBlur:function(){return i()}}),200!==g||200!==_||200!==y?n.a.createElement("input",{className:"form__button",type:"button",value:"NEXT",disabled:!0}):n.a.createElement("input",{className:"form__button",type:"button",value:"NEXT",tabIndex:"0",onClick:function(){return m.push("/categories")}}))});function te(e,t){return{type:w,category:e,value:t}}var ae=["Arts & Entertainment","Education","Music & Video","Hobbies","Work & Career","Other"];var re=Object(l.b)(function(e){return{categories:e.categoryReducer,stage:e.modalReducer.stage}},function(e){return Object(o.a)({controlCategory:te,setStage:G},e)})(function(e){var t=e.categories,a=e.controlCategory,r=e.stage,c=e.setStage,s=e.history,o=t.category1,l=t.category2,u=t.category3;return 3!==r&&c(3),n.a.createElement("form",{className:"form"},n.a.createElement("label",{className:"form__label",htmlFor:"category1"},"category 1"),n.a.createElement("div",{className:"form__selectWrap"},n.a.createElement("select",{id:"category1",className:"form__select",value:o,onChange:function(e){return a("category1",e.target.value)}},n.a.createElement("option",{value:"",hidden:!0,disabled:!0},"Select category:"),ae.map(function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement("label",{className:"form__label",htmlFor:"category2"},"category 2"),n.a.createElement("div",{className:"form__selectWrap"},n.a.createElement("select",{id:"category2",className:"form__select",value:l,onChange:function(e){return a("category2",e.target.value)}},n.a.createElement("option",{value:"",hidden:!0,disabled:!0},"Select category:"),ae.map(function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement("label",{className:"form__label",htmlFor:"category3"},"category 3"),n.a.createElement("div",{className:"form__selectWrap"},n.a.createElement("select",{id:"category3",className:"form__select",value:u,onChange:function(e){return a("category3",e.target.value)}},n.a.createElement("option",{value:"",hidden:!0,disabled:!0},"Select category:"),ae.map(function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement("input",{className:"form__button",type:"button",value:"NEXT",tabIndex:"0",onClick:function(){return s.push("/success")}}))});a(43);var ne=Object(l.b)(function(e){return{stage:e.modalReducer.stage}},function(e){return Object(o.a)({setStage:G},e)})(function(e){var t=e.stage,a=e.setStage;return 4!==t&&a(4),n.a.createElement("div",{className:"success"},n.a.createElement("h2",{className:"success__header"},"Success!"),n.a.createElement("p",{className:"success__message"},"Your account was successfuly regestered."),n.a.createElement("p",{className:"success__message"},"Please wait for account approval."),n.a.createElement("p",{className:"success__message"},"It can take up to 24 hours."),n.a.createElement("p",{className:"success__info m15"},"Have questions?"),n.a.createElement("p",{className:"success__info"},"Contact\xa0",n.a.createElement("a",{className:"success__link",href:"mailto:info@site.com"},"info@site.com")),n.a.createElement("input",{className:"success__button",type:"button",value:"DONE",tabIndex:"0"}))}),ce=(a(44),a(45),function(e){function t(){return Object(F.a)(this,t),Object(x.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(B,null,n.a.createElement(M.c,null,n.a.createElement(M.a,{path:"/",exact:!0,component:U}),n.a.createElement(M.a,{path:"/contacts",exact:!0,component:U}),n.a.createElement(M.a,{path:"/address",exact:!0,component:ee}),n.a.createElement(M.a,{path:"/categories",exact:!0,component:re}),n.a.createElement(M.a,{path:"/success",exact:!0,component:ne}),n.a.createElement(M.a,{path:"*",component:U}))))}}]),t}(n.a.Component)),se=Object(o.c)(A);s.a.render(n.a.createElement(l.a,{store:se},n.a.createElement(u.a,null,n.a.createElement(ce,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ac245847.chunk.js.map