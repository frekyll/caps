!function(){const e="(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)",t="([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)",n=e=>e.toLowerCase(),r=e=>e.substr(0,1).toUpperCase()+e.substr(1);var a={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};function o(e){return 9===e||10===e}var i=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=function(e){return function(t,n,r){for(var o in n)o in a&&(n[a[o]]=n[o],delete n[o]);return e(t,n,r)}}(e)),function(a){for(var i=1,s="",f=arguments.length,c=[],p=0;p<a.length;p++)if(p<f-1){var u=arguments[p+1],d=S(a[p]),h=i;10===h&&(h=8),9===h&&(h=8),7===h&&(h=8),4===h&&(h=5),2===h?"/"===s?(d.push([2,"/",u]),s=""):d.push([2,u]):13===h&&t.comments?s+=String(u):13!==h&&d.push([0,h,u]),c.push.apply(c,d)}else c.push.apply(c,S(a[p]));var g,m=[null,{},[]],b=[[m,-1]];for(p=0;p<c.length;p++){var v=b[b.length-1][0],y=(d=c[p])[0];if(2===y&&/^\//.test(d[1])){var x=b[b.length-1][1];b.length>1&&(b.pop(),b[b.length-1][0][2][x]=e(v[0],v[1],v[2].length?v[2]:void 0))}else if(2===y){var w=[d[1],{},[]];v[2].push(w),b.push([w,v[2].length-1])}else if(5===y||0===y&&5===d[1]){for(var C,k="";p<c.length;p++)if(5===c[p][0])k=n(k,c[p][1]);else{if(0!==c[p][0]||5!==c[p][1])break;if("object"!=typeof c[p][2]||k)k=n(k,c[p][2]);else for(C in c[p][2])c[p][2].hasOwnProperty(C)&&!v[1][C]&&(v[1][C]=c[p][2][C])}11===c[p][0]&&p++;for(var A=p;p<c.length;p++)if(8===c[p][0]||5===c[p][0])v[1][k]?""===c[p][1]||(v[1][k]=n(v[1][k],c[p][1])):v[1][k]=r(c[p][1]);else{if(0!==c[p][0]||8!==c[p][1]&&5!==c[p][1]){!k.length||v[1][k]||p!==A||3!==c[p][0]&&12!==c[p][0]||(v[1][k]=k.toLowerCase()),3===c[p][0]&&p--;break}v[1][k]?""===c[p][2]||(v[1][k]=n(v[1][k],c[p][2])):v[1][k]=r(c[p][2])}}else if(5===y)v[1][d[1]]=!0;else if(0===y&&5===d[1])v[1][d[2]]=!0;else if(3===y)g=v[0],l.test(g)&&b.length&&(x=b[b.length-1][1],b.pop(),b[b.length-1][0][2][x]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(0===y&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?v[2].push.apply(v[2],d[2]):v[2].push(d[2]);else if(1===y)v[2].push(d[1]);else if(11!==y&&12!==y)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1])){if(t.createFragment)return t.createFragment(m[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function S(e){var n=[];7===i&&(i=4);for(var r=0;r<e.length;r++){var a=e.charAt(r);1===i&&"<"===a?(s.length&&n.push([1,s]),s="",i=2):">"!==a||o(i)||13===i?13===i&&/-$/.test(s)&&"-"===a?(t.comments&&n.push([8,s.substr(0,s.length-1)]),s="",i=1):2===i&&/^!--$/.test(s)?(t.comments&&n.push([2,s],[5,"comment"],[11]),s=a,i=13):1===i||13===i?s+=a:2===i&&"/"===a&&s.length||(2===i&&/\s/.test(a)?(s.length&&n.push([2,s]),s="",i=4):2===i?s+=a:4===i&&/[^\s"'=/]/.test(a)?(i=5,s=a):4===i&&/\s/.test(a)?(s.length&&n.push([5,s]),n.push([12])):5===i&&/\s/.test(a)?(n.push([5,s]),s="",i=6):5===i&&"="===a?(n.push([5,s],[11]),s="",i=7):5===i?s+=a:6!==i&&4!==i||"="!==a?6!==i&&4!==i||/\s/.test(a)?7===i&&'"'===a?i=10:7===i&&"'"===a?i=9:10===i&&'"'===a||9===i&&"'"===a?(n.push([8,s],[12]),s="",i=4):7!==i||/\s/.test(a)?8===i&&/\s/.test(a)?(n.push([8,s],[12]),s="",i=4):8!==i&&9!==i&&10!==i||(s+=a):(i=8,r--):(n.push([12]),/[\w-]/.test(a)?(s+=a,i=5):i=4):(n.push([11]),i=7)):(2===i&&s.length?n.push([2,s]):5===i?n.push([5,s]):8===i&&s.length&&n.push([8,s]),n.push([3]),s="",i=1)}return 1===i&&s.length?(n.push([1,s]),s=""):8===i&&s.length||10===i&&s.length||9===i&&s.length?(n.push([8,s]),s=""):5===i&&(n.push([5,s]),s=""),n}};function r(e){return"function"==typeof e||"string"==typeof e||e&&"object"==typeof e||null==e?e:n("",e)}},l=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7f-\uffff_:-]+)*$"),s=/\n[\s]+$/,f=/^\n[\s]+/,c=/[\s]+$/,p=/^[\s]+/,u=/[\n\s]+/g,d=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],h=["code","pre","textarea"],g=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],m=["async","autofocus","autoplay","checked","controls","default","defaultchecked","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","selected"],b=["indeterminate"],v=function(e){function t(t,n,r){var a;-1!==g.indexOf(t)&&(n.namespace="http://www.w3.org/2000/svg");var o=!1;n.namespace&&(o=n.namespace,delete n.namespace);var i=!1;if(n.is&&(i=n.is,delete n.is),o)a=i?e.createElementNS(o,t,{is:i}):e.createElementNS(o,t);else{if("!--"===t)return e.createComment(n.comment);a=i?e.createElement(t,{is:i}):e.createElement(t)}for(var l in n)if(n.hasOwnProperty(l)){var v=l.toLowerCase(),y=n[l];if("classname"===v&&(v="class",l="class"),"htmlFor"===l&&(l="for"),-1!==m.indexOf(v))if("true"===String(y))y=v;else if("false"===String(y))continue;"on"===v.slice(0,2)||-1!==b.indexOf(v)?a[l]=y:o?"xlink:href"===l?a.setAttributeNS("http://www.w3.org/1999/xlink",l,y):/^xmlns($|:)/i.test(l)||a.setAttributeNS(null,l,y):a.setAttribute(l,y)}return function e(t,n){if(Array.isArray(n))for(var r,a,o=t.nodeName.toLowerCase(),i=!1,l=0,g=n.length;l<g;l++){var m=n[l];if(Array.isArray(m))e(t,m);else{("number"==typeof m||"boolean"==typeof m||"function"==typeof m||m instanceof Date||m instanceof RegExp)&&(m=m.toString());var b=t.childNodes[t.childNodes.length-1];if("string"==typeof m)i=!0,b&&"#text"===b.nodeName?b.nodeValue+=m:(m=t.ownerDocument.createTextNode(m),t.appendChild(m),b=m),l===g-1&&(i=!1,-1===d.indexOf(o)&&-1===h.indexOf(o)?""===(r=b.nodeValue.replace(f,"").replace(c,"").replace(s,"").replace(u," "))?t.removeChild(b):b.nodeValue=r:-1===h.indexOf(o)&&(a=0===l?"":" ",r=b.nodeValue.replace(f,a).replace(p," ").replace(c,"").replace(s,"").replace(u," "),b.nodeValue=r));else if(m&&m.nodeType){i&&(i=!1,-1===d.indexOf(o)&&-1===h.indexOf(o)?""===(r=b.nodeValue.replace(f,"").replace(s," ").replace(u," "))?t.removeChild(b):b.nodeValue=r:-1===h.indexOf(o)&&(r=b.nodeValue.replace(p," ").replace(f,"").replace(s," ").replace(u," "),b.nodeValue=r));var v=m.nodeName;v&&(o=v.toLowerCase()),t.appendChild(m)}}}}(a,r),a}var n=i(t,{comments:!0,createFragment:function t(n){for(var r=e.createDocumentFragment(),a=0;a<n.length;a++)null!=n[a]&&(Array.isArray(n[a])?r.appendChild(t(n[a])):("string"==typeof n[a]&&(n[a]=e.createTextNode(n[a])),r.appendChild(n[a])));return r}});return n.default=n,n.createComment=t,n}(document),y="0.1.0",x="Capitalize titles in the browser",w={},C=[],k=[];function A(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var n,r=!0===t.prepend?"prepend":"append",a=void 0!==t.container?t.container:document.querySelector("head"),o=C.indexOf(a);return-1===o&&(o=C.push(a)-1,k[o]={}),void 0!==k[o]&&void 0!==k[o][r]?n=k[o][r]:(n=k[o][r]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===r?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),n.styleSheet?n.styleSheet.cssText+=e:n.textContent+=e,n}(w=A).insertCss=A;var S=w,$="caps \u2022 "+x;document.title=$;var _=(S("* {\n    box-sizing: border-box;\n  }\n\n  :root {\n    --bg-color: rgb(255, 230, 230);\n    --text-color-accent: rgb(150, 150, 150);\n    --text-color-link: rgb(215, 45, 45);\n    --text-color: rgb(75, 75, 75);\n  }\n\n  body {\n    background-color: var(--bg-color);\n    color: var(--text-color);\n    font-family: palatino, georgia, serif;\n    margin: 0;\n  }\n\n  ._0e842f76 {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 40em;\n    padding: 2rem;\n  }"),"_0e842f76"),O=(S("._268aa966 label {\n    display: block;\n    margin-bottom: .5rem;\n  }\n\n  ._268aa966 input,._268aa966 textarea {\n    border: 2px solid var(--text-color-accent);\n    display: block;\n    font-family: palatino, georgia, serif;\n    font-size: 1.5rem;\n    height: 3rem;\n    width: 100%;\n  }\n\n  ._268aa966 input {\n    margin-bottom: 1rem;\n    border-radius: .25rem;\n  }\n\n  ._268aa966 textarea {\n    -webkit-appearance: none;\n    border-bottom-left-radius: .25rem;\n    border-right: 0;\n    border-top-left-radius: .25rem;\n    line-height: 1.5;\n    resize: none;\n    z-index: 1;\n  }\n\n  ._268aa966 div {\n    display: flex;\n  }\n\n  ._268aa966 div button {\n    background-color: #fff;\n    border-bottom-right-radius: .25rem;\n    border-top-right-radius: .25rem;\n    border: 2px solid var(--text-color-accent);\n    color: var(--text-color-accent);\n    cursor: pointer;\n    font-size: .875rem;\n    line-height: 1;\n    margin: 0;\n    padding: .5rem 1rem;\n  }\n\n  ._268aa966 div button:hover {\n    border-color: var(--text-color);\n    color: var(--text-color);\n  }"),"_268aa966"),F=(S("._82544965 {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 4rem;\n  }\n\n  ._82544965 h1 {\n    font-size: 1.5rem;\n    margin: 0;\n  }\n\n  ._82544965 h1 span {\n    color: var(--text-color-accent);\n    font-family: system-ui, sans-serif;\n    font-size: .875rem;\n    font-weight: normal;\n  }\n\n  ._82544965 a {\n    color: var(--text-color-link);\n  }"),"_82544965"),L=v`<textarea readonly></textarea>`,N=v`<button onclick=${function(e){L.select(),L.select(0,99999),document.execCommand("copy")}}>Copy</button>`,T=v`
  <div class="${_}">
    ${v`
  <header class=${F}>
    <h1>caps <span>v${y}</span></h1>
    <nav>
      <a href="https://github.com/frekyll/caps">GitHub</a>
    </nav>
  </header>
`}
    ${v`
  <div class=${O}>
    <label>Input:</label>
    <input onkeyup=${function(a){L.innerText=(a=>{if(!("string"==typeof(o=a)||o&&"object"==typeof o&&"[object String]"===Object.prototype.toString.call(o)))return;var o;let i=[],l=/[:.;?!] |(?: |^)["\u014c]/g,s=0;for(;;){let o=l.exec(a);if(i.push(a.substring(s,o?o.index:a.length).replace(/\b([A-Za-z][a-z.'\xd5]*)\b/g,e=>/[A-Za-z]\.[A-Za-z]/.test(e)?e:r(e)).replace(RegExp("\\b"+e+"\\b","ig"),n).replace(RegExp("^"+t+e+"\\b","ig"),(e,t,n)=>t+r(n)).replace(RegExp("\\b"+e+t+"$","ig"),r)),s=l.lastIndex,!o)break;i.push(o[0])}return i.join("").replace(/ V(s?)\. /gi,"v$1.").replace(/(['\xd5])S\b/gi,"$1s").replace(/\b(AT&T|Q&A)\b/gi,e=>e.toUpperCase())})(a.target.value)}} type="text">
    <label>Output:</label>
    <div>
      ${L}
      ${N}
    </div>
  </div>
`}
  </div>
`;document.body.appendChild(T)}();