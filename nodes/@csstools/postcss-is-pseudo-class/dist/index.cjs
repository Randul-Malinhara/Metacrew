"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=e(require("postcss-selector-parser"));function n(e){e&&e.nodes&&e.nodes.sort(((e,s)=>"selector"===e.type&&"selector"===s.type&&e.nodes.length&&s.nodes.length?o(e.nodes[0].value,e.nodes[0].type)-o(s.nodes[0].value,s.nodes[0].type):"selector"===e.type&&e.nodes.length?o(e.nodes[0].value,e.nodes[0].type)-o(s.value,s.type):"selector"===s.type&&s.nodes.length?o(e.value,e.type)-o(s.nodes[0].value,s.nodes[0].type):o(e.value,e.type)-o(s.value,s.type)))}function o(e,s){return"pseudo"===s&&e&&0===e.indexOf("::")?t.pseudoElement:t[s]}const t={universal:0,tag:1,id:2,class:3,attribute:4,selector:5,pseudo:6,pseudoElement:7,string:8,root:9,comment:10};function d(e,o,t){return e.flatMap((e=>{if(-1===e.indexOf(":-csstools-matches")&&-1===e.indexOf(":is"))return e;const d=s.default().astSync(e);return d.walkPseudos((e=>{if(":is"===e.value&&e.nodes&&e.nodes.length&&"selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return e.value=":not",void e.nodes[0].append(s.default.universal());if(":-csstools-matches"===e.value)if(!e.nodes||e.nodes.length){if(1===e.nodes.length&&"selector"===e.nodes[0].type){if(1===e.nodes[0].nodes.length)return void e.replaceWith(e.nodes[0].nodes[0]);if(!e.nodes[0].some((e=>"combinator"===e.type)))return void e.replaceWith(...e.nodes[0].nodes)}1!==d.nodes.length||"selector"!==d.nodes[0].type||1!==d.nodes[0].nodes.length||d.nodes[0].nodes[0]!==e?function(e){return!(!e||!e.nodes||"selector"!==e.type||3!==e.nodes.length||!e.nodes[0]||"pseudo"!==e.nodes[0].type||":-csstools-matches"!==e.nodes[0].value||!e.nodes[1]||"combinator"!==e.nodes[1].type||"+"!==e.nodes[1].value||!e.nodes[2]||"pseudo"!==e.nodes[2].type||":-csstools-matches"!==e.nodes[2].value||!e.nodes[0].nodes||1!==e.nodes[0].nodes.length||"selector"!==e.nodes[0].nodes[0].type||!e.nodes[0].nodes[0].nodes||3!==e.nodes[0].nodes[0].nodes.length||!e.nodes[0].nodes[0].nodes||"combinator"!==e.nodes[0].nodes[0].nodes[1].type||">"!==e.nodes[0].nodes[0].nodes[1].value||!e.nodes[2].nodes||1!==e.nodes[2].nodes.length||"selector"!==e.nodes[2].nodes[0].type||!e.nodes[2].nodes[0].nodes||3!==e.nodes[2].nodes[0].nodes.length||!e.nodes[2].nodes[0].nodes||"combinator"!==e.nodes[2].nodes[0].nodes[1].type||">"!==e.nodes[2].nodes[0].nodes[1].value||(e.nodes[0].nodes[0].insertAfter(e.nodes[0].nodes[0].nodes[0],e.nodes[2].nodes[0].nodes[0].clone()),e.nodes[2].nodes[0].nodes[1].remove(),e.nodes[2].nodes[0].nodes[0].remove(),e.nodes[0].replaceWith(e.nodes[0].nodes[0]),e.nodes[2].replaceWith(e.nodes[2].nodes[0]),0))}(e.parent)||function(e){if(!e||!e.nodes)return!1;if("selector"!==e.type)return!1;if(2!==e.nodes.length)return!1;let s,n;return e.nodes[0]&&"pseudo"===e.nodes[0].type&&":-csstools-matches"===e.nodes[0].value?(s=0,n=1):e.nodes[1]&&"pseudo"===e.nodes[1].type&&":-csstools-matches"===e.nodes[1].value&&(s=1,n=0),!(!s||!e.nodes[n]||"selector"===e.nodes[n].type&&e.nodes[n].some((e=>"combinator"===e.type))||(e.nodes[s].append(e.nodes[n].clone()),e.nodes[s].replaceWith(...e.nodes[s].nodes),e.nodes[n].remove(),0))}(e.parent)||("warning"===o.onComplexSelector&&t(),e.value=":is"):e.replaceWith(...e.nodes[0].nodes)}else e.remove()})),d.walk((e=>{"selector"===e.type&&"nodes"in e&&1===e.nodes.length&&"selector"===e.nodes[0].type&&e.replaceWith(e.nodes[0])})),d.walk((e=>{"nodes"in e&&function(e){if(!e||!e.nodes)return;let o=[];const t=[...e.nodes];for(let e=0;e<t.length+1;e++){const d=t[e];if(d&&"combinator"!==d.type)o.push(d);else{if(o.length>1){const e=s.default.selector({value:""});o[0].replaceWith(e),o.slice(1).forEach((e=>{e.remove()})),o.forEach((s=>{e.append(s)})),n(e),e.replaceWith(...e.nodes)}o=[]}}}(e)})),d.toString()})).filter((e=>!!e))}function l(e){let n=0,o=0,t=0;if("universal"==e.type)return{a:0,b:0,c:0};if("id"===e.type)n+=1;else if("tag"===e.type)t+=1;else if("class"===e.type)o+=1;else if("attribute"===e.type)o+=1;else if("pseudo"===e.type&&0===e.value.indexOf("::"))t+=1;else if("pseudo"===e.type)switch(e.value){case":after":case":before":t+=1;break;case":is":case":has":case":not":if(e.nodes&&e.nodes.length>0){let s={a:0,b:0,c:0};e.nodes.forEach((e=>{const n=l(e);n.a>s.a?s=n:n.a<s.a||(n.b>s.b?s=n:n.b<s.b||n.c>s.c&&(s=n))})),n+=s.a,o+=s.b,t+=s.c}break;case"where":break;case":nth-child":case":nth-last-child":{const d=e.nodes.findIndex((e=>{e.value}));if(d>-1){const r=l(s.default.selector({nodes:e.nodes.slice(d+1),value:""}));n+=r.a,o+=r.b,t+=r.c}else n+=n,o+=o,t+=t}break;default:o+=1}else e.nodes&&e.nodes.length>0&&e.nodes.forEach((e=>{const s=l(e);n+=s.a,o+=s.b,t+=s.c}));return{a:n,b:o,c:t}}function r(e,n,o=0){const t=":not(#"+n.specificityMatchingName+")",d=":not(."+n.specificityMatchingName+")",c=":not("+n.specificityMatchingName+")";return e.flatMap((e=>{if(-1===e.indexOf(":is"))return e;let a=!1;const i=[];if(s.default().astSync(e).walkPseudos((e=>{if(":is"!==e.value||!e.nodes||!e.nodes.length)return;if("selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return;let s=e.parent;for(;s;){if(":is"===s.value&&"pseudo"===s.type)return void(a=!0);s=s.parent}const n=l(e),o=e.sourceIndex,r=o+e.toString().length,u=[];e.nodes.forEach((e=>{const s={start:o,end:r,option:""},a=l(e);let i=e.toString().trim();const p=Math.max(0,n.a-a.a),f=Math.max(0,n.b-a.b),h=Math.max(0,n.c-a.c);for(let e=0;e<p;e++)i+=t;for(let e=0;e<f;e++)i+=d;for(let e=0;e<h;e++)i+=c;s.option=i,u.push(s)})),i.push(u)})),!i.length)return[e];let u=[];return function(...e){const s=[],n=e.length-1;function o(t,d){for(let l=0,r=e[d].length;l<r;l++){const r=t.slice(0);r.push(e[d][l]),d==n?s.push(r):o(r,d+1)}}return o([],0),s}(...i).forEach((s=>{let n="";for(let t=0;t<s.length;t++){var o;const d=s[t];n+=e.substring((null==(o=s[t-1])?void 0:o.end)||0,s[t].start),n+=":-csstools-matches("+d.option+")",t===s.length-1&&(n+=e.substring(s[t].end))}u.push(n)})),a&&o<10&&(u=r(u,n,o+1)),u})).filter((e=>!!e))}const c=e=>{const s={specificityMatchingName:"does-not-exist",...e||{}};return{postcssPlugin:"postcss-is-pseudo-class",Rule(e,{result:n}){if(!e.selector)return;if(-1===e.selector.indexOf(":is"))return;let o=!1;const t=()=>{"warning"===s.onComplexSelector&&(o||(o=!0,e.warn(n,`Complex selectors in '${e.selector}' can not be transformed to an equivalent selector without ':is()'.`)))};try{let n=!1;const o=[],l=d(r(e.selectors,{specificityMatchingName:s.specificityMatchingName}),{onComplexSelector:s.onComplexSelector},t);if(Array.from(new Set(l)).forEach((s=>{e.selectors.indexOf(s)>-1?o.push(s):(e.cloneBefore({selector:s}),n=!0)})),o.length&&n&&e.cloneBefore({selectors:o}),!s.preserve){if(!n)return;e.remove()}}catch(s){if(s.message.indexOf("call stack size exceeded")>-1)throw s;e.warn(n,`Failed to parse selector "${e.selector}"`)}}}};c.postcss=!0,module.exports=c;
