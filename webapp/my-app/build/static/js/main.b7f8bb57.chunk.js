(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,a){e.exports=a(74)},63:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),c=(a(63),a(22)),i=a(23),m=a(25),s=a(24),u=(a(64),a(20)),p=a(26),d=a(101),E=a(95),h=a(102),b=a(97),g=a(99),f=a(100),v=a(98),y=a(48),C=a.n(y),O=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function j(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(C.a,null)),r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(u.b,{to:"/",style:{textDecoration:"inherit",color:"white"}}," WiFi-monitUA ")),r.a.createElement(f.a,{color:"inherit"}," ",r.a.createElement(u.b,{to:"/myconnection",style:{textDecoration:"inherit",color:"white"}}," My Connection ")," "))))}var k=a(52),w=a(37);function N(){var e=Object(n.useState)({latitude:40.62962,longitude:-8.657,zoom:16,width:"99vw",height:"92vh",bearing:275}),t=Object(k.a)(e,2),a=t[0],o=t[1];return r.a.createElement(w.c,Object.assign({},a,{mapboxApiAccessToken:"pk.eyJ1IjoiemVwc2lsdmEiLCJhIjoiY2s5MGE5cXdyMGxtbDNsbGNwZW84c3d5OSJ9.u7d3k_rYUzbIXgHiIRspPw",onViewportChange:function(e){o(e)}}),r.a.createElement("div",{style:{position:"absolute",right:0}},r.a.createElement(w.b,null)),r.a.createElement(w.a,{key:1,latitude:40.633213,longitude:-8.659457},r.a.createElement(u.b,{to:{pathname:"/department",state:{depNum:4}}},r.a.createElement(f.a,{variant:"contained",color:"primary",size:"small"},"DETI"))))}var x=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,direction:"column"},r.a.createElement(d.a,{item:!0},r.a.createElement(j,null)),r.a.createElement(N,null),r.a.createElement(f.a,null,r.a.createElement(u.b,{to:{pathname:"/department",state:{depNum:4}}}," DETI (departamento 4) ")),r.a.createElement(f.a,null,r.a.createElement(u.b,{to:{pathname:"/department",state:{depNum:23}}}," CP (departamento 23) "))))},F=function(){return r.a.createElement("div",null,r.a.createElement("h2",null," 404 Not Found!"))},I=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("h2",null," Voc\xea est\xe1 conectado ao AP: null "),r.a.createElement("ul",null,["teste1","teste2","teste3","teste4"].map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},A=a(51),D=a.n(A);a(73);function L(e){console.log(e.name),"A"==e.name.charAt(0)&&alert(e.name)}var P=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,direction:"column"},r.a.createElement("div",{style:{padding:20}},r.a.createElement(d.a,{item:!0,container:!0},r.a.createElement(d.a,{item:!0,xs:0,sm:2}),r.a.createElement(d.a,{item:!0,xs:12,sm:8},r.a.createElement(D.a,{src:this.props.image,map:this.props.map,onClick:L.bind(this)})),r.a.createElement(d.a,{item:!0,xs:0,sm:2})))))}}]),a}(r.a.Component);function G(e){return"salaEstudo"==e?20:"makerLab"==e?40:10}function J(e){return e>=0&&e<=10?(console.log(e),"rgba(260,0,0,0.2)"):e>10&&e<=20?"rgba(260,0,0,0.4)":"rgba(260,0,0,0.6)"}function M(e){return"AP: "+e+", NUM OF CONNECTED DEVICES: "+G(e)}var B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e="./logo512.png",t="./logo512.png",a="./logo512.png",n={name:"deafult",areas:[]};switch(this.props.id.depNum){case 4:e="./images/detipiso1.png",t="./images/dep4piso2.png",a="./images/dep4piso3.png",n={name:"mapadetipiso1",areas:[{name:M("salaEstudo"),shape:"circle",coords:[555,108,15],fillColor:"rgba(0,0,250,0.5)"},{name:M("makerLab"),shape:"circle",coords:[771,77,15],fillColor:"rgba(0,0,250,0.5)"},{name:M("sala dos nucleos"),shape:"circle",coords:[1109,85,15],fillColor:"rgba(0,0,250,0.5)"},{name:"4.1.18",shape:"rect",coords:[469,92,574,178],preFillColor:J(G("salaEstudo"))},{name:"4.1.19",shape:"rect",coords:[469,2,648,91],preFillColor:J(G("salaEstudo"))},{name:"4.1.20",shape:"rect",coords:[649,2,754,91],preFillColor:J(G("makerLab"))},{name:"4.1.23",shape:"rect",coords:[755,2,870,91],preFillColor:J(G("makerLab"))},{name:"4.1.26",shape:"rect",coords:[871,2,959,91],preFillColor:J(G("makerLab"))},{name:"4.1.27",shape:"rect",coords:[960,2,1004,91],preFillColor:J(G("makerLab"))},{name:"4.1.28",shape:"rect",coords:[1005,2,1092,91],preFillColor:J(G("sala dos nucleos"))},{name:"4.1.32",shape:"rect",coords:[1093,2,1181,91],preFillColor:J(G("sala dos nucleos"))}]}}return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"}," ",this.props.id.depName," "),r.a.createElement("h3",{align:"center"}," Piso 1 "),r.a.createElement(P,{image:e,map:n}),r.a.createElement("h3",{align:"center"}," Piso 2 "),r.a.createElement(P,{image:t,map:n}),r.a.createElement("h3",{align:"center"}," Piso 3 "),r.a.createElement(P,{image:a,map:n}))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(B,{id:this.props.location.state}))}}]),a}(r.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:x}),r.a.createElement(p.b,{exact:!0,path:"/myconnection",component:I}),r.a.createElement(p.b,{exact:!0,path:"/department",component:S}),r.a.createElement(p.b,{path:"/404",component:F}),r.a.createElement(p.a,{to:"/404"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.b7f8bb57.chunk.js.map