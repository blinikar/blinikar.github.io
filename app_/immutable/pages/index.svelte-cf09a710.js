import{S as D,i as L,s as P,e as f,k as _,t as C,x as J,K as R,c as g,d as r,m as $,a as b,h as O,y as z,b as u,J as o,g as B,z as H,r as I,p as M,C as N}from"../chunks/index-d6d25513.js";import{L as j}from"../chunks/LandingContent-d2e7e87f.js";function U(w){let n,d,e,c,s,y,h,q,S,i,l,E,m,x;return l=new j({props:{type:"manyTexts",texts:w[0],imgSrc:"https://upload.wikimedia.org/wikipedia/commons/3/34/Museum-Enter-6094769.JPG"}}),m=new j({props:{label:"This website fetches slogans from JSON and simulate typings",type:"text"}}),{c(){n=f("meta"),d=_(),e=f("div"),c=f("h1"),s=C("Welcome to Yegor Blinov's website"),y=_(),h=f("p"),q=C("This website built using svelte"),S=_(),i=f("div"),J(l.$$.fragment),E=_(),J(m.$$.fragment),this.h()},l(t){const p=R('[data-svelte="svelte-t32ptj"]',document.head);n=g(p,"META",{name:!0,content:!0}),p.forEach(r),d=$(t),e=g(t,"DIV",{class:!0});var a=b(e);c=g(a,"H1",{class:!0});var k=b(c);s=O(k,"Welcome to Yegor Blinov's website"),k.forEach(r),y=$(a),h=g(a,"P",{class:!0});var T=b(h);q=O(T,"This website built using svelte"),T.forEach(r),S=$(a),i=g(a,"DIV",{class:!0});var v=b(i);z(l.$$.fragment,v),E=$(v),z(m.$$.fragment,v),v.forEach(r),a.forEach(r),this.h()},h(){document.title="Home",u(n,"name","description"),u(n,"content","Svelte demo app"),u(c,"class","svelte-1qtpt7x"),u(h,"class","svelte-1qtpt7x"),u(i,"class","main-content svelte-1qtpt7x"),u(e,"class","content svelte-1qtpt7x")},m(t,p){o(document.head,n),B(t,d,p),B(t,e,p),o(e,c),o(c,s),o(e,y),o(e,h),o(h,q),o(e,S),o(e,i),H(l,i,null),o(i,E),H(m,i,null),x=!0},p(t,[p]){const a={};p&1&&(a.texts=t[0]),l.$set(a)},i(t){x||(I(l.$$.fragment,t),I(m.$$.fragment,t),x=!0)},o(t){M(l.$$.fragment,t),M(m.$$.fragment,t),x=!1},d(t){r(n),t&&r(d),t&&r(e),N(l),N(m)}}}const A=!0;function V(w,n,d){let e;return(()=>{fetch("/slogans.json").then(s=>s.text()).then(s=>JSON.parse(s)).then(s=>{d(0,e=s.slogans)}).catch(()=>{})})(),[e]}class F extends D{constructor(n){super(),L(this,n,V,U,P,{})}}export{F as default,A as prerender};