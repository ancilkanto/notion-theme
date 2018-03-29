// 1.SNAP.SVG.MIN
// 2.CLASSIE
// 3.SVGLOADER








// 1.SNAP.SVG.MIN

// Snap.svg 0.2.0
//
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2013-12-23
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){var c=function(b){var c={},d=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},e=Array.isArray||function(a){return a instanceof Array||"[object Array]"==Object.prototype.toString.call(a)},f=0,g="M"+(+new Date).toString(36),h=function(){return g+(f++).toString(36)},i=Date.now||function(){return+new Date},j=function(a){var b=this;if(null==a)return b.s;var c=b.s-a;b.b+=b.dur*c,b.B+=b.dur*c,b.s=a},k=function(a){var b=this;return null==a?b.spd:(b.spd=a,void 0)},l=function(a){var b=this;return null==a?b.dur:(b.s=b.s*a/b.dur,b.dur=a,void 0)},m=function(){var a=this;delete c[a.id],b("mina.stop."+a.id,a)},n=function(){var a=this;a.pdif||(delete c[a.id],a.pdif=a.get()-a.b)},o=function(){var a=this;a.pdif&&(a.b=a.get()-a.pdif,delete a.pdif,c[a.id]=a)},p=function(){var a=0;for(var f in c)if(c.hasOwnProperty(f)){var g,h=c[f],i=h.get();if(a++,h.s=(i-h.b)/(h.dur/h.spd),h.s>=1&&(delete c[f],h.s=1,a--,function(a){setTimeout(function(){b("mina.finish."+a.id,a)})}(h)),e(h.start)){g=[];for(var j=0,k=h.start.length;k>j;j++)g[j]=+h.start[j]+(h.end[j]-h.start[j])*h.easing(h.s)}else g=+h.start+(h.end-h.start)*h.easing(h.s);h.set(g)}a&&d(p)},q=function(a,b,e,f,g,i,r){var s={id:h(),start:a,end:b,b:e,s:0,dur:f-e,spd:1,get:g,set:i,easing:r||q.linear,status:j,speed:k,duration:l,stop:m,pause:n,resume:o};c[s.id]=s;var t,u=0;for(t in c)if(c.hasOwnProperty(t)&&(u++,2==u))break;return 1==u&&d(p),s};return q.time=i,q.getById=function(a){return c[a]||null},q.linear=function(a){return a},q.easeout=function(a){return Math.pow(a,1.7)},q.easein=function(a){return Math.pow(a,.48)},q.easeinout=function(a){if(1==a)return 1;if(0==a)return 0;var b=.48-a/1.04,c=Math.sqrt(.1734+b*b),d=c-b,e=Math.pow(Math.abs(d),1/3)*(0>d?-1:1),f=-c-b,g=Math.pow(Math.abs(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},q.backin=function(a){if(1==a)return 1;var b=1.70158;return a*a*((b+1)*a-b)},q.backout=function(a){if(0==a)return 0;a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},q.elastic=function(a){return a==!!a?a:Math.pow(2,-10*a)*Math.sin((a-.075)*2*Math.PI/.3)+1},q.bounce=function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b},a.mina=q,q}("undefined"==typeof b?function(){}:b),d=function(){function d(a,b){if(a){if(a.tagName)return z(a);if(a instanceof u)return a;if(null==b)return a=I.doc.querySelector(a),z(a)}return a=null==a?"100%":a,b=null==b?"100%":b,new y(a,b)}function e(a,b){if(b){if("string"==typeof a&&(a=e(a)),"string"==typeof b)return"xlink:"==b.substring(0,6)?a.getAttributeNS(fb,b.substring(6)):"xml:"==b.substring(0,4)?a.getAttributeNS(gb,b.substring(4)):a.getAttribute(b);for(var c in b)if(b[J](c)){var d=K(b[c]);d?"xlink:"==c.substring(0,6)?a.setAttributeNS(fb,c.substring(6),d):"xml:"==c.substring(0,4)?a.setAttributeNS(gb,c.substring(4),d):a.setAttribute(c,d):a.removeAttribute(c)}}else a=I.doc.createElementNS(gb,a);return a}function f(a,b){return b=K.prototype.toLowerCase.call(b),"finite"==b?isFinite(a):"array"==b&&(a instanceof Array||Array.isArray&&Array.isArray(a))?!0:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||U.call(a).slice(8,-1).toLowerCase()==b}function h(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[J](c)&&(b[c]=h(a[c]));return b}function i(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function j(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),g=d.cache=d.cache||{},h=d.count=d.count||[];return g[J](f)?(i(h,f),c?c(g[f]):g[f]):(h.length>=1e3&&delete g[h.shift()],h.push(f),g[f]=a.apply(b,e),c?c(g[f]):g[f])}return d}function k(a,b,c,d,e,f){if(null==e){var g=a-c,h=b-d;return g||h?(180+180*N.atan2(-h,-g)/R+360)%360:0}return k(a,b,e,f)-k(c,d,e,f)}function l(a){return a%360*R/180}function m(a){return 180*a/R%360}function n(a,b,c,d,e,f){return null==b&&"[object SVGMatrix]"==U.call(a)?(this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,this.f=a.f,void 0):(null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0),void 0)}function o(a){var b=[];return a=a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(a,c,d){return d=d.split(/\s*,\s*|\s+/),"rotate"==c&&1==d.length&&d.push(0,0),"scale"==c&&(2==d.length&&d.push(0,0),1==d.length&&d.push(d[0],0,0)),"skewX"==c?b.push(["m",1,0,N.tan(l(d[0])),1,0,0]):"skewY"==c?b.push(["m",1,N.tan(l(d[0])),0,1,0,0]):b.push([c.charAt(0)].concat(d)),a}),b}function p(a,b){var c=qb(a),d=new n;if(c)for(var e=0,f=c.length;f>e;e++){var g,h,i,j,k,l=c[e],m=l.length,o=K(l[0]).toLowerCase(),p=l[0]!=o,q=p?d.invert():0;"t"==o&&2==m?d.translate(l[1],0):"t"==o&&3==m?p?(g=q.x(0,0),h=q.y(0,0),i=q.x(l[1],l[2]),j=q.y(l[1],l[2]),d.translate(i-g,j-h)):d.translate(l[1],l[2]):"r"==o?2==m?(k=k||b,d.rotate(l[1],k.x+k.width/2,k.y+k.height/2)):4==m&&(p?(i=q.x(l[2],l[3]),j=q.y(l[2],l[3]),d.rotate(l[1],i,j)):d.rotate(l[1],l[2],l[3])):"s"==o?2==m||3==m?(k=k||b,d.scale(l[1],l[m-1],k.x+k.width/2,k.y+k.height/2)):4==m?p?(i=q.x(l[2],l[3]),j=q.y(l[2],l[3]),d.scale(l[1],l[1],i,j)):d.scale(l[1],l[1],l[2],l[3]):5==m&&(p?(i=q.x(l[3],l[4]),j=q.y(l[3],l[4]),d.scale(l[1],l[2],i,j)):d.scale(l[1],l[2],l[3],l[4])):"m"==o&&7==m&&d.add(l[1],l[2],l[3],l[4],l[5],l[6])}return d}function q(a,b){if(null==b){var c=!0;if(b="linearGradient"==a.type||"radialGradient"==a.type?a.node.getAttribute("gradientTransform"):"pattern"==a.type?a.node.getAttribute("patternTransform"):a.node.getAttribute("transform"),!b)return new n;b=o(b)}else b=d._.rgTransform.test(b)?K(b).replace(/\.{3}|\u2026/g,a._.transform||S):o(b),f(b,"array")&&(b=d.path?d.path.toString.call(b):K(b)),a._.transform=b;var e=p(b,a.getBBox(1));return c?e:(a.matrix=e,void 0)}function r(a){var b=d._.someDefs;if(b&&rb(b.ownerDocument.documentElement,b))return b;var c=a.node.ownerSVGElement&&z(a.node.ownerSVGElement)||a.node.parentNode&&z(a.node.parentNode)||d.select("svg")||d(0,0),e=c.select("defs"),f=null==e?!1:e.node;return f||(f=x("defs",c.node).node),d._.someDefs=f,f}function s(a,b,c){function d(a){return null==a?S:a==+a?a:(e(j,{width:a}),j.getBBox().width)}function f(a){return null==a?S:a==+a?a:(e(j,{height:a}),j.getBBox().height)}function g(d,e){null==b?i[d]=e(a.attr(d)):d==b&&(i=e(null==c?a.attr(d):c))}var h=r(a),i={},j=h.querySelector(".svg---mgr");switch(j||(j=e("rect"),e(j,{width:10,height:10,"class":"svg---mgr"}),h.appendChild(j)),a.type){case"rect":g("rx",d),g("ry",f);case"image":g("width",d),g("height",f);case"text":g("x",d),g("y",f);break;case"circle":g("cx",d),g("cy",f),g("r",d);break;case"ellipse":g("cx",d),g("cy",f),g("rx",d),g("ry",f);break;case"line":g("x1",d),g("x2",d),g("y1",f),g("y2",f);break;case"marker":g("refX",d),g("markerWidth",d),g("refY",f),g("markerHeight",f);break;case"radialGradient":g("fx",d),g("fy",f);break;case"tspan":g("dx",d),g("dy",f);break;default:g(b,d)}return i}function t(a){f(a,"array")||(a=Array.prototype.slice.call(arguments,0));for(var b=0,c=0,d=this.node;this[b];)delete this[b++];for(b=0;b<a.length;b++)"set"==a[b].type?a[b].forEach(function(a){d.appendChild(a.node)}):d.appendChild(a[b].node);var e=d.childNodes;for(b=0;b<e.length;b++)this[c++]=z(e[b]);return this}function u(a){if(a.snap in hb)return hb[a.snap];var b,c=this.id=eb();try{b=a.ownerSVGElement}catch(d){}if(this.node=a,b&&(this.paper=new y(b)),this.type=a.tagName,this.anims={},this._={transform:[]},a.snap=c,hb[c]=this,"g"==this.type){this.add=t;for(var e in y.prototype)y.prototype[J](e)&&(this[e]=y.prototype[e])}}function v(a){for(var b,c=0,d=a.length;d>c;c++)if(b=b||a[c])return b}function w(a){this.node=a}function x(a,b){var c=e(a);b.appendChild(c);var d=z(c);return d.type=a,d}function y(a,b){var c,d,f,g=y.prototype;if(a&&"svg"==a.tagName){if(a.snap in hb)return hb[a.snap];c=new u(a),d=a.getElementsByTagName("desc")[0],f=a.getElementsByTagName("defs")[0],d||(d=e("desc"),d.appendChild(I.doc.createTextNode("Created with Snap")),c.node.appendChild(d)),f||(f=e("defs"),c.node.appendChild(f)),c.defs=f;for(var h in g)g[J](h)&&(c[h]=g[h]);c.paper=c.root=c}else c=x("svg",I.doc.body),e(c.node,{height:b,version:1.1,width:a,xmlns:gb});return c}function z(a){return a?a instanceof u||a instanceof w?a:"svg"==a.tagName?new y(a):new u(a):a}function A(){return this.selectAll("stop")}function B(a,b){var c=e("stop"),f={offset:+b+"%"};return a=d.color(a),f["stop-color"]=a.hex,a.opacity<1&&(f["stop-opacity"]=a.opacity),e(c,f),this.node.appendChild(c),this}function C(){if("linearGradient"==this.type){var a=e(this.node,"x1")||0,b=e(this.node,"x2")||1,c=e(this.node,"y1")||0,f=e(this.node,"y2")||0;return d._.box(a,c,N.abs(b-a),N.abs(f-c))}var g=this.node.cx||.5,h=this.node.cy||.5,i=this.node.r||0;return d._.box(g-i,h-i,2*i,2*i)}function D(a,c){function d(a,b){for(var c=(b-j)/(a-k),d=k;a>d;d++)h[d].offset=+(+j+c*(d-k)).toFixed(2);k=a,j=b}var f,g=v(b("snap.util.grad.parse",null,c));if(!g)return null;g.params.unshift(a),f="l"==g.type.toLowerCase()?E.apply(0,g.params):F.apply(0,g.params),g.type!=g.type.toLowerCase()&&e(f.node,{gradientUnits:"userSpaceOnUse"});var h=g.stops,i=h.length,j=0,k=0;i--;for(var l=0;i>l;l++)"offset"in h[l]&&d(l,h[l].offset);for(h[i].offset=h[i].offset||100,d(i,h[i].offset),l=0;i>=l;l++){var m=h[l];f.addStop(m.color,m.offset)}return f}function E(a,b,c,d,f){var g=x("linearGradient",a);return g.stops=A,g.addStop=B,g.getBBox=C,null!=b&&e(g.node,{x1:b,y1:c,x2:d,y2:f}),g}function F(a,b,c,d,f,g){var h=x("radialGradient",a);return h.stops=A,h.addStop=B,h.getBBox=C,null!=b&&e(h.node,{cx:b,cy:c,r:d}),null!=f&&null!=g&&e(h.node,{fx:f,fy:g}),h}function G(a){return function(c){if(b.stop(),c instanceof w&&1==c.node.childNodes.length&&("radialGradient"==c.node.firstChild.tagName||"linearGradient"==c.node.firstChild.tagName||"pattern"==c.node.firstChild.tagName)&&(c=c.node.firstChild,r(this).appendChild(c),c=z(c)),c instanceof u)if("radialGradient"==c.type||"linearGradient"==c.type||"pattern"==c.type){c.node.id||e(c.node,{id:c.id});var f=ib(c.node.id)}else f=c.attr(a);else if(f=d.color(c),f.error){var g=D(r(this),c);g?(g.node.id||e(g.node,{id:g.id}),f=ib(g.node.id)):f=c}else f=K(f);var h={};h[a]=f,e(this.node,h),this.node.style[a]=S}}function H(a){for(var b=[],c=a.childNodes,d=0,e=c.length;e>d;d++){var f=c[d];3==f.nodeType&&b.push(f.nodeValue),"tspan"==f.tagName&&(1==f.childNodes.length&&3==f.firstChild.nodeType?b.push(f.firstChild.nodeValue):b.push(H(f)))}return b}d.version="0.2.0",d.toString=function(){return"Snap v"+this.version},d._={};var I={win:a,doc:a.document};d._.glob=I;var J="hasOwnProperty",K=String,L=parseFloat,M=parseInt,N=Math,O=N.max,P=N.min,Q=N.abs,R=(N.pow,N.PI),S=(N.round,""),T=" ",U=Object.prototype.toString,V=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,W=/^url\(#?([^)]+)\)$/,X="	\n\f\r   ᠎             　\u2028\u2029",Y=new RegExp("[,"+X+"]+"),Z=(new RegExp("["+X+"]","g"),new RegExp("["+X+"]*,["+X+"]*")),$={hs:1,rg:1},_=new RegExp("([a-z])["+X+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+X+"]*,?["+X+"]*)+)","ig"),ab=new RegExp("([rstm])["+X+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+X+"]*,?["+X+"]*)+)","ig"),bb=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+X+"]*,?["+X+"]*","ig"),cb=0,db="S"+(+new Date).toString(36),eb=function(){return db+(cb++).toString(36)},fb="http://www.w3.org/1999/xlink",gb="http://www.w3.org/2000/svg",hb={},ib=d.url=function(a){return"url('#"+a+"')"};d._.$=e,d._.id=eb,d.format=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return K(b).replace(a,function(a,b){return c(a,b,d)})}}();var jb=function(){function a(){this.parentNode.removeChild(this)}return function(b,c){var d=I.doc.createElement("img"),e=I.doc.body;d.style.cssText="position:absolute;left:-9999em;top:-9999em",d.onload=function(){c.call(d),d.onload=d.onerror=null,e.removeChild(d)},d.onerror=a,e.appendChild(d),d.src=b}}();d._.clone=h,d._.cacher=j,d.rad=l,d.deg=m,d.angle=k,d.is=f,d.snapTo=function(a,b,c){if(c=f(c,"finite")?c:10,f(a,"array")){for(var d=a.length;d--;)if(Q(a[d]-b)<=c)return a[d]}else{a=+a;var e=b%a;if(c>e)return b-e;if(e>a-c)return b-e+a}return b},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function c(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof n&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}return this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2],this},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new n(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){return this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){return null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d),this},a.rotate=function(a,b,c){a=l(a),b=b||0,c=c||0;var d=+N.cos(a).toFixed(9),e=+N.sin(a).toFixed(9);return this.add(d,e,-e,d,b,c),this.add(1,0,0,1,-b,-c)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[K.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var d=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(d[0])),c(d[0]),a.shear=d[0][0]*d[1][0]+d[0][1]*d[1][1],d[1]=[d[1][0]-d[0][0]*a.shear,d[1][1]-d[0][1]*a.shear],a.scaley=N.sqrt(b(d[1])),c(d[1]),a.shear/=a.scaley;var e=-d[0][1],f=d[1][1];return 0>f?(a.rotate=m(N.acos(f)),0>e&&(a.rotate=360-a.rotate)):a.rotate=m(N.asin(e)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this.split();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[+b.dx.toFixed(4),+b.dy.toFixed(4)]:S)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:S)+(b.rotate?"r"+[+b.rotate.toFixed(4),0,0]:S)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(n.prototype),d.Matrix=n,d.getRGB=j(function(a){if(!a||(a=K(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:nb};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:nb};if(!($[J](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=kb(a)),!a)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:nb};var b,c,e,g,h,i,j=a.match(V);return j?(j[2]&&(e=M(j[2].substring(5),16),c=M(j[2].substring(3,5),16),b=M(j[2].substring(1,3),16)),j[3]&&(e=M((h=j[3].charAt(3))+h,16),c=M((h=j[3].charAt(2))+h,16),b=M((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4].split(Z),b=L(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),c=L(i[1]),"%"==i[1].slice(-1)&&(c*=2.55),e=L(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=L(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5].split(Z),b=L(i[0]),"%"==i[0].slice(-1)&&(b/=100),c=L(i[1]),"%"==i[1].slice(-1)&&(c/=100),e=L(i[2]),"%"==i[2].slice(-1)&&(e/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=L(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),d.hsb2rgb(b,c,e,g)):j[6]?(i=j[6].split(Z),b=L(i[0]),"%"==i[0].slice(-1)&&(b/=100),c=L(i[1]),"%"==i[1].slice(-1)&&(c/=100),e=L(i[2]),"%"==i[2].slice(-1)&&(e/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=L(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),d.hsl2rgb(b,c,e,g)):(b=P(N.round(b),255),c=P(N.round(c),255),e=P(N.round(e),255),g=P(O(g,0),1),j={r:b,g:c,b:e,toString:nb},j.hex="#"+(16777216|e|c<<8|b<<16).toString(16).slice(1),j.opacity=f(g,"finite")?g:1,j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:nb}},d),d.hsb=j(function(a,b,c){return d.hsb2rgb(a,b,c).hex}),d.hsl=j(function(a,b,c){return d.hsl2rgb(a,b,c).hex}),d.rgb=j(function(a,b,c,d){if(f(d,"finite")){var e=N.round;return"rgba("+[e(a),e(b),e(c),+d.toFixed(2)]+")"}return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)});var kb=function(a){var b=I.doc.getElementsByTagName("head")[0],c="rgb(255, 0, 0)";return kb=j(function(a){if("red"==a.toLowerCase())return c;b.style.color=c,b.style.color=a;var d=I.doc.defaultView.getComputedStyle(b,S).getPropertyValue("color");return d==c?null:d}),kb(a)},lb=function(){return"hsb("+[this.h,this.s,this.b]+")"},mb=function(){return"hsl("+[this.h,this.s,this.l]+")"},nb=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},ob=function(a,b,c){if(null==b&&f(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(c=a.b,b=a.g,a=a.r),null==b&&f(a,string)){var e=d.getRGB(a);a=e.r,b=e.g,c=e.b}return(a>1||b>1||c>1)&&(a/=255,b/=255,c/=255),[a,b,c]},pb=function(a,b,c,e){a=N.round(255*a),b=N.round(255*b),c=N.round(255*c);var g={r:a,g:b,b:c,opacity:f(e,"finite")?e:1,hex:d.rgb(a,b,c),toString:nb};return f(e,"finite")&&(g.opacity=e),g};d.color=function(a){var b;return f(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=d.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):f(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=d.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):(f(a,"string")&&(a=d.getRGB(a)),f(a,"object")&&"r"in a&&"g"in a&&"b"in a&&!("error"in a)?(b=d.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=d.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1,a.error=1)),a.toString=nb,a},d.hsb2rgb=function(a,b,c,d){f(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,g,h,i,j;return a=a%360/60,j=c*b,i=j*(1-Q(a%2-1)),e=g=h=c-j,a=~~a,e+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],pb(e,g,h,d)},d.hsl2rgb=function(a,b,c,d){f(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,g,h,i,j;return a=a%360/60,j=2*b*(.5>c?c:1-c),i=j*(1-Q(a%2-1)),e=g=h=c-j/2,a=~~a,e+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],pb(e,g,h,d)},d.rgb2hsb=function(a,b,c){c=ob(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:lb}},d.rgb2hsl=function(a,b,c){c=ob(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:mb}},d.parsePathString=function(a){if(!a)return null;var b=d.path(a);if(b.arr)return d.path.clone(b.arr);var c={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},e=[];return f(a,"array")&&f(a[0],"array")&&(e=d.path.clone(a)),e.length||K(a).replace(_,function(a,b,d){var f=[],g=b.toLowerCase();if(d.replace(bb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b].concat(f.splice(0,2))),g="l",b="m"==b?"l":"L"),"o"==g&&1==f.length&&e.push([b,f[0]]),"r"==g)e.push([b].concat(f));else for(;f.length>=c[g]&&(e.push([b].concat(f.splice(0,c[g]))),c[g]););}),e.toString=d.path.toString,b.arr=d.path.clone(e),e};var qb=d.parseTransformString=function(a){if(!a)return null;var b=[];return f(a,"array")&&f(a[0],"array")&&(b=d.path.clone(a)),b.length||K(a).replace(ab,function(a,c,d){var e=[];c.toLowerCase(),d.replace(bb,function(a,b){b&&e.push(+b)}),b.push([c].concat(e))}),b.toString=d.path.toString,b};d._.svgTransform2string=o,d._.rgTransform=new RegExp("^[a-z]["+X+"]*-?\\.?\\d","i"),d._.transform2matrix=p,d._unit2px=s;var rb=I.doc.contains||I.doc.compareDocumentPosition?function(a,b){var c=9==a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a==d||!(!d||1!=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b;)if(b=b.parentNode,b==a)return!0;return!1};d._.getSomeDefs=r,d.select=function(a){return z(I.doc.querySelector(a))},d.selectAll=function(a){for(var b=I.doc.querySelectorAll(a),c=(d.set||Array)(),e=0;e<b.length;e++)c.push(z(b[e]));return c},function(a){function g(a){function b(a,b){var c=e(a.node,b);c=c&&c.match(g),c=c&&c[2],c&&"#"==c.charAt()&&(c=c.substring(1),c&&(i[c]=(i[c]||[]).concat(function(c){var d={};d[b]=ib(c),e(a.node,d)})))}function c(a){var b=e(a.node,"xlink:href");b&&"#"==b.charAt()&&(b=b.substring(1),b&&(i[b]=(i[b]||[]).concat(function(b){a.attr("xlink:href","#"+b)})))}for(var d,f=a.selectAll("*"),g=/^\s*url\(("|'|)(.*)\1\)\s*$/,h=[],i={},j=0,k=f.length;k>j;j++){d=f[j],b(d,"fill"),b(d,"stroke"),b(d,"filter"),b(d,"mask"),b(d,"clip-path"),c(d);var l=e(d.node,"id");l&&(e(d.node,{id:d.id}),h.push({old:l,id:d.id}))}for(j=0,k=h.length;k>j;j++){var m=i[h[j].old];if(m)for(var n=0,o=m.length;o>n;n++)m[n](h[j].id)}}function h(a,b,c){return function(d){var e=d.slice(a,b);return 1==e.length&&(e=e[0]),c?c(e):e}}function i(a){return function(){var b=a?"<"+this.type:"",c=this.node.attributes,d=this.node.childNodes;if(a)for(var e=0,f=c.length;f>e;e++)b+=" "+c[e].name+'="'+c[e].value.replace(/"/g,'\\"')+'"';if(d.length){for(a&&(b+=">"),e=0,f=d.length;f>e;e++)3==d[e].nodeType?b+=d[e].nodeValue:1==d[e].nodeType&&(b+=z(d[e]).toString());a&&(b+="</"+this.type+">")}else a&&(b+="/>");return b}}a.attr=function(a,c){var d=this;if(d.node,!a)return d;if(f(a,"string")){if(!(arguments.length>1))return v(b("snap.util.getattr."+a,d));var e={};e[a]=c,a=e}for(var g in a)a[J](g)&&b("snap.util.attr."+g,d,a[g]);return d},a.getBBox=function(a){var b=this;if("use"==b.type&&(b=b.original),b.removed)return{};var c=b._;return a?(c.bboxwt=d.path.get[b.type]?d.path.getBBox(b.realPath=d.path.get[b.type](b)):d._.box(b.node.getBBox()),d._.box(c.bboxwt)):(b.realPath=(d.path.get[b.type]||d.path.get.deflt)(b),c.bbox=d.path.getBBox(d.path.map(b.realPath,b.matrix)),d._.box(c.bbox))};var j=function(){return this.string};a.transform=function(a){var b=this._;if(null==a){var c=new n(this.node.getCTM()),d=q(this),f=d.toTransformString(),g=K(d)==K(this.matrix)?b.transform:f;return{string:g,globalMatrix:c,localMatrix:d,diffMatrix:c.clone().add(d.invert()),global:c.toTransformString(),local:f,toString:j}}return a instanceof n&&(a=a.toTransformString()),q(this,a),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?e(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?e(this.node,{patternTransform:this.matrix}):e(this.node,{transform:this.matrix})),this},a.parent=function(){return z(this.node.parentNode)},a.append=a.add=function(a){if(a){if("set"==a.type){var b=this;return a.forEach(function(a){b.add(a)}),this}a=z(a),this.node.appendChild(a.node),a.paper=this.paper}return this},a.appendTo=function(a){return a&&(a=z(a),a.append(this)),this},a.prepend=function(a){if(a){a=z(a);var b=a.parent();this.node.insertBefore(a.node,this.node.firstChild),this.add&&this.add(),a.paper=this.paper,this.parent()&&this.parent().add(),b&&b.add()}return this},a.prependTo=function(a){return a=z(a),a.prepend(this),this},a.before=function(a){if("set"==a.type){var b=this;return a.forEach(function(a){var c=a.parent();b.node.parentNode.insertBefore(a.node,b.node),c&&c.add()}),this.parent().add(),this}a=z(a);var c=a.parent();return this.node.parentNode.insertBefore(a.node,this.node),this.parent()&&this.parent().add(),c&&c.add(),a.paper=this.paper,this},a.after=function(a){a=z(a);var b=a.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(a.node,this.node.nextSibling):this.node.parentNode.appendChild(a.node),this.parent()&&this.parent().add(),b&&b.add(),a.paper=this.paper,this},a.insertBefore=function(a){a=z(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},a.insertAfter=function(a){a=z(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node.nextSibling),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},a.remove=function(){var a=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,a&&a.add(),this},a.select=function(a){return z(this.node.querySelector(a))},a.selectAll=function(a){for(var b=this.node.querySelectorAll(a),c=(d.set||Array)(),e=0;e<b.length;e++)c.push(z(b[e]));return c},a.asPX=function(a,b){return null==b&&(b=this.attr(a)),+s(this,a,b)},a.use=function(){var a,b=this.node.id;return b||(b=this.id,e(this.node,{id:b})),a="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?x(this.type,this.node.parentNode):x("use",this.node.parentNode),e(a.node,{"xlink:href":"#"+b}),a.original=this,a},a.clone=function(){var a=z(this.node.cloneNode(!0));return e(a.node,"id")&&e(a.node,{id:a.id}),g(a),a.insertAfter(this),a},a.toDefs=function(){var a=r(this);return a.appendChild(this.node),this},a.pattern=function(a,b,c,d){var g=x("pattern",r(this));return null==a&&(a=this.getBBox()),f(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,a=a.x),e(g.node,{x:a,y:b,width:c,height:d,patternUnits:"userSpaceOnUse",id:g.id,viewBox:[a,b,c,d].join(" ")}),g.node.appendChild(this.node),g},a.marker=function(a,b,c,d,g,h){var i=x("marker",r(this));return null==a&&(a=this.getBBox()),f(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,g=a.refX||a.cx,h=a.refY||a.cy,a=a.x),e(i.node,{viewBox:[a,b,c,d].join(T),markerWidth:c,markerHeight:d,orient:"auto",refX:g||0,refY:h||0,id:i.id}),i.node.appendChild(this.node),i};var k=function(a,b,d,e){"function"!=typeof d||d.length||(e=d,d=c.linear),this.attr=a,this.dur=b,d&&(this.easing=d),e&&(this.callback=e)};d.animation=function(a,b,c,d){return new k(a,b,c,d)},a.inAnim=function(){var a=this,b=[];for(var c in a.anims)a.anims[J](c)&&!function(a){b.push({anim:new k(a._attrs,a.dur,a.easing,a._callback),curStatus:a.status(),status:function(b){return a.status(b)},stop:function(){a.stop()}})}(a.anims[c]);return b},d.animate=function(a,d,e,f,g,h){"function"!=typeof g||g.length||(h=g,g=c.linear);var i=c.time(),j=c(a,d,i,i+f,c.time,e,g);return h&&b.once("mina.finish."+j.id,h),j},a.stop=function(){for(var a=this.inAnim(),b=0,c=a.length;c>b;b++)a[b].stop();return this},a.animate=function(a,d,e,g){"function"!=typeof e||e.length||(g=e,e=c.linear),a instanceof k&&(g=a.callback,e=a.easing,d=e.dur,a=a.attr);var i,j,l,m,n=[],o=[],p={},q=this;for(var r in a)if(a[J](r)){q.equal?(m=q.equal(r,K(a[r])),i=m.from,j=m.to,l=m.f):(i=+q.attr(r),j=+a[r]);var s=f(i,"array")?i.length:1;p[r]=h(n.length,n.length+s,l),n=n.concat(i),o=o.concat(j)}var t=c.time(),u=c(n,o,t,t+d,c.time,function(a){var b={};for(var c in p)p[J](c)&&(b[c]=p[c](a));q.attr(b)},e);return q.anims[u.id]=u,u._attrs=a,u._callback=g,b.once("mina.finish."+u.id,function(){delete q.anims[u.id],g&&g.call(q)}),b.once("mina.stop."+u.id,function(){delete q.anims[u.id]}),q};var l={};a.data=function(a,c){var e=l[this.id]=l[this.id]||{};if(0==arguments.length)return b("snap.data.get."+this.id,this,e,null),e;if(1==arguments.length){if(d.is(a,"object")){for(var f in a)a[J](f)&&this.data(f,a[f]);return this}return b("snap.data.get."+this.id,this,e[a],a),e[a]}return e[a]=c,b("snap.data.set."+this.id,this,c,a),this},a.removeData=function(a){return null==a?l[this.id]={}:l[this.id]&&delete l[this.id][a],this},a.outerSVG=a.toString=i(1),a.innerSVG=i()}(u.prototype),d.parse=function(a){var b=I.doc.createDocumentFragment(),c=!0,d=I.doc.createElement("div");if(a=K(a),a.match(/^\s*<\s*svg(?:\s|>)/)||(a="<svg>"+a+"</svg>",c=!1),d.innerHTML=a,a=d.getElementsByTagName("svg")[0])if(c)b=a;else for(;a.firstChild;)b.appendChild(a.firstChild);return d.innerHTML=S,new w(b)},w.prototype.select=u.prototype.select,w.prototype.selectAll=u.prototype.selectAll,d.fragment=function(){for(var a=Array.prototype.slice.call(arguments,0),b=I.doc.createDocumentFragment(),c=0,e=a.length;e>c;c++){var f=a[c];f.node&&f.node.nodeType&&b.appendChild(f.node),f.nodeType&&b.appendChild(f),"string"==typeof f&&b.appendChild(d.parse(f).node)}return new w(b)},function(a){a.el=function(a,b){return x(a,this.node).attr(b)},a.rect=function(a,b,c,d,e,g){var h;return null==g&&(g=e),f(a,"object")&&"x"in a?h=a:null!=a&&(h={x:a,y:b,width:c,height:d},null!=e&&(h.rx=e,h.ry=g)),this.el("rect",h)},a.circle=function(a,b,c){var d;return f(a,"object")&&"cx"in a?d=a:null!=a&&(d={cx:a,cy:b,r:c}),this.el("circle",d)},a.image=function(a,b,c,d,g){var h=x("image",this.node);if(f(a,"object")&&"src"in a)h.attr(a);else if(null!=a){var i={"xlink:href":a,preserveAspectRatio:"none"};null!=b&&null!=c&&(i.x=b,i.y=c),null!=d&&null!=g?(i.width=d,i.height=g):jb(a,function(){e(h.node,{width:this.offsetWidth,height:this.offsetHeight})}),e(h.node,i)}return h},a.ellipse=function(a,b,c,d){var e=x("ellipse",this.node);
return f(a,"object")&&"cx"in a?e.attr(a):null!=a&&e.attr({cx:a,cy:b,rx:c,ry:d}),e},a.path=function(a){var b=x("path",this.node);return f(a,"object")&&!f(a,"array")?b.attr(a):a&&b.attr({d:a}),b},a.group=a.g=function(b){var c=x("g",this.node);c.add=t;for(var d in a)a[J](d)&&(c[d]=a[d]);return 1==arguments.length&&b&&!b.type?c.attr(b):arguments.length&&c.add(Array.prototype.slice.call(arguments,0)),c},a.text=function(a,b,c){var d=x("text",this.node);return f(a,"object")?d.attr(a):null!=a&&d.attr({x:a,y:b,text:c||""}),d},a.line=function(a,b,c,d){var e=x("line",this.node);return f(a,"object")?e.attr(a):null!=a&&e.attr({x1:a,x2:c,y1:b,y2:d}),e},a.polyline=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b=x("polyline",this.node);return f(a,"object")&&!f(a,"array")?b.attr(a):null!=a&&b.attr({points:a}),b},a.polygon=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b=x("polygon",this.node);return f(a,"object")&&!f(a,"array")?b.attr(a):null!=a&&b.attr({points:a}),b},function(){a.gradient=function(a){return D(this.defs,a)},a.gradientLinear=function(a,b,c,d){return E(this.defs,a,b,c,d)},a.gradientRadial=function(a,b,c,d,e){return F(this.defs,a,b,c,d,e)},a.toString=function(){var a,b=I.doc.createDocumentFragment(),c=I.doc.createElement("div"),d=this.node.cloneNode(!0);return b.appendChild(c),c.appendChild(d),e(d,{xmlns:gb}),a=c.innerHTML,b.removeChild(b.firstChild),a},a.clear=function(){for(var a,b=this.node.firstChild;b;)a=b.nextSibling,"defs"!=b.tagName&&b.parentNode.removeChild(b),b=a}}()}(y.prototype),d.ajax=function(a,c,d,e){var g=new XMLHttpRequest,h=eb();if(g){if(f(c,"function"))e=d,d=c,c=null;else if(f(c,"object")){var i=[];for(var j in c)c.hasOwnProperty(j)&&i.push(encodeURIComponent(j)+"="+encodeURIComponent(c[j]));c=i.join("&")}return g.open(c?"POST":"GET",a,!0),g.setRequestHeader("X-Requested-With","XMLHttpRequest"),c&&g.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d&&(b.once("snap.ajax."+h+".0",d),b.once("snap.ajax."+h+".200",d),b.once("snap.ajax."+h+".304",d)),g.onreadystatechange=function(){4==g.readyState&&b("snap.ajax."+h+"."+g.status,e,g)},4==g.readyState?g:(g.send(c),g)}},d.load=function(a,b,c){d.ajax(a,function(a){var e=d.parse(a.responseText);c?b.call(c,e):b(e)})},b.on("snap.util.attr.mask",function(a){if(a instanceof u||a instanceof w){if(b.stop(),a instanceof w&&1==a.node.childNodes.length&&(a=a.node.firstChild,r(this).appendChild(a),a=z(a)),"mask"==a.type)var c=a;else c=x("mask",r(this)),c.node.appendChild(a.node),!c.node.id&&e(c.node,{id:c.id});e(this.node,{mask:ib(c.id)})}}),function(a){b.on("snap.util.attr.clip",a),b.on("snap.util.attr.clip-path",a),b.on("snap.util.attr.clipPath",a)}(function(a){if(a instanceof u||a instanceof w){if(b.stop(),"clipPath"==a.type)var c=a;else c=x("clipPath",r(this)),c.node.appendChild(a.node),!c.node.id&&e(c.node,{id:c.id});e(this.node,{"clip-path":ib(c.id)})}}),b.on("snap.util.attr.fill",G("fill")),b.on("snap.util.attr.stroke",G("stroke"));var sb=/^([lr])(?:\(([^)]*)\))?(.*)$/i;b.on("snap.util.grad.parse",function(a){a=K(a);var b=a.match(sb);if(!b)return null;var c=b[1],d=b[2],e=b[3];return d=d.split(/\s*,\s*/).map(function(a){return+a==a?+a:a}),1==d.length&&0==d[0]&&(d=[]),e=e.split("-"),e=e.map(function(a){a=a.split(":");var b={color:a[0]};return a[1]&&(b.offset=a[1]),b}),{type:c,params:d,stops:e}}),b.on("snap.util.attr.d",function(a){b.stop(),f(a,"array")&&f(a[0],"array")&&(a=d.path.toString.call(a)),a=K(a),a.match(/[ruo]/i)&&(a=d.path.toAbsolute(a)),e(this.node,{d:a})})(-1),b.on("snap.util.attr.#text",function(a){b.stop(),a=K(a);for(var c=I.doc.createTextNode(a);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(c)})(-1),b.on("snap.util.attr.path",function(a){b.stop(),this.attr({d:a})})(-1),b.on("snap.util.attr.viewBox",function(a){var c;c=f(a,"object")&&"x"in a?[a.x,a.y,a.width,a.height].join(" "):f(a,"array")?a.join(" "):a,e(this.node,{viewBox:c}),b.stop()})(-1),b.on("snap.util.attr.transform",function(a){this.transform(a),b.stop()})(-1),b.on("snap.util.attr.r",function(a){"rect"==this.type&&(b.stop(),e(this.node,{rx:a,ry:a}))})(-1),b.on("snap.util.attr.textpath",function(a){if(b.stop(),"text"==this.type){var c,d,g;if(!a&&this.textPath){for(d=this.textPath;d.node.firstChild;)this.node.appendChild(d.node.firstChild);return d.remove(),delete this.textPath,void 0}if(f(a,"string")){var h=r(this),i=z(h.parentNode).path(a);h.appendChild(i.node),c=i.id,i.attr({id:c})}else a=z(a),a instanceof u&&(c=a.attr("id"),c||(c=a.id,a.attr({id:c})));if(c)if(d=this.textPath,g=this.node,d)d.attr({"xlink:href":"#"+c});else{for(d=e("textPath",{"xlink:href":"#"+c});g.firstChild;)d.appendChild(g.firstChild);g.appendChild(d),this.textPath=z(d)}}})(-1),b.on("snap.util.attr.text",function(a){if("text"==this.type){for(var c=this.node,d=function(a){var b=e("tspan");if(f(a,"array"))for(var c=0;c<a.length;c++)b.appendChild(d(a[c]));else b.appendChild(I.doc.createTextNode(a));return b.normalize&&b.normalize(),b};c.firstChild;)c.removeChild(c.firstChild);for(var g=d(a);g.firstChild;)c.appendChild(g.firstChild)}b.stop()})(-1);var tb={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};b.on("snap.util.attr",function(a){var c=b.nt(),d={};c=c.substring(c.lastIndexOf(".")+1),d[c]=a;var f=c.replace(/-(\w)/gi,function(a,b){return b.toUpperCase()}),g=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});tb[J](g)?this.node.style[f]=null==a?S:a:e(this.node,d)}),b.on("snap.util.getattr.transform",function(){return b.stop(),this.transform()})(-1),b.on("snap.util.getattr.textpath",function(){return b.stop(),this.textPath})(-1),function(){function a(a){return function(){b.stop();var c=I.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+a);return"none"==c?c:d(I.doc.getElementById(c.match(W)[1]))}}function c(a){return function(c){b.stop();var d="marker"+a.charAt(0).toUpperCase()+a.substring(1);if(""==c||!c)return this.node.style[d]="none",void 0;if("marker"==c.type){var f=c.node.id;return f||e(c.node,{id:c.id}),this.node.style[d]=ib(f),void 0}}}b.on("snap.util.getattr.marker-end",a("end"))(-1),b.on("snap.util.getattr.markerEnd",a("end"))(-1),b.on("snap.util.getattr.marker-start",a("start"))(-1),b.on("snap.util.getattr.markerStart",a("start"))(-1),b.on("snap.util.getattr.marker-mid",a("mid"))(-1),b.on("snap.util.getattr.markerMid",a("mid"))(-1),b.on("snap.util.attr.marker-end",c("end"))(-1),b.on("snap.util.attr.markerEnd",c("end"))(-1),b.on("snap.util.attr.marker-start",c("start"))(-1),b.on("snap.util.attr.markerStart",c("start"))(-1),b.on("snap.util.attr.marker-mid",c("mid"))(-1),b.on("snap.util.attr.markerMid",c("mid"))(-1)}(),b.on("snap.util.getattr.r",function(){return"rect"==this.type&&e(this.node,"rx")==e(this.node,"ry")?(b.stop(),e(this.node,"rx")):void 0})(-1),b.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){b.stop();var a=H(this.node);return 1==a.length?a[0]:a}})(-1),b.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),b.on("snap.util.getattr.viewBox",function(){b.stop();var a=e(this.node,"viewBox").split(Y);return d._.box(+a[0],+a[1],+a[2],+a[3])})(-1),b.on("snap.util.getattr.points",function(){var a=e(this.node,"points");return b.stop(),a.split(Y)}),b.on("snap.util.getattr.path",function(){var a=e(this.node,"d");return b.stop(),a}),b.on("snap.util.getattr",function(){var a=b.nt();a=a.substring(a.lastIndexOf(".")+1);var c=a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});return tb[J](c)?I.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue(c):e(this.node,a)});var ub=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,h=e.clientLeft||d.clientLeft||0,i=b.top+(g.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(g.win.pageXOffset||e.scrollLeft||d.scrollLeft)-h;return{y:i,x:j}};return d.getElementByPoint=function(a,b){var c=this,d=(c.canvas,I.doc.elementFromPoint(a,b));if(I.win.opera&&"svg"==d.tagName){var e=ub(d),f=d.createSVGRect();f.x=a-e.x,f.y=b-e.y,f.width=f.height=1;var g=d.getIntersectionList(f,null);g.length&&(d=g[g.length-1])}return d?z(d):null},d.plugin=function(a){a(d,u,y,I)},I.win.Snap=d,d}();return d.plugin(function(a,b){function c(a){var b=c.ps=c.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[L](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]}function d(a,b,c,d){return null==a&&(a=b=c=d=0),null==b&&(b=a.y,c=a.width,d=a.height,a=a.x),{x:a,y:b,width:c,w:c,height:d,h:d,x2:a+c,y2:b+d,cx:a+c/2,cy:b+d/2,r1:O.min(c,d)/2,r2:O.max(c,d)/2,r0:O.sqrt(c*c+d*d)/2,path:w(a,b,c,d),vb:[a,b,c,d].join(" ")}}function e(){return this.join(",").replace(M,"$1")}function f(a){var b=K(a);return b.toString=e,b}function g(a,b,c,d,e,f,g,h,j){return null==j?n(a,b,c,d,e,f,g,h):i(a,b,c,d,e,f,g,h,o(a,b,c,d,e,f,g,h,j))}function h(c,d){function e(a){return+(+a).toFixed(3)}return a._.cacher(function(a,f,h){a instanceof b&&(a=a.attr("d")),a=F(a);for(var j,k,l,m,n,o="",p={},q=0,r=0,s=a.length;s>r;r++){if(l=a[r],"M"==l[0])j=+l[1],k=+l[2];else{if(m=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6]),q+m>f){if(d&&!p.start){if(n=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6],f-q),o+=["C"+e(n.start.x),e(n.start.y),e(n.m.x),e(n.m.y),e(n.x),e(n.y)],h)return o;p.start=o,o=["M"+e(n.x),e(n.y)+"C"+e(n.n.x),e(n.n.y),e(n.end.x),e(n.end.y),e(l[5]),e(l[6])].join(),q+=m,j=+l[5],k=+l[6];continue}if(!c&&!d)return n=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6],f-q)}q+=m,j=+l[5],k=+l[6]}o+=l.shift()+l}return p.end=o,n=c?q:d?p:i(j,k,l[0],l[1],l[2],l[3],l[4],l[5],1)},null,a._.clone)}function i(a,b,c,d,e,f,g,h,i){var j=1-i,k=S(j,3),l=S(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*O.atan2(q-s,r-t)/P;return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function j(b,c,e,f,g,h,i,j){a.is(b,"array")||(b=[b,c,e,f,g,h,i,j]);var k=E.apply(null,b);return d(k.min.x,k.min.y,k.max.x-k.min.x,k.max.y-k.min.y)}function k(a,b,c){return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height}function l(a,b){return a=d(a),b=d(b),k(b,a.x,a.y)||k(b,a.x2,a.y)||k(b,a.x,a.y2)||k(b,a.x2,a.y2)||k(a,b.x,b.y)||k(a,b.x2,b.y)||k(a,b.x,b.y2)||k(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)}function m(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function n(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:0>i?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;k>p;p++){var q=j*l[p]+j,r=m(q,a,c,e,g),s=m(q,b,d,f,h),t=r*r+s*s;o+=n[p]*O.sqrt(t)}return j*o}function o(a,b,c,d,e,f,g,h,i){if(!(0>i||n(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,o=.01;for(j=n(a,b,c,d,e,f,g,h,m);T(j-i)>o;)l/=2,m+=(i>j?1:-1)*l,j=n(a,b,c,d,e,f,g,h,m);return m}}function p(a,b,c,d,e,f,g,h){if(!(R(a,c)<Q(e,g)||Q(a,c)>R(e,g)||R(b,d)<Q(f,h)||Q(b,d)>R(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+Q(a,c).toFixed(2)||n>+R(a,c).toFixed(2)||n<+Q(e,g).toFixed(2)||n>+R(e,g).toFixed(2)||o<+Q(b,d).toFixed(2)||o>+R(b,d).toFixed(2)||o<+Q(f,h).toFixed(2)||o>+R(f,h).toFixed(2)))return{x:l,y:m}}}}function q(a,b,c){var d=j(a),e=j(b);if(!l(d,e))return c?0:[];for(var f=n.apply(0,a),g=n.apply(0,b),h=~~(f/5),k=~~(g/5),m=[],o=[],q={},r=c?0:[],s=0;h+1>s;s++){var t=i.apply(0,a.concat(s/h));m.push({x:t.x,y:t.y,t:s/h})}for(s=0;k+1>s;s++)t=i.apply(0,b.concat(s/k)),o.push({x:t.x,y:t.y,t:s/k});for(s=0;h>s;s++)for(var u=0;k>u;u++){var v=m[s],w=m[s+1],x=o[u],y=o[u+1],z=T(w.x-v.x)<.001?"y":"x",A=T(y.x-x.x)<.001?"y":"x",B=p(v.x,v.y,w.x,w.y,x.x,x.y,y.x,y.y);if(B){if(q[B.x.toFixed(4)]==B.y.toFixed(4))continue;q[B.x.toFixed(4)]=B.y.toFixed(4);var C=v.t+T((B[z]-v[z])/(w[z]-v[z]))*(w.t-v.t),D=x.t+T((B[A]-x[A])/(y[A]-x[A]))*(y.t-x.t);C>=0&&1>=C&&D>=0&&1>=D&&(c?r++:r.push({x:B.x,y:B.y,t1:C,t2:D}))}}return r}function r(a,b){return t(a,b)}function s(a,b){return t(a,b,1)}function t(a,b,c){a=F(a),b=F(b);for(var d,e,f,g,h,i,j,k,l,m,n=c?0:[],o=0,p=a.length;p>o;o++){var r=a[o];if("M"==r[0])d=h=r[1],e=i=r[2];else{"C"==r[0]?(l=[d,e].concat(r.slice(1)),d=l[6],e=l[7]):(l=[d,e,d,e,h,i,h,i],d=h,e=i);for(var s=0,t=b.length;t>s;s++){var u=b[s];if("M"==u[0])f=j=u[1],g=k=u[2];else{"C"==u[0]?(m=[f,g].concat(u.slice(1)),f=m[6],g=m[7]):(m=[f,g,f,g,j,k,j,k],f=j,g=k);var v=q(l,m,c);if(c)n+=v;else{for(var w=0,x=v.length;x>w;w++)v[w].segment1=o,v[w].segment2=s,v[w].bez1=l,v[w].bez2=m;n=n.concat(v)}}}}}return n}function u(a,b,c){var d=v(a);return k(d,b,c)&&1==t(a,[["M",b,c],["H",d.x2+10]],1)%2}function v(a){var b=c(a);if(b.bbox)return K(b.bbox);if(!a)return d();a=F(a);for(var e,f=0,g=0,h=[],i=[],j=0,k=a.length;k>j;j++)if(e=a[j],"M"==e[0])f=e[1],g=e[2],h.push(f),i.push(g);else{var l=E(f,g,e[1],e[2],e[3],e[4],e[5],e[6]);h=h.concat(l.min.x,l.max.x),i=i.concat(l.min.y,l.max.y),f=e[5],g=e[6]}var m=Q.apply(0,h),n=Q.apply(0,i),o=R.apply(0,h),p=R.apply(0,i),q=d(m,n,o-m,p-n);return b.bbox=K(q),q}function w(a,b,c,d,f){if(f)return[["M",a+f,b],["l",c-2*f,0],["a",f,f,0,0,1,f,f],["l",0,d-2*f],["a",f,f,0,0,1,-f,f],["l",2*f-c,0],["a",f,f,0,0,1,-f,-f],["l",0,2*f-d],["a",f,f,0,0,1,f,-f],["z"]];var g=[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]];return g.toString=e,g}function x(a,b,c,d,f){if(null==f&&null==d&&(d=c),null!=f)var g=Math.PI/180,h=a+c*Math.cos(-d*g),i=a+c*Math.cos(-f*g),j=b+c*Math.sin(-d*g),k=b+c*Math.sin(-f*g),l=[["M",h,j],["A",c,c,0,+(f-d>180),0,i,k]];else l=[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]];return l.toString=e,l}function y(b){var d=c(b),g=String.prototype.toLowerCase;if(d.rel)return f(d.rel);a.is(b,"array")&&a.is(b&&b[0],"array")||(b=a.parsePathString(b));var h=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=b[0][1],j=b[0][2],k=i,l=j,m++,h.push(["M",i,j]));for(var n=m,o=b.length;o>n;n++){var p=h[n]=[],q=b[n];if(q[0]!=g.call(q[0]))switch(p[0]=g.call(q[0]),p[0]){case"a":p[1]=q[1],p[2]=q[2],p[3]=q[3],p[4]=q[4],p[5]=q[5],p[6]=+(q[6]-i).toFixed(3),p[7]=+(q[7]-j).toFixed(3);break;case"v":p[1]=+(q[1]-j).toFixed(3);break;case"m":k=q[1],l=q[2];default:for(var r=1,s=q.length;s>r;r++)p[r]=+(q[r]-(r%2?i:j)).toFixed(3)}else{p=h[n]=[],"m"==q[0]&&(k=q[1]+i,l=q[2]+j);for(var t=0,u=q.length;u>t;t++)h[n][t]=q[t]}var v=h[n].length;switch(h[n][0]){case"z":i=k,j=l;break;case"h":i+=+h[n][v-1];break;case"v":j+=+h[n][v-1];break;default:i+=+h[n][v-2],j+=+h[n][v-1]}}return h.toString=e,d.rel=f(h),h}function z(b){var d=c(b);if(d.abs)return f(d.abs);if(J(b,"array")&&J(b&&b[0],"array")||(b=a.parsePathString(b)),!b||!b.length)return[["M",0,0]];var g,h=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=+b[0][1],j=+b[0][2],k=i,l=j,m++,h[0]=["M",i,j]);for(var n,o,p=3==b.length&&"M"==b[0][0]&&"R"==b[1][0].toUpperCase()&&"Z"==b[2][0].toUpperCase(),q=m,r=b.length;r>q;q++){if(h.push(n=[]),o=b[q],g=o[0],g!=g.toUpperCase())switch(n[0]=g.toUpperCase(),n[0]){case"A":n[1]=o[1],n[2]=o[2],n[3]=o[3],n[4]=o[4],n[5]=o[5],n[6]=+(o[6]+i),n[7]=+(o[7]+j);break;case"V":n[1]=+o[1]+j;break;case"H":n[1]=+o[1]+i;break;case"R":for(var s=[i,j].concat(o.slice(1)),t=2,u=s.length;u>t;t++)s[t]=+s[t]+i,s[++t]=+s[t]+j;h.pop(),h=h.concat(H(s,p));break;case"O":h.pop(),s=x(i,j,o[1],o[2]),s.push(s[0]),h=h.concat(s);break;case"U":h.pop(),h=h.concat(x(i,j,o[1],o[2],o[3])),n=["U"].concat(h[h.length-1].slice(-2));break;case"M":k=+o[1]+i,l=+o[2]+j;default:for(t=1,u=o.length;u>t;t++)n[t]=+o[t]+(t%2?i:j)}else if("R"==g)s=[i,j].concat(o.slice(1)),h.pop(),h=h.concat(H(s,p)),n=["R"].concat(o.slice(-2));else if("O"==g)h.pop(),s=x(i,j,o[1],o[2]),s.push(s[0]),h=h.concat(s);else if("U"==g)h.pop(),h=h.concat(x(i,j,o[1],o[2],o[3])),n=["U"].concat(h[h.length-1].slice(-2));else for(var v=0,w=o.length;w>v;v++)n[v]=o[v];if(g=g.toUpperCase(),"O"!=g)switch(n[0]){case"Z":i=k,j=l;break;case"H":i=n[1];break;case"V":j=n[1];break;case"M":k=n[n.length-2],l=n[n.length-1];default:i=n[n.length-2],j=n[n.length-1]}}return h.toString=e,d.abs=f(h),h}function A(a,b,c,d){return[a,b,c,d,c,d]}function B(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function C(b,c,d,e,f,g,h,i,j,k){var l,m=120*P/180,n=P/180*(+f||0),o=[],p=a._.cacher(function(a,b,c){var d=a*O.cos(c)-b*O.sin(c),e=a*O.sin(c)+b*O.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(b,c,-n),b=l.x,c=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(O.cos(P/180*f),O.sin(P/180*f),(b-i)/2),r=(c-j)/2,s=q*q/(d*d)+r*r/(e*e);s>1&&(s=O.sqrt(s),d=s*d,e=s*e);var t=d*d,u=e*e,v=(g==h?-1:1)*O.sqrt(T((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*d*r/e+(b+i)/2,x=v*-e*q/d+(c+j)/2,y=O.asin(((c-x)/e).toFixed(9)),z=O.asin(((j-x)/e).toFixed(9));y=w>b?P-y:y,z=w>i?P-z:z,0>y&&(y=2*P+y),0>z&&(z=2*P+z),h&&y>z&&(y-=2*P),!h&&z>y&&(z-=2*P)}var A=z-y;if(T(A)>m){var B=z,D=i,E=j;z=y+m*(h&&z>y?1:-1),i=w+d*O.cos(z),j=x+e*O.sin(z),o=C(i,j,d,e,f,0,h,D,E,[z,B,w,x])}A=z-y;var F=O.cos(y),G=O.sin(y),H=O.cos(z),I=O.sin(z),J=O.tan(A/4),K=4/3*d*J,L=4/3*e*J,M=[b,c],N=[b+K*G,c-L*F],Q=[i+K*I,j-L*H],R=[i,j];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],k)return[N,Q,R].concat(o);o=[N,Q,R].concat(o).join().split(",");for(var S=[],U=0,V=o.length;V>U;U++)S[U]=U%2?p(o[U-1],o[U],n).y:p(o[U],o[U+1],n).x;return S}function D(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:S(j,3)*a+3*S(j,2)*i*c+3*j*i*i*e+S(i,3)*g,y:S(j,3)*b+3*S(j,2)*i*d+3*j*i*i*f+S(i,3)*h}}function E(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+O.sqrt(k*k-4*j*l))/2/j,n=(-k-O.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return T(m)>"1e12"&&(m=.5),T(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=D(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=D(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+O.sqrt(k*k-4*j*l))/2/j,n=(-k-O.sqrt(k*k-4*j*l))/2/j,T(m)>"1e12"&&(m=.5),T(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=D(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=D(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:Q.apply(0,p),y:Q.apply(0,o)},max:{x:R.apply(0,p),y:R.apply(0,o)}}}function F(a,b){var d=!b&&c(a);if(!b&&d.curve)return f(d.curve);for(var e=z(a),g=b&&z(b),h={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},j=(function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(C.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d].concat(a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"].concat(B(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(B(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(A(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(A(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(A(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(A(b.x,b.y,b.X,b.Y))}return a}),k=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"].concat(c.splice(0,6)));a.splice(b,1),n=R(e.length,g&&g.length||0)}},l=function(a,b,c,d,f){a&&b&&"M"==a[f][0]&&"M"!=b[f][0]&&(b.splice(f,0,["M",d.x,d.y]),c.bx=0,c.by=0,c.x=a[f][1],c.y=a[f][2],n=R(e.length,g&&g.length||0))},m=0,n=R(e.length,g&&g.length||0);n>m;m++){e[m]=j(e[m],h),k(e,m),g&&(g[m]=j(g[m],i)),g&&k(g,m),l(e,g,h,i,m),l(g,e,i,h,m);var o=e[m],p=g&&g[m],q=o.length,r=g&&p.length;h.x=o[q-2],h.y=o[q-1],h.bx=N(o[q-4])||h.x,h.by=N(o[q-3])||h.y,i.bx=g&&(N(p[r-4])||i.x),i.by=g&&(N(p[r-3])||i.y),i.x=g&&p[r-2],i.y=g&&p[r-1]}return g||(d.curve=f(e)),g?[e,g]:e}function G(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=F(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a}function H(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}var I=b.prototype,J=a.is,K=a._.clone,L="hasOwnProperty",M=/,?([a-z]),?/gi,N=parseFloat,O=Math,P=O.PI,Q=O.min,R=O.max,S=O.pow,T=O.abs,U=h(1),V=h(),W=h(0,1),X=a._unit2px,Y={path:function(a){return a.attr("path")},circle:function(a){var b=X(a);return x(b.cx,b.cy,b.r)},ellipse:function(a){var b=X(a);return x(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=X(a);return w(b.x,b.y,b.width,b.height,b.rx,b.ry)},image:function(a){var b=X(a);return w(b.x,b.y,b.width,b.height)},text:function(a){var b=a.node.getBBox();return w(b.x,b.y,b.width,b.height)},g:function(a){var b=a.node.getBBox();return w(b.x,b.y,b.width,b.height)},symbol:function(a){var b=a.getBBox();return w(b.x,b.y,b.width,b.height)},line:function(a){return"M"+[a.attr("x1"),a.attr("y1"),a.attr("x2"),a.attr("y2")]},polyline:function(a){return"M"+a.attr("points")},polygon:function(a){return"M"+a.attr("points")+"z"},svg:function(a){var b=a.node.getBBox();return w(b.x,b.y,b.width,b.height)},deflt:function(a){var b=a.node.getBBox();return w(b.x,b.y,b.width,b.height)}};a.path=c,a.path.getTotalLength=U,a.path.getPointAtLength=V,a.path.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return W(a,b).end;var d=W(a,c,1);return b?W(d,b).end:d},I.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},I.getPointAtLength=function(a){return V(this.attr("d"),a)},I.getSubpath=function(b,c){return a.path.getSubpath(this.attr("d"),b,c)},a._.box=d,a.path.findDotsAtSegment=i,a.path.bezierBBox=j,a.path.isPointInsideBBox=k,a.path.isBBoxIntersect=l,a.path.intersection=r,a.path.intersectionNumber=s,a.path.isPointInside=u,a.path.getBBox=v,a.path.get=Y,a.path.toRelative=y,a.path.toAbsolute=z,a.path.toCubic=F,a.path.map=G,a.path.toString=e,a.path.clone=f}),d.plugin(function(a){var b=Math.max,c=Math.min,d=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)a[b]&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},e=d.prototype;e.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],a&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},e.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},e.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this},e.remove=function(){for(;this.length;)this.pop().remove();return this},e.attr=function(a){for(var b=0,c=this.items.length;c>b;b++)this.items[b].attr(a);return this},e.clear=function(){for(;this.length;)this.pop()},e.splice=function(a,e){a=0>a?b(this.length+a,0):a,e=b(0,c(this.length-a,e));var f,g=[],h=[],i=[];for(f=2;f<arguments.length;f++)i.push(arguments[f]);for(f=0;e>f;f++)h.push(this[a+f]);for(;f<this.length-a;f++)g.push(this[a+f]);var j=i.length;for(f=0;f<j+g.length;f++)this.items[a+f]=this[a+f]=j>f?i[f]:g[f-j];for(f=this.items.length=this.length-=e-j;this[f];)delete this[f++];return new d(h)},e.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0;return!1},e.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},e.getBBox=function(){for(var a=[],d=[],e=[],f=[],g=this.items.length;g--;)if(!this.items[g].removed){var h=this.items[g].getBBox();a.push(h.x),d.push(h.y),e.push(h.x+h.width),f.push(h.y+h.height)}return a=c.apply(0,a),d=c.apply(0,d),e=b.apply(0,e),f=b.apply(0,f),{x:a,y:d,x2:e,y2:f,width:e-a,height:f-d,cx:a+(e-a)/2,cy:d+(f-d)/2}},e.clone=function(a){a=new d;for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},e.toString=function(){return"Snap‘s set"},e.type="set",a.set=function(){var a=new d;return arguments.length&&a.push.apply(a,Array.prototype.slice.call(arguments,0)),a}}),d.plugin(function(a,b){function c(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}}function d(b,d,e){d=l(d).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],d=a.parseTransformString(d)||[];for(var f,g,j,k,m=Math.max(b.length,d.length),n=[],o=[],p=0;m>p;p++){if(j=b[p]||c(d[p]),k=d[p]||c(j),j[0]!=k[0]||"r"==j[0].toLowerCase()&&(j[2]!=k[2]||j[3]!=k[3])||"s"==j[0].toLowerCase()&&(j[3]!=k[3]||j[4]!=k[4])){b=a._.transform2matrix(b,e()),d=a._.transform2matrix(d,e()),n=[["m",b.a,b.b,b.c,b.d,b.e,b.f]],o=[["m",d.a,d.b,d.c,d.d,d.e,d.f]];break}for(n[p]=[],o[p]=[],f=0,g=Math.max(j.length,k.length);g>f;f++)f in j&&(n[p][f]=j[f]),f in k&&(o[p][f]=k[f])}return{from:i(n),to:i(o),f:h(n)}}function e(a){return a}function f(a){return function(b){return+b.toFixed(3)+a}}function g(b){return a.rgb(b[0],b[1],b[2])}function h(a){var b,c,d,e,f,g,h=0,i=[];for(b=0,c=a.length;c>b;b++){for(f="[",g=['"'+a[b][0]+'"'],d=1,e=a[b].length;e>d;d++)g[d]="val["+h++ +"]";f+=g+"]",i[b]=f}return Function("val","return Snap.path.toString.call(["+i+"])")}function i(a){for(var b=[],c=0,d=a.length;d>c;c++)for(var e=1,f=a[c].length;f>e;e++)b.push(a[c][e]);return b}var j={},k=/[a-z]+$/i,l=String;j.stroke=j.fill="colour",b.prototype.equal=function(b,c){var m,n,o=l(this.attr(b)||""),p=this;if(o==+o&&c==+c)return{from:+o,to:+c,f:e};if("colour"==j[b])return m=a.color(o),n=a.color(c),{from:[m.r,m.g,m.b,m.opacity],to:[n.r,n.g,n.b,n.opacity],f:g};if("transform"==b||"gradientTransform"==b||"patternTransform"==b)return c instanceof a.Matrix&&(c=c.toTransformString()),a._.rgTransform.test(c)||(c=a._.svgTransform2string(c)),d(o,c,function(){return p.getBBox(1)});if("d"==b||"path"==b)return m=a.path.toCubic(o,c),{from:i(m[0]),to:i(m[1]),f:h(m[0])};if("points"==b)return m=l(o).split(","),n=l(c).split(","),{from:m,to:n,f:function(a){return a}};var q=o.match(k),r=l(c).match(k);return q&&q==r?{from:parseFloat(o),to:parseFloat(c),f:f(q)}:{from:this.asPX(b),to:this.asPX(b,c),f:e}}}),d.plugin(function(a,c,d,e){for(var f=c.prototype,g="hasOwnProperty",h=("createTouch"in e.doc),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],j={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},k=function(a){var b="y"==a?"scrollTop":"scrollLeft";return e.doc.documentElement[b]||e.doc.body[b]},l=function(){this.returnValue=!1},m=function(){return this.originalEvent.preventDefault()},n=function(){this.cancelBubble=!0},o=function(){return this.originalEvent.stopPropagation()},p=function(){return e.doc.addEventListener?function(a,b,c,d){var e=h&&j[b]?j[b]:b,f=function(e){var f=k("y"),i=k("x");if(h&&j[g](b))for(var l=0,n=e.targetTouches&&e.targetTouches.length;n>l;l++)if(e.targetTouches[l].target==a||a.contains(e.targetTouches[l].target)){var p=e;e=e.targetTouches[l],e.originalEvent=p,e.preventDefault=m,e.stopPropagation=o;break}var q=e.clientX+i,r=e.clientY+f;return c.call(d,e,q,r)};return b!==e&&a.addEventListener(b,f,!1),a.addEventListener(e,f,!1),function(){return b!==e&&a.removeEventListener(b,f,!1),a.removeEventListener(e,f,!1),!0}}:e.doc.attachEvent?function(a,b,c,d){var f=function(a){a=a||e.win.event;var b=k("y"),f=k("x"),g=a.clientX+f,h=a.clientY+b;return a.preventDefault=a.preventDefault||l,a.stopPropagation=a.stopPropagation||n,c.call(d,a,g,h)};a.attachEvent("on"+b,f);var g=function(){return a.detachEvent("on"+b,f),!0};return g}:void 0}(),q=[],r=function(c){for(var d,e=c.clientX,f=c.clientY,g=k("y"),i=k("x"),j=q.length;j--;){if(d=q[j],h){for(var l,m=c.touches&&c.touches.length;m--;)if(l=c.touches[m],l.identifier==d.el._drag.id||d.el.node.contains(l.target)){e=l.clientX,f=l.clientY,(c.originalEvent?c.originalEvent:c).preventDefault();break}}else c.preventDefault();var n=d.el.node;a._.glob,n.nextSibling,n.parentNode,n.style.display,e+=i,f+=g,b("snap.drag.move."+d.el.id,d.move_scope||d.el,e-d.el._drag.x,f-d.el._drag.y,e,f,c)}},s=function(c){a.unmousemove(r).unmouseup(s);for(var d,e=q.length;e--;)d=q[e],d.el._drag={},b("snap.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c);q=[]},t=i.length;t--;)!function(b){a[b]=f[b]=function(c,d){return a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:p(this.shape||this.node||e.doc,b,c,d||this)})),this},a["un"+b]=f["un"+b]=function(a){for(var c=this.events||[],d=c.length;d--;)if(c[d].name==b&&(c[d].f==a||!a))return c[d].unbind(),c.splice(d,1),!c.length&&delete this.events,this;return this}}(i[t]);f.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},f.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var u=[];f.drag=function(c,d,e,f,g,h){function i(i,j,k){(i.originalEvent||i).preventDefault(),this._drag.x=j,this._drag.y=k,this._drag.id=i.identifier,!q.length&&a.mousemove(r).mouseup(s),q.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("snap.drag.start."+this.id,d),c&&b.on("snap.drag.move."+this.id,c),e&&b.on("snap.drag.end."+this.id,e),b("snap.drag.start."+this.id,g||f||this,j,k,i)}if(!arguments.length){var j;return this.drag(function(a,b){this.attr({transform:j+(j?"T":"t")+[a,b]})},function(){j=this.transform().local})}return this._drag={},u.push({el:this,start:i}),this.mousedown(i),this},f.undrag=function(){for(var c=u.length;c--;)u[c].el==this&&(this.unmousedown(u[c].start),u.splice(c,1),b.unbind("snap.drag.*."+this.id));return!u.length&&a.unmousemove(r).unmouseup(s),this}}),d.plugin(function(a,c,d){var e=(c.prototype,d.prototype),f=/^\s*url\((.+)\)/,g=String,h=a._.$;a.filter={},e.filter=function(b){var d=this;"svg"!=d.type&&(d=d.paper);var e=a.parse(g(b)),f=a._.id(),i=(d.node.offsetWidth,d.node.offsetHeight,h("filter"));return h(i,{id:f,filterUnits:"userSpaceOnUse"}),i.appendChild(e.node),d.defs.appendChild(i),new c(i)},b.on("snap.util.getattr.filter",function(){b.stop();var c=h(this.node,"filter");if(c){var d=g(c).match(f);return d&&a.select(d[1])}}),b.on("snap.util.attr.filter",function(d){if(d instanceof c&&"filter"==d.type){b.stop();var e=d.node.id;e||(h(d.node,{id:d.id}),e=d.id),h(this.node,{filter:a.url(e)})}d&&"none"!=d||(b.stop(),this.node.removeAttribute("filter"))}),a.filter.blur=function(b,c){null==b&&(b=2);var d=null==c?b:[b,c];return a.format('<feGaussianBlur stdDeviation="{def}"/>',{def:d})},a.filter.blur.toString=function(){return this()},a.filter.shadow=function(b,c,d,e){return e=e||"#000",null==d&&(d=4),"string"==typeof d&&(e=d,d=4),null==b&&(b=0,c=2),null==c&&(c=b),e=a.color(e),a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:e,dx:b,dy:c,blur:d})
},a.filter.shadow.toString=function(){return this()},a.filter.grayscale=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-b),b:.7152-.7152*(1-b),c:.0722-.0722*(1-b),d:.2126-.2126*(1-b),e:.7152+.2848*(1-b),f:.0722-.0722*(1-b),g:.2126-.2126*(1-b),h:.0722+.9278*(1-b)})},a.filter.grayscale.toString=function(){return this()},a.filter.sepia=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-b),b:.769-.769*(1-b),c:.189-.189*(1-b),d:.349-.349*(1-b),e:.686+.314*(1-b),f:.168-.168*(1-b),g:.272-.272*(1-b),h:.534-.534*(1-b),i:.131+.869*(1-b)})},a.filter.sepia.toString=function(){return this()},a.filter.saturate=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-b})},a.filter.saturate.toString=function(){return this()},a.filter.hueRotate=function(b){return b=b||0,a.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:b})},a.filter.hueRotate.toString=function(){return this()},a.filter.invert=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:b,amount2:1-b})},a.filter.invert.toString=function(){return this()},a.filter.brightness=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:b})},a.filter.brightness.toString=function(){return this()},a.filter.contrast=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:b,amount2:.5-b/2})},a.filter.contrast.toString=function(){return this()}}),d});
















