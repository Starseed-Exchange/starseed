(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[17],{669:function(n,e,t){"use strict";var r=t(0),i=t(168),c=/%(.*?)%/,o=function(n,e,t){var r=n.find((function(n){return n.data.stringId===e}));if(r){var i=r.data.text;return i.includes("%")?function(n,e){var t=c.exec(n)[0],r=e.split(" ")[0];return n.replace(t,r)}(i,t):i}return t};e.a=function(){var n=Object(r.useContext)(i.a).translations;return function(e,t){return"error"===n[0]?t:n.length>0?o(n,e,t):t}}},697:function(n,e,t){"use strict";t.d(e,"a",(function(){return r.a})),t.d(e,"c",(function(){return i.a})),t.d(e,"b",(function(){return c}));var r=t(59),i=t(39),c=[];r.a.filter((function(n){return n.isCommunity})).map((function(n){return n.tokenSymbol}))},817:function(n,e,t){"use strict";t.r(e);var r=t(12),i=(t(0),t(29)),c=t(175),o=t(60),s=t(3),a=t(67),u=t(49);function l(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]);return l=function(){return n},n}var d=s.e.div(l()),j=function(){var n=Object(i.g)(),e=n.url,t=n.isExact;return Object(r.jsx)(d,{children:Object(r.jsxs)(u.f,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(u.g,{as:a.b,to:"".concat(e),children:"Current IDO"}),Object(r.jsx)(u.g,{as:a.b,to:"".concat(e,"/history"),children:"Past IDOs"})]})})},b=t(669);function f(){var n=Object(o.a)(["\n  padding-bottom: 24px;\n  padding-top: 24px;\n"]);return f=function(){return n},n}function h(){var n=Object(o.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"]);return h=function(){return n},n}function m(){var n=Object(o.a)(["\n  color: ",";\n  text-align: center;\n"]);return m=function(){return n},n}var x=Object(s.e)(u.o).attrs({as:"h1",size:"xl"})(m(),(function(n){return n.theme.colors.primary})),p=Object(s.e)(u.C)(h(),(function(n){return n.theme.colors.secondary})),O=s.e.div(f()),g=function(){Object(b.a)();return Object(r.jsx)(O,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(x,{children:"Initial Dex Offering"}),Object(r.jsx)(p,{children:"Invest in Innovative Projects"})]})})},v=t(697);function y(){var n=Object(o.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"]);return y=function(){return n},n}var w=Object(s.e)(u.o).attrs({size:"lg"})(y(),(function(n){return n.theme.colors.secondary}));function C(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  \n  grid-column: span 12 !important;\n\n  "," {\n    grid-column: span 12 !important;\n  }\n\n  "," {\n    grid-column: span 12 !important;\n  }\n\n  "," {\n    grid-column: span 12 !important;\n  }\n"]);return C=function(){return n},n}function I(){var n=Object(o.a)(["\n  align-items: start;\n  margin-bottom: 20px;\n  margin-top: 30px;\n\n  & > div {\n    grid-column: span 7;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 7;\n    }\n  }\n"]);return I=function(){return n},n}function k(){var n=Object(o.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"]);return k=function(){return n},n}function D(){var n=Object(o.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"]);return D=function(){return n},n}var S=Object(s.e)(u.c)(D(),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.sm})),Q=s.e.ul(k(),(function(n){return n.theme.colors.text})),A=Object(s.e)(u.c)(I(),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),z=s.e.div(C(),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),P=(v.b.find((function(n){return n.isActive})),function(){var n=Object(b.a)();return Object(r.jsxs)("div",{children:[Object(r.jsx)(A,{children:Object(r.jsx)(z,{children:Object(r.jsx)(u.C,{color:"secondary",children:"Disclaimer: Crypto / Defi markets and projects are considered high risk investments. Always do your own research (DYOR) into any project that you invest. You are responsible for your own investing strategy, and should manage your own risk. Only Invest what you can afford to lose!"})})}),Object(r.jsxs)(S,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{as:"h2",children:n(592,"How to take part")}),Object(r.jsxs)(u.o,{mb:"16px",children:[n(594,"Before Sale"),":"]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)("li",{children:"Buy MATIC"}),Object(r.jsx)("li",{children:"Wait for the Sale to start"})]}),Object(r.jsx)(u.n,{mb:"16px",children:Object(r.jsx)(u.s,{href:"https://polygaj.finance/buy",mr:"16px",children:"Buy MATIC"})}),Object(r.jsxs)(u.o,{mb:"16px",children:[n(600,"During Sale"),":"]}),Object(r.jsx)(Q,{children:Object(r.jsx)("li",{children:"While the sale is live, commit your MATIC tokens to buy the tokens"})}),Object(r.jsxs)(u.o,{mb:"16px",children:[n(604,"After Sale"),":"]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)("li",{children:"Claim the tokens you bought, along with any unspent funds."}),Object(r.jsx)("li",{children:n(608,"Done!")})]})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{as:"h2",children:"Want to launch your own IDO?"}),Object(r.jsx)(u.C,{mb:3,children:"Launch your project with StarSeed, Polygon Network\u2019s most transparent and active DeFi Platform"}),Object(r.jsx)(u.e,{as:"a",href:"https://t.me/polygajhead",external:!0,children:"Contact Us"})]})})]})]})});e.default=function(){Object(i.g)().path;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),Object(r.jsxs)(c.a,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(P,{})]})]})}}}]);
//# sourceMappingURL=17.4a201991.chunk.js.map