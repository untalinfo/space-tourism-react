import{t as W,r as m,_ as K,b as q,u as J,c as X,a as Y,j as u,d as G,F as j,R as Q}from"./index-36407c54.js";import{A as Z,U as V}from"./redirect-route-1c03b53c.js";import{u as ee}from"./useSelector-36356bbc.js";const ne="/example",te="/example-public";function re(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var L={};function S(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&L[e[0]]||(typeof e[0]=="string"&&(L[e[0]]=new Date),re.apply(void 0,e))}var B=function(e,t){return function(){if(e.isInitialized)t();else{var r=function o(){setTimeout(function(){e.off("initialized",o)},0),t()};e.on("initialized",r)}}};function R(n,e,t){n.loadNamespaces(e,B(n,t))}function _(n,e,t,r){typeof t=="string"&&(t=[t]),t.forEach(function(o){n.options.ns.indexOf(o)<0&&n.options.ns.push(o)}),n.loadLanguages(e,B(n,r))}function ae(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.languages[0],o=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(c,l){var h=e.services.backendConnector.state["".concat(c,"|").concat(l)];return h===-1||h===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(r,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,n)&&(!o||a(s,n)))}function oe(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return S("i18n.languages were undefined or empty",e.languages),!0;var r=e.options.ignoreJSONStructure!==void 0;return r?e.hasLoadedNamespace(n,{lng:t.lng,precheck:function(s,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!a(s.isLanguageChangingTo,n))return!1}}):ae(n,e,t)}var ie=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,se={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ue=function(e){return se[e]},ce=function(e){return e.replace(ie,ue)},le={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:ce};function fe(){return le}var pe;function de(){return pe}function ge(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function k(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,W(r.key),r)}}function me(n,e,t){return e&&k(n.prototype,e),t&&k(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}var he=m.createContext(),ye=function(){function n(){ge(this,n),this.usedNamespaces={}}return me(n,[{key:"addUsedNamespaces",value:function(t){var r=this;t.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();function ve(n){if(Array.isArray(n))return n}function be(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,s,a,d=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=s.call(t)).done)&&(d.push(r.value),d.length!==e);c=!0);}catch(h){l=!0,o=h}finally{try{if(!c&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return d}}function U(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function xe(n,e){if(n){if(typeof n=="string")return U(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(n,e):void 0}}function Ne(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function we(n,e){return ve(n)||be(n,e)||xe(n,e)||Ne()}function F(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?F(Object(t),!0).forEach(function(r){K(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Oe=function(e,t){var r=m.useRef();return m.useEffect(function(){r.current=t?r.current:e},[e,t]),r.current};function Ce(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,r=m.useContext(he)||{},o=r.i18n,s=r.defaultNS,a=t||o||de();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new ye),!a){S("You will need to pass in an i18next instance by using initReactI18next");var d=function(g,f){return typeof f=="string"?f:f&&q(f)==="object"&&typeof f.defaultValue=="string"?f.defaultValue:Array.isArray(g)?g[g.length-1]:g},c=[d,{},!1];return c.t=d,c.i18n={},c.ready=!1,c}a.options.react&&a.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=C(C(C({},fe()),a.options.react),e),h=l.useSuspense,I=l.keyPrefix,i=n||s||a.options&&a.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(i);var v=(a.isInitialized||a.initializedStoreOnce)&&i.every(function(p){return oe(p,a,l)});function b(){return a.getFixedT(e.lng||null,l.nsMode==="fallback"?i:i[0],I)}var D=m.useState(b),E=we(D,2),P=E[0],x=E[1],N=i.join();e.lng&&(N="".concat(e.lng).concat(N));var A=Oe(N),y=m.useRef(!0);m.useEffect(function(){var p=l.bindI18n,g=l.bindI18nStore;y.current=!0,!v&&!h&&(e.lng?_(a,e.lng,i,function(){y.current&&x(b)}):R(a,i,function(){y.current&&x(b)})),v&&A&&A!==N&&y.current&&x(b);function f(){y.current&&x(b)}return p&&a&&a.on(p,f),g&&a&&a.store.on(g,f),function(){y.current=!1,p&&a&&p.split(" ").forEach(function(O){return a.off(O,f)}),g&&a&&g.split(" ").forEach(function(O){return a.store.off(O,f)})}},[a,N]);var T=m.useRef(!0);m.useEffect(function(){y.current&&!T.current&&x(b),T.current=!1},[a,I]);var w=[P,a,v];if(w.t=P,w.i18n=a,w.ready=v,v||!v&&!h)return w;throw new Promise(function(p){e.lng?_(a,e.lng,i,function(){return p()}):R(a,i,function(){return p()})})}const M="welcome_to_react",H="subtitle",$="EXAMPLE_DOMAIN",z=()=>{const{t:n}=Ce(),e=J(),t=X(),r=ee(a=>a.example.todos),o=()=>{e(G("Todo ".concat(r.length+1)))},s=()=>{if(t.location.pathname==="/example"){t.push("/example-public");return}t.push("/example")};return Y("div",{className:"example-page",children:[u("h1",{children:t.location.pathname}),u("h2",{children:n("".concat(M),{ns:$})}),";",u("h3",{className:"example-page",children:n("".concat(H),{ns:$})}),u("br",{}),u("h2",{children:n("".concat(M))}),u("h3",{className:"example-page",children:n("".concat(H),{language:"IDIOMA"})}),u("button",{onClick:s,children:"Text router"}),u("button",{onClick:o,children:"Add next todo"}),r.map((a,d)=>u("div",{className:"todo",children:a},d)),u("p",{children:"hola como estan"})]})},Pe={layout:Z,router:[{path:ne,page:z,routeComponent:V,layout:({children:n})=>u(j,{children:n})},{path:te,page:z,routeComponent:Q,layout:({children:n})=>u(j,{children:n})}]};export{Pe as default};