// 2.CLASSIE.JS
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );













// 3.SVGLOADER

/**
 * svgLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function SVGLoader( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	SVGLoader.prototype.options = {
		speedIn : 500,
		speedOut: 500,
		easingIn : mina.linear
	};

	SVGLoader.prototype._init = function() {
		var s = Snap( this.el.querySelector( 'svg' ) );
		this.path = s.select( 'path' );
		this.initialPath = this.path.attr('d');

		var openingStepsStr = this.el.getAttribute( 'data-opening' );
		this.openingSteps = openingStepsStr ? openingStepsStr.split(';') : '';
		this.openingStepsTotal = openingStepsStr ? this.openingSteps.length : 0;
		if( this.openingStepsTotal === 0 ) return;

		// if data-closing is not defined then the path will animate to its original shape
		var closingStepsStr = this.el.getAttribute( 'data-closing' ) ? this.el.getAttribute( 'data-closing' ) : this.initialPath;
		this.closingSteps = closingStepsStr ? closingStepsStr.split(';') : '';
		this.closingStepsTotal = closingStepsStr ? this.closingSteps.length : 0;

		this.isAnimating = false;

		if( !this.options.speedOut ) {
			this.options.speedOut = this.options.speedIn;
		}
		if( !this.options.easingOut ) {
			this.options.easingOut = this.options.easingIn;
		}
	};

	SVGLoader.prototype.show = function() {
		if( this.isAnimating ) return false;
		this.isAnimating = true;
		// animate svg
		var self = this,
			onEndAnimation = function() {
				classie.addClass( self.el, 'pageload-loading' );
			};
		this._animateSVG( 'in', onEndAnimation );
		classie.add( this.el, 'show' );
	};

	SVGLoader.prototype.hide = function() {
		var self = this;
		classie.removeClass( this.el, 'pageload-loading' );
		this._animateSVG( 'out', function() {
			// reset path
			self.path.attr( 'd', self.initialPath );
			classie.removeClass( self.el, 'show' );
			self.isAnimating = false;
		} );
	};

	SVGLoader.prototype._animateSVG = function( dir, callback ) {
		var self = this,
			pos = 0,
			steps = dir === 'out' ? this.closingSteps : this.openingSteps,
			stepsTotal = dir === 'out' ? this.closingStepsTotal : this.openingStepsTotal,
			speed = dir === 'out' ? self.options.speedOut : self.options.speedIn,
			easing = dir === 'out' ? self.options.easingOut : self.options.easingIn,
			nextStep = function( pos ) {
				if( pos > stepsTotal - 1 ) {
					if( callback && typeof callback == 'function' ) {
						callback();
					}
					return;
				}
				self.path.animate( { 'path' : steps[pos] }, speed, easing, function() { nextStep(pos); } );
				pos++;
			};

		nextStep(pos);
	};

	// add to global namespace
	window.SVGLoader = SVGLoader;

})( window );










/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});















/*! lightgallery - v1.6.8 - 2018-03-10
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){return!!function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0}()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if(void 0!==e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),void 0!==e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){m(k.s.dynamicEl[b].responsive.split(","))}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){m(k.$items.eq(b).attr("data-responsive").split(","))}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var n=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(n=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(n=!0);var o=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(n)k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var p="";p=o&&o.youtube?"lg-has-youtube":o&&o.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else o?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),o&&o.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),!0===c&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?!1!==g.s.dynamicEl[b].downloadUrl&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){!0===b.s.escKey&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$outer.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||b.lgBusy||a(d.target).text()||(d.preventDefault(),b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg"))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mousemove.lg",function(){c=!1}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()});







/*! lg-video - v1.2.0 - 2017-11-16
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {
    
        'use strict';
    
        var defaults = {
            videoMaxWidth: '855px',

            autoplayFirstVideo: true,

            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,

            videojs: false,
            videojsOptions: {}
        };
    
        var Video = function(element) {
    
            this.core = $(element).data('lightGallery');
    
            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;
    
            this.init();
    
            return this;
        };
    
        Video.prototype.init = function() {
            var _this = this;
    
            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
    
            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
    
            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
                _this.core.$el.on('onSlideClick.lg.tm', function() {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    _this.loadVideoOnclick($el);
                });
            } else {
    
                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function() {
                    _this.loadVideoOnclick($(this));
                });
            }
    
            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
    
            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
            });
        };
    
        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};
    
            // Enable autoplay based on setting for first video if poster doesn't exist
            if (noPoster) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
                }
            }
    
            if (isVideo.youtube) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.vimeo) {
    
                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    
            } else if (isVideo.dailymotion) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }
    
                video = html;
    
            } else if (isVideo.vk) {
    
                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            }
    
            return video;
        };

        Video.prototype.loadVideoOnclick = function($el){

            var _this = this;
            // check slide has poster
            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                // check already video element present
                if (!$el.hasClass('lg-has-video')) {

                    $el.addClass('lg-video-playing lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function(_src, _html) {

                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                            }
                        }

                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);

                    } else {

                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                        _loadVideo(_src, _html);

                    }

                    var $tempImg = $el.find('.lg-object');
                    $el.find('.lg-video').append($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                        $el.removeClass('lg-complete');
                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
                            $el.addClass('lg-complete');
                        });
                    }

                } else {

                    var youtubePlayer = $el.find('.lg-youtube').get(0);
                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                    var html5Player = $el.find('.lg-html5').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');

                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    $el.addClass('lg-video-playing');

                }
            }
        };
    
        Video.prototype.destroy = function() {
            this.videoLoaded = false;
        };

        function onHasVideo(event, index, src, html) {
            /*jshint validthis:true */
            var _this = this;
            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
            if (html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                    }
                }
            }
        }

        function onAferAppendSlide(event, index) {
            /*jshint validthis:true */
            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
            if (!$videoCont.hasClass('lg-has-iframe')) {
                $videoCont.css('max-width', this.core.s.videoMaxWidth);
                this.videoLoaded = true;
            }
        }

        function onBeforeSlide(event, prevIndex, index) {
            /*jshint validthis:true */
            var _this = this;

            var $videoSlide = _this.core.$slide.eq(prevIndex);
            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
            var html5Player = $videoSlide.find('.lg-html5').get(0);
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');

            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            } if (vkPlayer) {
                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[index].src;
            } else {
                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

            }

            var _isVideo = _this.core.isVideo(_src, index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                _this.core.$outer.addClass('lg-hide-download');
            }

        }
    
        $.fn.lightGallery.modules.video = Video;
    
    })();

}));














