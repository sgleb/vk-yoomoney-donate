(this["webpackJsonpvk-yoomoney-donate"]=this["webpackJsonpvk-yoomoney-donate"]||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(19),i=a.n(n),r=a(17),s=a.n(r),l=a(29),d=a(15),j=a(24),o=a.n(j),u=a(6),b=(a(127),a(18)),h=a.n(b),O={173834599:{wallet:"4100117703640735"},177193845:{wallet:"410017408518903"},185486377:{wallet:"410013551203596"},191019732:{wallet:"410018896391866"}},p="NO_GROUP",m="NO_WALLET",v=a(5),x=function(e){var t=e.id,a=e.wallet,n=e.hashParams,i=Object(c.useState)(25),r=Object(d.a)(i,2),s=r[0],l=r[1],j=Object(c.useState)(""),o=Object(d.a)(j,2),b=o[0],O=o[1];return Object(c.useEffect)((function(){n.sum&&l(n.sum),n.aucs&&O(n.aucs.slice(0,64))}),[]),Object(v.jsx)(c.Fragment,{children:Object(v.jsxs)(u.f,{id:t,onSubmit:function(e){e.preventDefault();var t={targets:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438",sum:s,receiver:a,"quickpay-form":"donate",paymentType:"AC",label:b,"need-fio":!1,"need-email":!1,"need-phone":!1,"need-address":!1},c=h.a.stringify(t),n=document.createElement("a");n.setAttribute("target","about:blank"),n.href="https://yoomoney.ru/quickpay/confirm.xml?".concat(c),document.body.appendChild(n),n.click(),n.remove()},children:[Object(v.jsx)(u.e,{top:"\u0421\u0443\u043c\u043c\u0430",children:Object(v.jsx)(u.g,{type:"text",name:"sum",pattern:"[0-9]*",maxLength:"5",value:s,onInput:function(e){e.target.validity.valid&&l(e.target.value)}})}),Object(v.jsx)(u.e,{top:"\u041b\u043e\u0442\u044b",bottom:"\u0434\u043e 64 \u0437\u043d\u0430\u043a\u043e\u0432",children:Object(v.jsx)(u.m,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043b\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e",maxLength:"64",value:b,onInput:function(e){(e.target.validity.valid||e.target.value.length<=0)&&O(e.target.value)},required:!0})}),Object(v.jsx)(u.e,{children:Object(v.jsx)(u.d,{style:{display:"flex",justifyContent:"space-around"},children:Object(v.jsx)(u.c,{type:"submit",size:"m",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"})})})]})})},f=function(e){var t=e.id,a=e.wallet,c=(e.label,e.hashParams);return Object(v.jsxs)(u.h,{id:t,children:[Object(v.jsx)(u.i,{children:Object(v.jsx)(u.n,{level:"1",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 \u043b\u043e\u0442"})}),Object(v.jsx)(u.d,{children:Object(v.jsx)(x,{id:"paymentForm",wallet:a,hashParams:c})})]})},y=function(e){var t,a=e.id;switch(e.errCase){case m:t="\u042d\u0442\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u043e\u0448\u0435\u043b\u0435\u043a";break;case p:t="\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b";break;default:t=""}return Object(v.jsxs)(u.h,{id:a,children:[Object(v.jsx)(u.i,{children:Object(v.jsx)(u.n,{level:"2",children:"\u041e\u0448\u0438\u0431\u043a\u0430"})}),Object(v.jsx)(u.d,{children:Object(v.jsx)(u.l,{weight:"semibold",children:t})})]})},w=function(e){var t=e.id;return Object(v.jsx)(u.h,{id:t})},g=function(){var e=Object(c.useState)("blank"),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)("view1"),r=Object(d.a)(i,2),j=r[0],b=r[1],x=Object(c.useState)(Object(v.jsx)(u.k,{size:"large"})),g=Object(d.a)(x,2),k=g[0],S=g[1],_=Object(c.useState)(""),A=Object(d.a)(_,2),C=A[0],P=A[1],E=Object(c.useState)(""),I=Object(d.a)(E,2),L=I[0],q=I[1],N=Object(c.useState)({}),V=Object(d.a)(N,2),W=V[0],z=V[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=h.a.parse(window.location.search.slice(1))).vk_group_id?null!==(a=O[t.vk_group_id])&&void 0!==a&&a.wallet?(q(null===(c=O[t.vk_group_id])||void 0===c?void 0:c.wallet),i=h.a.parse(window.location.hash.slice(1)),z(i),n("payment")):(P(m),n("error")):(P(p),n("error")),b("view2"),S(null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,c=t.data;if("VKWebAppUpdateConfig"===a){var n=document.createAttribute("scheme");n.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]),Object(v.jsx)(u.a,{children:Object(v.jsx)(u.b,{children:Object(v.jsxs)(u.j,{activeView:j,children:[Object(v.jsx)(u.o,{id:"view1",children:Object(v.jsx)(w,{id:"blank"})}),Object(v.jsxs)(u.o,{activePanel:a,id:"view2",popout:k,children:[Object(v.jsx)(y,{id:"error",errCase:C}),Object(v.jsx)(f,{id:"payment",wallet:L,hashParams:W})]})]})})})};s.a.send("VKWebAppInit"),i.a.render(Object(v.jsx)(g,{}),document.getElementById("root"))}},[[131,1,2]]]);