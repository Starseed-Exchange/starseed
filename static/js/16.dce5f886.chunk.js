(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[16],{677:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return O}));var r=t(50),c=t(4),a=t.n(c),i=t(14),o=t(0),s=t(66),u=t(53),j=t(127),b=t(672),l=t(670),f=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(l.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.c)(r,e,t);case 2:return i=c.sent,n(Object(j.a)(t)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},d=function(e){var n=Object(s.m)().account,t=Object(l.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(b.c)(t,c,n)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(u.b)(),r=Object(s.m)(),c=r.account,f=Object(l.f)(e),d=Object(o.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=n?b.g:b.f,r.next=3,i(f,c);case 3:t(Object(j.f)(e,c)),t(Object(j.e)(e,c));case 5:case"end":return r.stop()}}),r)}))),[c,t,n,f,e]);return{onReward:d}}},678:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return j})),t.d(n,"c",(function(){return b}));var r=t(4),c=t.n(r),a=t(14),i=t(108),o=t.n(i),s=t(61),u=function(e,n){return new(new o.a(e).eth.Contract)(s,n)},j=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.methods.allowance(r,t.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},686:function(e,n,t){"use strict";var r=t(15),c=t(0),a=t(690),i=t(49);n.a=function(e){var n=e.value,t=e.decimals,o=e.fontSize,s=void 0===o?"40px":o,u=e.prefix,j=Object(a.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),b=j.countUp,l=j.update,f=Object(c.useRef)(l);return Object(c.useEffect)((function(){f.current(n)}),[n,f]),Object(r.jsxs)(i.C,{bold:!0,fontSize:s,children:[u,b]})}},693:function(e,n,t){"use strict";t.d(n,"c",(function(){return x})),t.d(n,"b",(function(){return p}));var r=t(4),c=t.n(r),a=t(14),i=t(26),o=t(0),s=t(12),u=t.n(s),j=t(66),b=t(180),l=t(78),f=t(678),d=t(51),O=(t(37),t(61),t(129)),x=function(){var e=Object(O.a)().slowRefresh,n=Object(o.useState)(),t=Object(i.a)(n,2),r=t[0],s=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(b,Object(d.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,s(new u.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},p=function(e){var n=Object(o.useState)(new u.a(0)),t=Object(i.a)(n,2),r=t[0],s=t[1],j=Object(O.a)().slowRefresh;return Object(o.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(b,Object(d.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,s(new u.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,j]),r};n.a=function(e,n,t){var r=Object(o.useState)(new u.a(0)),s=Object(i.a)(r,2),b=s[0],l=s[1],d=Object(j.m)(),x=d.account,p=d.ethereum,m=Object(O.a)().fastRefresh,h=n||x,g=t||p;return Object(o.useEffect)((function(){h&&g&&function(){var n=Object(a.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.c)(g,e,h);case 2:t=n.sent,l(new u.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[h,g,e,m]),b}},811:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ve}));var r=t(15),c=t(60),a=t(0),i=t(3),o=t(803),s=t(49),u=t(669),j=t(167),b=t(4),l=t.n(b),f=t(14),d=t(26),O=t(66),x=t(676),p=t(677),m=t(16),h=t(12),g=t.n(h),v=t(37),w=t(51),k=t(101),S=t(697),y=t(129),z=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],r=n[1],c=Object(O.m)().account,i=Object(y.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var e=Object(f.a)(l.a.mark((function e(){var n,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.a.map((function(e){return{address:Object(w.e)(),name:"pendingEgg",params:[e.pid,c]}})),e.next=3,Object(v.a)(k,n);case 3:t=e.sent,a=S.a.map((function(e,n){return Object(m.a)(Object(m.a)({},e),{},{balance:new g.a(t[n])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,i]),t},C=t(685),T=t(686),R=function(e){var n=e.earningsSum,t=Object(u.a)();return Object(O.m)().account?Object(r.jsx)(T.a,{value:n}):Object(r.jsx)(s.C,{color:"textDisabled",style:{lineHeight:"60px"},children:t(298,"Locked")})},A=function(e){var n=e.cakeBalance,t=Object(u.a)();return Object(O.m)().account?Object(r.jsx)(T.a,{value:n,fontSize:"24px"}):Object(r.jsx)(s.C,{color:"textDisabled",style:{lineHeight:"36px"},children:t(298,"Locked")})},N=t(105),E=t(693),B=t(671);function Q(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return Q=function(){return e},e}function F(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return F=function(){return e},e}function P(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return P=function(){return e},e}function W(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return W=function(){return e},e}function H(){var e=Object(c.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);return H=function(){return e},e}var M=Object(i.e)(s.i)(H()),$=i.e.div(W()),D=i.e.img(P()),L=i.e.div(F(),(function(e){return e.theme.colors.textSubtle})),q=i.e.div(Q()),V=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],i=Object(O.m)().account,o=Object(u.a)(),j=z(),b=Object(B.a)(Object(E.a)(Object(w.a)())),m=Object(N.g)().toNumber(),h=j.reduce((function(e,n){return e+new x.a(n.balance).div(new x.a(10).pow(18)).toNumber()}),0),g=j.filter((function(e){return e.balance.toNumber()>0})),v=Object(p.a)(g.map((function(e){return e.pid}))).onReward,k=Object(a.useCallback)(Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,v();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[v]);return Object(r.jsx)(M,{children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{size:"xl",mb:"24px",children:o(542,"Farms & Staking")}),Object(r.jsx)(D,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(r.jsxs)($,{children:[Object(r.jsx)(L,{children:o(544,"STAR to Harvest")}),Object(r.jsx)(R,{earningsSum:h}),Object(r.jsxs)(L,{children:["~$",(m*h).toFixed(2)]})]}),Object(r.jsxs)($,{children:[Object(r.jsx)(L,{children:o(546,"STAR in Wallet")}),Object(r.jsx)(A,{cakeBalance:b}),Object(r.jsxs)(L,{children:["~$",(m*b).toFixed(2)]})]}),Object(r.jsx)(q,{children:i?Object(r.jsx)(s.e,{id:"harvest-all",disabled:g.length<=0||t,onClick:k,fullWidth:!0,children:t?o(548,"Collecting EGG"):o(999,"Harvest all (".concat(g.length,")"))}):Object(r.jsx)(C.a,{fullWidth:!0})})]})})};function G(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return G=function(){return e},e}function I(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return I=function(){return e},e}var J=Object(i.e)(s.i)(I()),U=i.e.div(G()),X=function(){var e=Object(u.a)(),n=Object(E.c)(),t=Object(E.b)(Object(w.a)()),c=Object(N.c)(),a=Object(N.g)(),i=n?n.minus(t):new x.a(0),o=Object(B.a)(i),j=a.times(i),b=0,l=a.times(t);Object(N.g)();return c&&c[0]&&c[0].starPerBlock&&(b=new x.a(c[0].starPerBlock).div(new x.a(10).pow(18)).toNumber()),Object(r.jsx)(J,{children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{size:"xl",mb:"24px",children:e(534,"STAR Stats")}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:"STAR Price"}),Object(r.jsx)(T.a,{fontSize:"14px",value:a.toNumber(),decimals:2,prefix:"$"})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:"Maximum Mint"}),Object(r.jsx)(s.C,{bold:!0,fontSize:"14px",children:"3,888,000"})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:"Total Minted"}),n&&Object(r.jsx)(T.a,{fontSize:"14px",value:Object(B.a)(n),decimals:0})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:"Circulating Supply"}),o&&Object(r.jsx)(T.a,{fontSize:"14px",value:o,decimals:0})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:e(538,"Total STAR Burned")}),Object(r.jsx)(T.a,{fontSize:"14px",value:Object(B.a)(t),decimals:0})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:"Burn Value"}),Object(r.jsx)(T.a,{fontSize:"14px",value:Object(B.a)(l),decimals:0,prefix:"$"})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:e(999,"Market Cap")}),Object(r.jsx)(T.a,{fontSize:"14px",value:Object(B.a)(j),decimals:0,prefix:"$"})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(s.C,{fontSize:"14px",children:e(540,"New STAR/block")}),Object(r.jsx)(s.C,{bold:!0,fontSize:"14px",children:b})]})]})})};function _(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return _=function(){return e},e}var K=Object(i.e)(s.i)(_()),Y=function(){var e=Object(u.a)(),n=Object(N.i)();return Object(r.jsx)(K,{children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.a,{value:n.toNumber(),prefix:"$",decimals:2}),Object(r.jsx)(s.C,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},Z=t(804);function ee(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return ne=function(){return e},e}var te=Object(i.e)(s.i)(ne()),re=(i.e.div(ee()),function(){var e=Object(u.a)();return Object(r.jsx)(te,{children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(r.jsx)(Z.a,{dataSource:{sourceType:"profile",screenName:"polygaj"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),ce=t(724),ae=t.n(ce),ie=t(67),oe=t(22);function se(){var e=Object(c.a)(["\n  line-height: 44px;\n"]);return se=function(){return e},e}function ue(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"]);return ue=function(){return e},e}var je=Object(i.e)(s.i)(ue(),(function(e){return e.theme.mediaQueries.lg})),be=Object(i.e)(s.o).attrs({size:"xl"})(se()),le=function(){var e=Object(N.c)(),n=Object(N.g)(),t=Object(N.f)(),c=Object(N.h)(),i=Object(a.useMemo)((function(){var r=e.filter((function(e){return"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken){var r=new g.a(10512e3),a=new g.a(e.starPerBlock||1).times(new g.a(e.poolWeight)).div(new g.a(10).pow(18)).times(r),i=n.times(a),o=new g.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===oe.b.BNB?o=o.times(t):e.quoteTokenSymbol===oe.b.WETH&&(o=o.times(c)),o.comparedTo(0)>0&&(i=i.div(o)),{apy:i}}return null}));return ae()(r)}),[n,t,c,e]);return Object(r.jsx)(je,{children:Object(r.jsx)(ie.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{color:"contrast",size:"lg",children:"Earn up to"}),Object(r.jsx)(be,{color:"secondary",children:i?"".concat(Number(100*i.apy.toNumber()).toFixed(2),"% ","APR"):Object(r.jsx)(s.z,{animation:"pulse",variant:"rect",height:"44px"})}),Object(r.jsxs)(s.n,{justifyContent:"space-between",children:[Object(r.jsx)(s.o,{color:"contrast",size:"lg",children:"in Farms"}),Object(r.jsx)(s.b,{mt:30,color:"primary"})]})]})})})};function fe(){var e=Object(c.a)(["\n  line-height: 44px;\n"]);return fe=function(){return e},e}function de(){var e=Object(c.a)(["\n  background: linear-gradient(#3B4155, #3A3045);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"]);return de=function(){return e},e}var Oe=Object(i.e)(s.i)(de(),(function(e){return e.theme.mediaQueries.lg})),xe=Object(i.e)(s.o).attrs({size:"xl"})(fe()),pe=function(){return Object(r.jsx)(Oe,{children:Object(r.jsx)(ie.c,{exact:!0,activeClassName:"active",to:"/pools",id:"pool-cta",children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{color:"white",size:"lg",children:"Stake"}),Object(r.jsx)(xe,{color:"white",children:"STAR, WETH, WBTC"}),Object(r.jsxs)(s.n,{justifyContent:"space-between",children:[Object(r.jsx)(s.o,{color:"white",size:"lg",children:"in Pools"}),Object(r.jsx)(s.b,{mt:30,color:"white"})]})]})})})};function me(){var e=Object(c.a)(["\n  line-height: 44px;\n"]);return me=function(){return e},e}function he(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"]);return he=function(){return e},e}var ge=Object(i.e)(s.i)(he(),(function(e){return e.theme.mediaQueries.lg})),ve=Object(i.e)(s.o).attrs({size:"xl"})(me()),we=function(){return Object(r.jsx)(ge,{children:Object(r.jsx)(ie.c,{exact:!0,activeClassName:"active",to:"/buy",id:"lottery-pot-cta",children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(ve,{color:"secondary",children:"Buy STAR!"}),Object(r.jsxs)(s.n,{justifyContent:"space-between",children:[Object(r.jsx)(s.o,{color:"contrast",size:"lg"}),Object(r.jsx)(s.b,{mt:30,color:"primary"})]})]})})})};function ke(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 20px;\n  margin-bottom: 40px;\n  "]);return ke=function(){return e},e}var Se=86400,ye=i.e.div(ke()),ze=function(){var e=1635532200-Date.now()/1e3;Math.ceil(e/Se);return Object(r.jsx)(ye,{})};function Ce(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return Te=function(){return e},e}function Re(){var e=Object(c.a)(["\n  margin-bottom: 0px;\n"]);return Re=function(){return e},e}function Ae(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n"]);return Ae=function(){return e},e}function Ne(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return Ne=function(){return e},e}function Ee(){var e=Object(c.a)(["\n  background-image: url('/images/farm-space/astro.png');\n  background-size: 256px;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  min-height: 100%;\n"]);return Ee=function(){return e},e}var Be=Object(i.e)(s.i)(Ee()),Qe=(i.e.div(Ne()),i.e.div(Ae())),Fe=i.e.img(Re()),Pe=(i.e.div(Te(),(function(e){return e.theme.colors.textSubtle})),i.e.div(Ce()),Object(w.a)()),We=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=(n[0],n[1]),c=(Object(O.m)().account,Object(u.a)(),z().filter((function(e){return e.balance.toNumber()>0}))),i=Object(p.a)(c.map((function(e){return e.pid}))).onReward,o=(Object(a.useCallback)(Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,i();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,t(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[i]),Object(a.useCallback)(Object(f.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.ethereum)){e.next=11;break}return e.prev=2,e.next=5,n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:Pe,symbol:"STAR",decimals:"18",image:"/logo.png"}}});case 5:e.sent&&console.log("Token was added"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]));return Object(r.jsx)(Be,{children:Object(r.jsxs)(s.j,{children:[Object(r.jsx)(s.o,{size:"xl",mb:"24px",children:"Add STAR"}),Object(r.jsx)(s.n,{flexDirection:"column",mb:"15px",children:Object(r.jsx)(s.s,{mb:"20px",small:!0,href:"https://explorer-mainnet.maticvigil.com/tokens/".concat(Pe),children:Pe})}),Object(r.jsxs)(Qe,{children:[Object(r.jsx)(Fe,{src:"/images/egg/9.png",alt:"Farm STAR logo",width:60,height:60}),Object(r.jsx)("hr",{}),Object(r.jsxs)(s.e,{onClick:o,size:"sm",children:["+ Add STAR to ",Object(r.jsx)("img",{style:{marginLeft:8},width:16,src:"https://jaguarswap.com/images/tokens/metamask.png",alt:"metamask logo"})]})]})]})})};function He(){var e=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"]);return He=function(){return e},e}function Me(){var e=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return Me=function(){return e},e}function $e(){var e=Object(c.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3ba.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/logo11.jpg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);return $e=function(){return e},e}var De=i.e.div($e(),(function(e){return e.theme.mediaQueries.lg})),Le=Object(i.e)(s.c)(Me(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),qe=Object(i.e)(s.c)(He(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ve=function(){Object(u.a)(),new o.a;return Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(De,{children:[Object(r.jsx)(s.o,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:"StarSeed Exchange"}),Object(r.jsx)(s.C,{as:"h2",children:"Welcome to the future"})]}),Object(r.jsx)(s.o,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:"Time until farming ends"}),Object(r.jsx)(ze,{}),Object(r.jsxs)("div",{children:[Object(r.jsxs)(Le,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(re,{})]}),Object(r.jsxs)(qe,{children:[Object(r.jsx)(le,{}),Object(r.jsx)(pe,{}),Object(r.jsx)(we,{})]}),Object(r.jsxs)(Le,{children:[Object(r.jsx)(X,{}),Object(r.jsx)(Y,{}),Object(r.jsx)(We,{})]})]})]})}}}]);
//# sourceMappingURL=16.dce5f886.chunk.js.map