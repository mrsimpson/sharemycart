/*! For license information please see 88.2580656a.chunk.js.LICENSE.txt */
(this["webpackJsonpshare-my-cart"]=this["webpackJsonpshare-my-cart"]||[]).push([[88],{242:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return C}));var n=r(33),o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),a=new RegExp("(-shadowcssslotted"+o,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,l=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,e){var r=x(t),n=0;return r.escapedString.replace(m,(function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{%BLOCK%")&&(o=r.blocks[n++],c=c.substring("%BLOCK%".length+1),s="{");var a={selector:t,content:o},i=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(i.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(i.content).concat(c)}))},x=function(t){for(var e=t.split(v),r=[],n=[],o=0,c=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(n.push(c.join("")),r.push("%BLOCK%"),c=[]),r.push(a)),"{"===a&&o++}return c.length>0&&(n.push(c.join("")),r.push("%BLOCK%")),{escapedString:r.join(""),blocks:n}},b=function(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var o=e[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(r("-shadowcsshost-no-combinator",a,e[3]))}return c.join(",")}return"-shadowcsshost-no-combinator"+e[3]}))},_=function(t,e,r){return t+e.replace("-shadowcsshost","")+r},O=function(t,e,r){return e.indexOf("-shadowcsshost")>-1?_(t,e,r):t+e+r+", "+e+" "+t+r},S=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},W=function(t,e,r){for(var n,o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,e,r){if(h.lastIndex=0,h.test(t)){var n=".".concat(r);return t.replace(i,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,o){return e+n+r+o}))})).replace(h,n+" ")}return e+" "+t}(t,e,r);else{var c=t.replace(h,"");if(c.length>0){var s=c.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+o+s[2]+s[3])}}return n},s=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-".concat(r,"__");return e.push(n),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var c="__ph-".concat(r,"__");return e.push(o),r++,n+c})),placeholders:e}}(t),a="",u=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=l.exec(t));){var f=n[1],d=t.slice(u,n.index).trim(),g=(p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?c(d):d;a+="".concat(g," ").concat(f," "),u=l.lastIndex}var m,v=t.substring(u);return a+=(p=p||v.indexOf("-shadowcsshost-no-combinator")>-1)?c(v):v,m=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return m[+e]}))},j=function t(e,r,n,o,c){return w(e,(function(e){var c=e.selector,s=e.content;return"@"!==e.selector[0]?c=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():S(t,e)?W(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,o):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,r,n,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}}))},k=function(t,e,r,n,o){var i=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(a,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){for(var c=e[2].trim(),s=e[3],a=r+c+s,i="",u=e[4]-1;u>=0;u--){var h=e[5][u];if("}"===h||","===h)break;i=h+i}var l=i+a,p="".concat(i.trimRight()).concat(a.trim());if(l.trim()!==p.trim()){var f="".concat(p,", ").concat(l);n.push({orgSelector:l,updatedSelector:f})}return a}return"-shadowcsshost-no-combinator"+e[3]})),{selectors:n,cssText:t}}(t=function(t){return b(t,s,O)}(t=function(t){return b(t,c,_)}(t=t.replace(f,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(p,"-shadowcssslotted"))),n);return t=function(t){return u.reduce((function(t,e){return t.replace(e," ")}),t)}(t=i.cssText),e&&(t=j(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},C=function(t,e,r){var o=e+"-h",c=e+"-s",s=t.match(g)||[];t=function(t){return t.replace(d,"")}(t);var a=[];if(r){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,i),t):t}))}var u=k(t,e,o,c);return t=[u.cssText].concat(Object(n.a)(s)).join("\n"),r&&a.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=88.2580656a.chunk.js.map