/*! lg-thumbnail - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbHeight: '80px',
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toogleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        // extend module default settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.$el = $(element);
        this.$thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = (this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
        this.thumbIndex = this.core.index;

        if (this.core.s.animateThumb) {
            this.core.s.thumbHeight = '100%';
        }

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function() {
        var _this = this;
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function(){
                    _this.core.$outer.addClass('lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                this.core.$outer.addClass('lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb && this.core.doCss()) {
                if (this.core.s.enableThumbDrag) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toogle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {

                if (!_this.core.s.exThumbImage) {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    Thumbnail.prototype.setTranslate = function(value) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        this.core.$outer.find('.lg-thumb').css({
            transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
        });
    };

    Thumbnail.prototype.animateThumb = function(index) {
        var $thumb = this.core.$outer.find('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = ((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
            if (this.left > (this.thumbTotalWidth - this.thumbOuterWidth)) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!$thumb.hasClass('on')) {
                    this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.animate({
                        left: -this.left + 'px'
                    }, this.core.s.speed);
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.css('left', -this.left + 'px');
                }
            }

            this.setTranslate(this.left);

        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function() {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        _this.$thumbOuter.addClass('lg-grab');

        _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.$outer.scrollLeft += 1;
                _this.core.$outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
            }
        });

        $(window).on('mousemove.lg.thumb', function(e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        $(window).on('mouseup.lg.thumb', function() {
            if (isMoved) {
                isMoved = false;
                _this.$thumbOuter.removeClass('lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }

            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });

    };

    Thumbnail.prototype.enableThumbSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.originalEvent.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                isMoved = true;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchend.lg', function() {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });

    };

    Thumbnail.prototype.toogle = function() {
        var _this = this;
        if (_this.core.s.toogleThumb) {
            _this.core.$outer.addClass('lg-can-toggle');
            _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
            _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function() {
                _this.core.$outer.toggleClass('lg-thumb-open');
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function() {
        var _this = this;
        $(window).on('keydown.lg.thumb', function(e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.$outer.addClass('lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.$outer.removeClass('lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function() {
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
            this.$thumbOuter.remove();
            this.core.$outer.removeClass('lg-has-thumb');
        }
    };

    $.fn.lightGallery.modules.Thumbnail = Thumbnail;

})();

}));
