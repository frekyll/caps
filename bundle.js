!function(){var e={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};function t(e){return 9===e||10===e}var n=function(n,a){a||(a={});var i=a.concat||function(e,t){return String(e)+String(t)};return!1!==a.attrToProp&&(n=function(t){return function(n,r,a){for(var i in r)i in e&&(r[e[i]]=r[i],delete r[i]);return t(n,r,a)}}(n)),function(e){for(var s=1,l="",f=arguments.length,p=[],c=0;c<e.length;c++)if(c<f-1){var u=arguments[c+1],d=k(e[c]),h=s;10===h&&(h=8),9===h&&(h=8),7===h&&(h=8),4===h&&(h=5),2===h?"/"===l?(d.push([2,"/",u]),l=""):d.push([2,u]):13===h&&a.comments?l+=String(u):13!==h&&d.push([0,h,u]),p.push.apply(p,d)}else p.push.apply(p,k(e[c]));var g,m=[null,{},[]],b=[[m,-1]];for(c=0;c<p.length;c++){var y=b[b.length-1][0],v=(d=p[c])[0];if(2===v&&/^\//.test(d[1])){var x=b[b.length-1][1];b.length>1&&(b.pop(),b[b.length-1][0][2][x]=n(y[0],y[1],y[2].length?y[2]:void 0))}else if(2===v){var C=[d[1],{},[]];y[2].push(C),b.push([C,y[2].length-1])}else if(5===v||0===v&&5===d[1]){for(var w,A="";c<p.length;c++)if(5===p[c][0])A=i(A,p[c][1]);else{if(0!==p[c][0]||5!==p[c][1])break;if("object"!=typeof p[c][2]||A)A=i(A,p[c][2]);else for(w in p[c][2])p[c][2].hasOwnProperty(w)&&!y[1][w]&&(y[1][w]=p[c][2][w])}11===p[c][0]&&c++;for(var S=c;c<p.length;c++)if(8===p[c][0]||5===p[c][0])y[1][A]?""===p[c][1]||(y[1][A]=i(y[1][A],p[c][1])):y[1][A]=o(p[c][1]);else{if(0!==p[c][0]||8!==p[c][1]&&5!==p[c][1]){!A.length||y[1][A]||c!==S||3!==p[c][0]&&12!==p[c][0]||(y[1][A]=A.toLowerCase()),3===p[c][0]&&c--;break}y[1][A]?""===p[c][2]||(y[1][A]=i(y[1][A],p[c][2])):y[1][A]=o(p[c][2])}}else if(5===v)y[1][d[1]]=!0;else if(0===v&&5===d[1])y[1][d[2]]=!0;else if(3===v)g=y[0],r.test(g)&&b.length&&(x=b[b.length-1][1],b.pop(),b[b.length-1][0][2][x]=n(y[0],y[1],y[2].length?y[2]:void 0));else if(0===v&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(1===v)y[2].push(d[1]);else if(11!==v&&12!==v)throw new Error("unhandled: "+v)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1])){if(a.createFragment)return a.createFragment(m[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=n(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n=[];7===s&&(s=4);for(var r=0;r<e.length;r++){var i=e.charAt(r);1===s&&"<"===i?(l.length&&n.push([1,l]),l="",s=2):">"!==i||t(s)||13===s?13===s&&/-$/.test(l)&&"-"===i?(a.comments&&n.push([8,l.substr(0,l.length-1)]),l="",s=1):2===s&&/^!--$/.test(l)?(a.comments&&n.push([2,l],[5,"comment"],[11]),l=i,s=13):1===s||13===s?l+=i:2===s&&"/"===i&&l.length||(2===s&&/\s/.test(i)?(l.length&&n.push([2,l]),l="",s=4):2===s?l+=i:4===s&&/[^\s"'=/]/.test(i)?(s=5,l=i):4===s&&/\s/.test(i)?(l.length&&n.push([5,l]),n.push([12])):5===s&&/\s/.test(i)?(n.push([5,l]),l="",s=6):5===s&&"="===i?(n.push([5,l],[11]),l="",s=7):5===s?l+=i:6!==s&&4!==s||"="!==i?6!==s&&4!==s||/\s/.test(i)?7===s&&'"'===i?s=10:7===s&&"'"===i?s=9:10===s&&'"'===i||9===s&&"'"===i?(n.push([8,l],[12]),l="",s=4):7!==s||/\s/.test(i)?8===s&&/\s/.test(i)?(n.push([8,l],[12]),l="",s=4):8!==s&&9!==s&&10!==s||(l+=i):(s=8,r--):(n.push([12]),/[\w-]/.test(i)?(l+=i,s=5):s=4):(n.push([11]),s=7)):(2===s&&l.length?n.push([2,l]):5===s?n.push([5,l]):8===s&&l.length&&n.push([8,l]),n.push([3]),l="",s=1)}return 1===s&&l.length?(n.push([1,l]),l=""):8===s&&l.length||10===s&&l.length||9===s&&l.length?(n.push([8,l]),l=""):5===s&&(n.push([5,l]),l=""),n}};function o(e){return"function"==typeof e||"string"==typeof e||e&&"object"==typeof e||null==e?e:i("",e)}},r=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7f-\uffff_:-]+)*$"),a=/\n[\s]+$/,i=/^\n[\s]+/,o=/[\s]+$/,s=/^[\s]+/,l=/[\n\s]+/g,f=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],p=["code","pre","textarea"],c=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],u=["async","autofocus","autoplay","checked","controls","default","defaultchecked","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","selected"],d=["indeterminate"],h=function(e){function t(t,n,r){var h;-1!==c.indexOf(t)&&(n.namespace="http://www.w3.org/2000/svg");var g=!1;n.namespace&&(g=n.namespace,delete n.namespace);var m=!1;if(n.is&&(m=n.is,delete n.is),g)h=m?e.createElementNS(g,t,{is:m}):e.createElementNS(g,t);else{if("!--"===t)return e.createComment(n.comment);h=m?e.createElement(t,{is:m}):e.createElement(t)}for(var b in n)if(n.hasOwnProperty(b)){var y=b.toLowerCase(),v=n[b];if("classname"===y&&(y="class",b="class"),"htmlFor"===b&&(b="for"),-1!==u.indexOf(y))if("true"===String(v))v=y;else if("false"===String(v))continue;"on"===y.slice(0,2)||-1!==d.indexOf(y)?h[b]=v:g?"xlink:href"===b?h.setAttributeNS("http://www.w3.org/1999/xlink",b,v):/^xmlns($|:)/i.test(b)||h.setAttributeNS(null,b,v):h.setAttribute(b,v)}return function e(t,n){if(Array.isArray(n))for(var r,c,u=t.nodeName.toLowerCase(),d=!1,h=0,g=n.length;h<g;h++){var m=n[h];if(Array.isArray(m))e(t,m);else{("number"==typeof m||"boolean"==typeof m||"function"==typeof m||m instanceof Date||m instanceof RegExp)&&(m=m.toString());var b=t.childNodes[t.childNodes.length-1];if("string"==typeof m)d=!0,b&&"#text"===b.nodeName?b.nodeValue+=m:(m=t.ownerDocument.createTextNode(m),t.appendChild(m),b=m),h===g-1&&(d=!1,-1===f.indexOf(u)&&-1===p.indexOf(u)?""===(r=b.nodeValue.replace(i,"").replace(o,"").replace(a,"").replace(l," "))?t.removeChild(b):b.nodeValue=r:-1===p.indexOf(u)&&(c=0===h?"":" ",r=b.nodeValue.replace(i,c).replace(s," ").replace(o,"").replace(a,"").replace(l," "),b.nodeValue=r));else if(m&&m.nodeType){d&&(d=!1,-1===f.indexOf(u)&&-1===p.indexOf(u)?""===(r=b.nodeValue.replace(i,"").replace(a," ").replace(l," "))?t.removeChild(b):b.nodeValue=r:-1===p.indexOf(u)&&(r=b.nodeValue.replace(s," ").replace(i,"").replace(a," ").replace(l," "),b.nodeValue=r));var y=m.nodeName;y&&(u=y.toLowerCase()),t.appendChild(m)}}}}(h,r),h}var r=n(t,{comments:!0,createFragment:function t(n){for(var r=e.createDocumentFragment(),a=0;a<n.length;a++)null!=n[a]&&(Array.isArray(n[a])?r.appendChild(t(n[a])):("string"==typeof n[a]&&(n[a]=e.createTextNode(n[a])),r.appendChild(n[a])));return r}});return r.default=r,r.createComment=t,r}(document);const g="(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)",m="([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)",b=e=>e.toLowerCase(),y=e=>e.substr(0,1).toUpperCase()+e.substr(1);var v={},x=[],C=[];function w(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var n,r=!0===t.prepend?"prepend":"append",a=void 0!==t.container?t.container:document.querySelector("head"),i=x.indexOf(a);return-1===i&&(i=x.push(a)-1,C[i]={}),void 0!==C[i]&&void 0!==C[i][r]?n=C[i][r]:(n=C[i][r]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===r?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),n.styleSheet?n.styleSheet.cssText+=e:n.textContent+=e,n}(v=w).insertCss=w;var A=v;document.title="Caps - Capitalize headings";var S=(A("* {\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: rgb(255, 230, 230);\n    color: rgb(75, 75, 75);\n    font-family: palatino, georgia, serif;\n    margin: 0;\n  }\n\n  ._ed3db588 {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 60em;\n    padding: 2rem;\n  }\n\n  ._ed3db588 h1 {\n    font-size: 1.5rem;\n    font-weight: normal;\n    margin-bottom: 2rem;\n    margin-top: 0;\n  }"),"_ed3db588"),k=(A("._6a81430d label {\n    display: block;\n    margin-bottom: .5rem;\n  }\n\n  ._6a81430d input,._6a81430d textarea {\n    display: block;\n    font-family: palatino, georgia, serif;\n    font-size: 1.5rem;\n    height: 3rem;\n    width: 100%;\n  }\n\n  ._6a81430d input {\n    margin-bottom: 1rem;\n  }\n\n  ._6a81430d textarea {\n    line-height: 1.5;\n  }"),"_6a81430d"),O=h`<textarea readonly></textarea>`,$=h`
  <div class="${S}">
    <h1>${"Caps - Capitalize headings"}</h1>
    ${h`
  <div class=${k}>
    <label>Input:</label>
    <input onkeyup=${function(e){O.innerText=(e=>{if(!("string"==typeof(t=e)||t&&"object"==typeof t&&"[object String]"===Object.prototype.toString.call(t)))return;var t;let n=[],r=/[:.;?!] |(?: |^)["\u014c]/g,a=0;for(;;){let t=r.exec(e);if(n.push(e.substring(a,t?t.index:e.length).replace(/\b([A-Za-z][a-z.'\xd5]*)\b/g,e=>/[A-Za-z]\.[A-Za-z]/.test(e)?e:y(e)).replace(RegExp("\\b"+g+"\\b","ig"),b).replace(RegExp("^"+m+g+"\\b","ig"),(e,t,n)=>t+y(n)).replace(RegExp("\\b"+g+m+"$","ig"),y)),a=r.lastIndex,!t)break;n.push(t[0])}return n.join("").replace(/ V(s?)\. /gi,"v$1.").replace(/(['\xd5])S\b/gi,"$1s").replace(/\b(AT&T|Q&A)\b/gi,e=>e.toUpperCase())})(e.target.value)}} type="text">
    <label>Output:</label>
    ${O}
  </div>
`}
  </div>
`;document.body.appendChild($)}();