!function(){var e={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};function t(e){return 9===e||10===e}var n=function(n,a){a||(a={});var o=a.concat||function(e,t){return String(e)+String(t)};return!1!==a.attrToProp&&(n=function(t){return function(n,r,a){for(var o in r)o in e&&(r[e[o]]=r[o],delete r[o]);return t(n,r,a)}}(n)),function(e){for(var l=1,s="",c=arguments.length,f=[],p=0;p<e.length;p++)if(p<c-1){var u=arguments[p+1],d=S(e[p]),h=l;10===h&&(h=8),9===h&&(h=8),7===h&&(h=8),4===h&&(h=5),2===h?"/"===s?(d.push([2,"/",u]),s=""):d.push([2,u]):13===h&&a.comments?s+=String(u):13!==h&&d.push([0,h,u]),f.push.apply(f,d)}else f.push.apply(f,S(e[p]));var g,m=[null,{},[]],b=[[m,-1]];for(p=0;p<f.length;p++){var v=b[b.length-1][0],y=(d=f[p])[0];if(2===y&&/^\//.test(d[1])){var x=b[b.length-1][1];b.length>1&&(b.pop(),b[b.length-1][0][2][x]=n(v[0],v[1],v[2].length?v[2]:void 0))}else if(2===y){var w=[d[1],{},[]];v[2].push(w),b.push([w,v[2].length-1])}else if(5===y||0===y&&5===d[1]){for(var k,C="";p<f.length;p++)if(5===f[p][0])C=o(C,f[p][1]);else{if(0!==f[p][0]||5!==f[p][1])break;if("object"!=typeof f[p][2]||C)C=o(C,f[p][2]);else for(k in f[p][2])f[p][2].hasOwnProperty(k)&&!v[1][k]&&(v[1][k]=f[p][2][k])}11===f[p][0]&&p++;for(var A=p;p<f.length;p++)if(8===f[p][0]||5===f[p][0])v[1][C]?""===f[p][1]||(v[1][C]=o(v[1][C],f[p][1])):v[1][C]=i(f[p][1]);else{if(0!==f[p][0]||8!==f[p][1]&&5!==f[p][1]){!C.length||v[1][C]||p!==A||3!==f[p][0]&&12!==f[p][0]||(v[1][C]=C.toLowerCase()),3===f[p][0]&&p--;break}v[1][C]?""===f[p][2]||(v[1][C]=o(v[1][C],f[p][2])):v[1][C]=i(f[p][2])}}else if(5===y)v[1][d[1]]=!0;else if(0===y&&5===d[1])v[1][d[2]]=!0;else if(3===y)g=v[0],r.test(g)&&b.length&&(x=b[b.length-1][1],b.pop(),b[b.length-1][0][2][x]=n(v[0],v[1],v[2].length?v[2]:void 0));else if(0===y&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=o("",d[2])),Array.isArray(d[2][0])?v[2].push.apply(v[2],d[2]):v[2].push(d[2]);else if(1===y)v[2].push(d[1]);else if(11!==y&&12!==y)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1])){if(a.createFragment)return a.createFragment(m[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=n(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function S(e){var n=[];7===l&&(l=4);for(var r=0;r<e.length;r++){var o=e.charAt(r);1===l&&"<"===o?(s.length&&n.push([1,s]),s="",l=2):">"!==o||t(l)||13===l?13===l&&/-$/.test(s)&&"-"===o?(a.comments&&n.push([8,s.substr(0,s.length-1)]),s="",l=1):2===l&&/^!--$/.test(s)?(a.comments&&n.push([2,s],[5,"comment"],[11]),s=o,l=13):1===l||13===l?s+=o:2===l&&"/"===o&&s.length||(2===l&&/\s/.test(o)?(s.length&&n.push([2,s]),s="",l=4):2===l?s+=o:4===l&&/[^\s"'=/]/.test(o)?(l=5,s=o):4===l&&/\s/.test(o)?(s.length&&n.push([5,s]),n.push([12])):5===l&&/\s/.test(o)?(n.push([5,s]),s="",l=6):5===l&&"="===o?(n.push([5,s],[11]),s="",l=7):5===l?s+=o:6!==l&&4!==l||"="!==o?6!==l&&4!==l||/\s/.test(o)?7===l&&'"'===o?l=10:7===l&&"'"===o?l=9:10===l&&'"'===o||9===l&&"'"===o?(n.push([8,s],[12]),s="",l=4):7!==l||/\s/.test(o)?8===l&&/\s/.test(o)?(n.push([8,s],[12]),s="",l=4):8!==l&&9!==l&&10!==l||(s+=o):(l=8,r--):(n.push([12]),/[\w-]/.test(o)?(s+=o,l=5):l=4):(n.push([11]),l=7)):(2===l&&s.length?n.push([2,s]):5===l?n.push([5,s]):8===l&&s.length&&n.push([8,s]),n.push([3]),s="",l=1)}return 1===l&&s.length?(n.push([1,s]),s=""):8===l&&s.length||10===l&&s.length||9===l&&s.length?(n.push([8,s]),s=""):5===l&&(n.push([5,s]),s=""),n}};function i(e){return"function"==typeof e||"string"==typeof e||e&&"object"==typeof e||null==e?e:o("",e)}},r=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7f-\uffff_:-]+)*$"),a=/\n[\s]+$/,o=/^\n[\s]+/,i=/[\s]+$/,l=/^[\s]+/,s=/[\n\s]+/g,c=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],f=["code","pre","textarea"],p=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],u=["async","autofocus","autoplay","checked","controls","default","defaultchecked","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","selected"],d=["indeterminate"],h=function(e){function t(t,n,r){var h;-1!==p.indexOf(t)&&(n.namespace="http://www.w3.org/2000/svg");var g=!1;n.namespace&&(g=n.namespace,delete n.namespace);var m=!1;if(n.is&&(m=n.is,delete n.is),g)h=m?e.createElementNS(g,t,{is:m}):e.createElementNS(g,t);else{if("!--"===t)return e.createComment(n.comment);h=m?e.createElement(t,{is:m}):e.createElement(t)}for(var b in n)if(n.hasOwnProperty(b)){var v=b.toLowerCase(),y=n[b];if("classname"===v&&(v="class",b="class"),"htmlFor"===b&&(b="for"),-1!==u.indexOf(v))if("true"===String(y))y=v;else if("false"===String(y))continue;"on"===v.slice(0,2)||-1!==d.indexOf(v)?h[b]=y:g?"xlink:href"===b?h.setAttributeNS("http://www.w3.org/1999/xlink",b,y):/^xmlns($|:)/i.test(b)||h.setAttributeNS(null,b,y):h.setAttribute(b,y)}return function e(t,n){if(Array.isArray(n))for(var r,p,u=t.nodeName.toLowerCase(),d=!1,h=0,g=n.length;h<g;h++){var m=n[h];if(Array.isArray(m))e(t,m);else{("number"==typeof m||"boolean"==typeof m||"function"==typeof m||m instanceof Date||m instanceof RegExp)&&(m=m.toString());var b=t.childNodes[t.childNodes.length-1];if("string"==typeof m)d=!0,b&&"#text"===b.nodeName?b.nodeValue+=m:(m=t.ownerDocument.createTextNode(m),t.appendChild(m),b=m),h===g-1&&(d=!1,-1===c.indexOf(u)&&-1===f.indexOf(u)?""===(r=b.nodeValue.replace(o,"").replace(i,"").replace(a,"").replace(s," "))?t.removeChild(b):b.nodeValue=r:-1===f.indexOf(u)&&(p=0===h?"":" ",r=b.nodeValue.replace(o,p).replace(l," ").replace(i,"").replace(a,"").replace(s," "),b.nodeValue=r));else if(m&&m.nodeType){d&&(d=!1,-1===c.indexOf(u)&&-1===f.indexOf(u)?""===(r=b.nodeValue.replace(o,"").replace(a," ").replace(s," "))?t.removeChild(b):b.nodeValue=r:-1===f.indexOf(u)&&(r=b.nodeValue.replace(l," ").replace(o,"").replace(a," ").replace(s," "),b.nodeValue=r));var v=m.nodeName;v&&(u=v.toLowerCase()),t.appendChild(m)}}}}(h,r),h}var r=n(t,{comments:!0,createFragment:function t(n){for(var r=e.createDocumentFragment(),a=0;a<n.length;a++)null!=n[a]&&(Array.isArray(n[a])?r.appendChild(t(n[a])):("string"==typeof n[a]&&(n[a]=e.createTextNode(n[a])),r.appendChild(n[a])));return r}});return r.default=r,r.createComment=t,r}(document);const g="(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)",m="([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)",b=e=>e.toLowerCase(),v=e=>e.substr(0,1).toUpperCase()+e.substr(1);var y={},x=[],w=[];function k(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var n,r=!0===t.prepend?"prepend":"append",a=void 0!==t.container?t.container:document.querySelector("head"),o=x.indexOf(a);return-1===o&&(o=x.push(a)-1,w[o]={}),void 0!==w[o]&&void 0!==w[o][r]?n=w[o][r]:(n=w[o][r]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===r?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),n.styleSheet?n.styleSheet.cssText+=e:n.textContent+=e,n}(y=k).insertCss=k;var C=y;document.title="caps - Capitalize titles in the browser";var A=h`
  <meta content='width=device-width, initial-scale=1' name='viewport'>
`;document.head.appendChild(A);var S=(C(":root {\n    --background: #eee;\n    --border: #fff;\n    --text: #333;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  ._bea250b9 {\n    background-color: var(--background);\n    color: var(--text);\n    font-family: system-ui, helvetica, sans-serif;\n    margin: 0;\n    padding: 1rem;\n  }\n  .theme {\n    --background: #111;\n    --text: #fff;\n  }"),"_bea250b9");document.body.classList.add(""+S);var $=(C("._c5b772f0 {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 40em;\n  }\n  ._c5b772f0 label {\n    display: block;\n    margin-bottom: .5rem;\n  }\n  ._c5b772f0 input,._c5b772f0 textarea {\n    -webkit-appearance: none;\n    border: 2px solid var(--border);\n    display: block;\n    font-size: 1.5rem;\n    height: 3rem;\n    width: 100%;\n  }\n  ._c5b772f0 input {\n    border-radius: .25rem;\n    margin-bottom: 1rem;\n  }\n  ._c5b772f0 textarea {\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: 0;\n    border-right: hidden;\n    border-top-left-radius: .25rem;\n    border-top-right-radius: 0;\n    line-height: 1.75;\n    overflow-y: hidden;\n    resize: none;\n    z-index: 1;\n  }\n  ._c5b772f0 div {\n    display: flex;\n  }\n  ._c5b772f0 div button {\n    background-color: var(--background);\n    border-bottom-right-radius: .25rem;\n    border-top-right-radius: .25rem;\n    border: 2px solid var(--border);\n    color: var(--text);\n    cursor: pointer;\n    font-size: .875rem;\n    line-height: 1;\n    margin: 0;\n    padding: .5rem 1rem;\n  }"),"_c5b772f0"),_=h`
  <header class=${C("._52268544 {\n    margin-bottom: 4rem;\n  }\n  ._52268544 h1 {\n    font-weight: 600;\n    margin-bottom: .5rem;\n    margin-top: 0;\n  }\n  ._52268544 nav {\n    display: block;\n  }\n  ._52268544 a {\n    color: var(--text);\n    margin-right: .75rem;\n  }\n  ._52268544 code {\n    background-color: #fff;\n    border-radius: .25rem;\n    color: #333;\n    font-family: menlo, monaco, monospace;\n    font-size: 1rem;\n    padding-left: .25rem;\n    padding-right: .25rem;\n  }\n  ._52268544 ul {\n    line-height: 1.5;\n    padding-left: 1rem;\n  }\n  ._52268544 span {\n    white-space: nowrap;\n  }"),"_52268544"}>
    <h1>caps</h1>
    <nav>
      <a href="https://github.com/frekyll/caps">View on GitHub</a>
      <a href onclick=${function(e){e.preventDefault(),document.body.classList.toggle("theme")}}>Toggle Theme</a>
    </nav>
    <ul>
      <li>You can use the key binding <span><code>Ctrl</code> + <code>v</code></span> to copy the output.</li>
      <li>Deselect the current field with <code>Esc</code>.</li>
    </ul>
  </header>
`,E=h`<input autofocus oninput=${function(e){e.target.value=e.target.value.replace(/[\u2013]/g,"-").replace(/[\u2014]/g,"--").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2022]/g,"*")}} onkeyup=${function(e){L.innerText=(e=>{if(!("string"==typeof(t=e)||t&&"object"==typeof t&&"[object String]"===Object.prototype.toString.call(t)))return;var t;let n=[],r=/[:.;?!] |(?: |^)["\u014c]/g,a=0;for(;;){let t=r.exec(e);if(n.push(e.substring(a,t?t.index:e.length).replace(/\b([A-Za-z][a-z.'\xd5]*)\b/g,e=>/[A-Za-z]\.[A-Za-z]/.test(e)?e:v(e)).replace(RegExp("\\b"+g+"\\b","ig"),b).replace(RegExp("^"+m+g+"\\b","ig"),(e,t,n)=>t+v(n)).replace(RegExp("\\b"+g+m+"$","ig"),v)),a=r.lastIndex,!t)break;n.push(t[0])}return n.join("").replace(/ V(s?)\. /gi,"v$1.").replace(/(['\xd5])S\b/gi,"$1s").replace(/\b(AT&T|Q&A)\b/gi,e=>e.toUpperCase())})(e.target.value)}} type='text'>`,L=h`<textarea readonly></textarea>`,O=h`<button onclick=${F}>Copy</button>`,T=h`
  <div>
    ${_}
    ${h`
  <div class=${$}>
    <label>Input:</label>
      ${E}
    <label>Output:</label>
    <div>
      ${L}
      ${O}
    </div>
  </div>
`}
  </div>
`;function F(e){L.focus(),L.select(),L.select(0,99999),document.execCommand("copy")}document.body.appendChild(T),document.addEventListener("keydown",(function(e){"Escape"===e.key&&this.activeElement.blur(),e.ctrlKey&&"v"===e.key&&F()}))}();