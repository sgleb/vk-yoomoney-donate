(this["webpackJsonpvk-yoomoney-donate"]=this["webpackJsonpvk-yoomoney-donate"]||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(18),c=a.n(i),s=a(17),l=a.n(s),r=a(29),j=a(12),d=a(23),u=a.n(d),b=a(6),o=(a(127),a(24)),p=a.n(o),h={173834599:{wallet:"4100117703640735"},177193845:{wallet:"410017408518903"},185486377:{wallet:"410013551203596"},191019732:{wallet:"410018896391866"}},O="NO_GROUP",m="NO_WALLET",v=a(5),x=function(e){var t=e.id,a=e.wallet,i=e.label,c=e.hashParams,s=e.isApple,l=Object(n.useState)(25),r=Object(j.a)(l,2),d=r[0],u=r[1],o=Object(n.useState)(""),p=Object(j.a)(o,2),h=p[0],O=p[1];return Object(n.useEffect)((function(){c.sum&&u(c.sum),c.aucs&&O(c.aucs.slice(0,150))}),[]),Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)(b.f,{onSubmit:function(e){s&&(e.target.target="_self")},id:t,target:"about:blank",method:"POST",action:"https://yoomoney.ru/quickpay/confirm.xml",children:[Object(v.jsx)(b.e,{top:"\u0421\u0443\u043c\u043c\u0430",children:Object(v.jsx)(b.g,{type:"text",name:"sum",pattern:"[0-9]*",maxLength:"5",value:d,onInput:function(e){e.target.validity.valid&&u(e.target.value)}})}),Object(v.jsx)(b.e,{top:"\u041b\u043e\u0442\u044b",bottom:"\u0434\u043e 150 \u0437\u043d\u0430\u043a\u043e\u0432",children:Object(v.jsx)(b.m,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043b\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e",maxLength:"150",name:"targets",value:h,onInput:function(e){(e.target.validity.valid||e.target.value.length<=0)&&O(e.target.value)},required:!0})}),Object(v.jsx)(b.e,{children:Object(v.jsx)(b.d,{style:{display:"flex",justifyContent:"space-around"},children:Object(v.jsx)(b.c,{type:"submit",size:"m",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"})})}),Object(v.jsx)("input",{type:"hidden",name:"receiver",value:a}),Object(v.jsx)("input",{type:"hidden",name:"quickpay-form",value:"donate"}),Object(v.jsx)("input",{type:"hidden",name:"paymentType",value:"AC"}),Object(v.jsx)("input",{type:"hidden",name:"label",value:i}),Object(v.jsx)("input",{type:"hidden",name:"need-fio",value:"false"}),Object(v.jsx)("input",{type:"hidden",name:"need-email",value:"false"}),Object(v.jsx)("input",{type:"hidden",name:"need-phone",value:"false"}),Object(v.jsx)("input",{type:"hidden",name:"need-address",value:"false"})]})})},f=function(e){var t=e.id,a=e.wallet,n=e.label,i=e.hashParams,c=e.isApple;return Object(v.jsxs)(b.h,{id:t,children:[Object(v.jsx)(b.i,{children:Object(v.jsx)(b.n,{level:"1",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 \u043b\u043e\u0442"})}),Object(v.jsx)(b.d,{children:Object(v.jsx)(x,{id:"paymentForm",wallet:a,label:n,hashParams:i,isApple:c})})]})},y=function(e){var t,a=e.id;switch(e.errCase){case m:t="\u042d\u0442\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u043e\u0448\u0435\u043b\u0435\u043a";break;case O:t="\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b";break;default:t=""}return Object(v.jsxs)(b.h,{id:a,children:[Object(v.jsx)(b.i,{children:Object(v.jsx)(b.n,{level:"2",children:"\u041e\u0448\u0438\u0431\u043a\u0430"})}),Object(v.jsx)(b.d,{children:Object(v.jsx)(b.l,{weight:"semibold",children:t})})]})},w=function(e){var t=e.id;return Object(v.jsx)(b.h,{id:t})},g=function(){var e=Object(n.useState)("blank"),t=Object(j.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("view1"),s=Object(j.a)(c,2),d=s[0],o=s[1],x=Object(n.useState)(Object(v.jsx)(b.k,{size:"large"})),g=Object(j.a)(x,2),_=g[0],k=g[1],S=Object(n.useState)(""),A=Object(j.a)(S,2),P=A[0],C=A[1],I=Object(n.useState)(""),E=Object(j.a)(I,2),L=E[0],q=E[1],N=Object(n.useState)(""),T=Object(j.a)(N,2),V=T[0],W=T[1],z=Object(n.useState)({}),F=Object(j.a)(z,2),J=F[0],K=F[1],U=Object(n.useState)(!1),B=Object(j.a)(U,2),G=B[0],R=B[1];return Object(n.useEffect)((function(){function e(){return(e=Object(r.a)(u.a.mark((function e(){var t,a,n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=p.a.parse(window.location.search.slice(1))).vk_platform&&("mobile_ipad"!==(a=t.vk_platform).platform&&"mobile_iphone"!==a&&"mobile_iphone_messenger"!==a&&"iphone_external"!==a&&"ipad_external "!==a||R(!0)),t.vk_group_id?null!==(n=h[t.vk_group_id])&&void 0!==n&&n.wallet?(q(null===(c=h[t.vk_group_id])||void 0===c?void 0:c.wallet),W(t.vk_user_id),s=p.a.parse(window.location.hash.slice(1)),K(s),i("payment")):(C(m),i("error")):(C(O),i("error")),o("view2"),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var i=document.createAttribute("scheme");i.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(i)}})),function(){e.apply(this,arguments)}()}),[]),Object(v.jsx)(b.a,{children:Object(v.jsx)(b.b,{children:Object(v.jsxs)(b.j,{activeView:d,children:[Object(v.jsx)(b.o,{id:"view1",children:Object(v.jsx)(w,{id:"blank"})}),Object(v.jsxs)(b.o,{activePanel:a,id:"view2",popout:_,children:[Object(v.jsx)(y,{id:"error",errCase:P}),Object(v.jsx)(f,{id:"payment",wallet:L,label:V,hashParams:J,isApple:G})]})]})})})};l.a.send("VKWebAppInit"),c.a.render(Object(v.jsx)(g,{}),document.getElementById("root"))}},[[131,1,2]]]);